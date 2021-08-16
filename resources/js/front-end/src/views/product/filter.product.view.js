import { filter, values } from "lodash"
import { api } from "../../lib/callApi"
import createEl from "../../lib/createEl"
import { DetailProductView } from "./detail.product.view"
require('./scss/filter-product.scss')

export const FilterProductView = async ({ categoryId, filterOptions }) => {

    const El = createEl({ classNames: ['filter-product'] })
    const res = await api({
        url: "/product",
        data: {
            action: "type",
            method: "aggregate",
            filter: [{
                $match: {
                    "matchs.category": {
                        $all: [categoryId]
                    }
                },
            },
            { $project: { matchs: 0 } }
            ],
        }
    })
    const types = {}
    res.response.forEach(type => {
        types[type.name] = types[type.name] ?? [];
        types[type.name].push({
            _id: type._id['$oid'],
            value: type.value
        })
    });
    // console.log(types);
    const typeKeys = Object.keys(types)
    const typeValues = Object.values(types)
    typeKeys.forEach((key, id) => {
        El.innerHTML += `
            <h3>${key}:</h3>
            <select name="${key}" value="" class="ram">
                <option value="">tac ca</option>
            ${typeValues[id].map(value =>
            `<option value="${value._id}" >${value.value}</option>`
        ).reduce((acc, option) => acc + option)
            }
         </select>`
    })
    El.innerHTML += `<button class="btn-filter-product" >loc</button>`



    return El
}