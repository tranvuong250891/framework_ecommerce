import { random } from "lodash";

const order = {
    id: "_id",
    sku: random(),
    detail_id: ['op_id_1, op_id_2, op_id_3'],
    addr: "nam chinh - duc linh - binh thuan",
    phone: 0909090,
    payment_id: 'id',
    create_at: 16225855455,
    note: "sadhas",
    user_id: "user_id",
}

const detailOrder = {
    id: "id",
    qty: 12,
    option_id: "option_id",

}

const payments = [
    {
        _id: "_id",
        method: "card",
    },
    {
        _id: "_id",
        method: "momo",
    },
    {
        _id: "_id",
        method: "cod",
    },

]