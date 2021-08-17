import createEl from "../../lib/createEl"
import "./scss/slide-lib.scss"

export const SlideLibView = (imgs) => {
    const El = createEl({ classNames: ['ctn-slide'] })
    El.innerHTML = `
        <div class="img img-show" style="background-image:url('${imgs[0]}')"></div>
        <div class="fl  ctn-img-detail">
            <div nameImg="${imgs[0]}" class="img-detail img" style="background-image:url('${imgs[0]}')"></div>
            <div nameImg="${imgs[1]}" class="img-detail img" style="background-image:url('${imgs[1]}')"></div>
            <div nameImg="${imgs[2]}" class="img-detail img" style="background-image:url('${imgs[2]}')"></div>
            <div nameImg="${imgs[3]}" class="img-detail img" style="background-image:url('${imgs[3]}')"></div>
            <div nameImg="${imgs[4] || imgs[0]}" class="img-detail img" style="background-image:url('${imgs[4] || imgs[0]}')"></div>
        </div>`

    El.querySelectorAll('.img-detail').forEach(img => {
        img.onclick = () => {
            const name = img.getAttribute('nameImg')
            El.querySelector('.img-show').style.backgroundImage = `url('${name}')`
        }
    })
    return El

}