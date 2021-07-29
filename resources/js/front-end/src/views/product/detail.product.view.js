import createEl from '../../lib/createEl';
import './scss/detail-product.scss'




export const DetailProductView = (product) => {

    const { discount, title, name, options, img, _id, matchs } = product

    const El = createEl({
        elName: 'a',
        attrs: {
            url: matchs.url.nameUrl,
        }
    })
    console.log(img);
    El.innerHTML = `
        <div id="product-detail" class="fl col">
            <div class="img-bg" style=" background-image: url('${img}');"></div>
            <span class="label tragop">tra gop 0%</span>
            <div class="discount">
                <span> ${discount * 100}% </span>
            </div>
            <div class="content">
                <h2 class="name">${name}</h2>
                <div class="compare">
                    <span class="label">${options[0].ram}</span>
                    <span class="label">${options[0].rom ?? options[0].ssd}</span>
                    <span class="label">${options[0].cpu}</span>
                </div>
                <div class="star">
                    <span class="item-star active">&starf;</span>
                    <span class="item-star active">&starf;</span>
                    <span class="item-star">&starf;</span>
                    <span class="item-star">&starf;</span>
                    <span class="item-star">&starf;</span>
                    <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>${options[0].price}<sup sup ></sup> đ</h3 >
            </div >
        </div >
    
    `

    return El
}