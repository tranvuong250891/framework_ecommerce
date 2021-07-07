var CtnModalImg = document.querySelector('#ctn-modal-img')
var inputValue = document.querySelector('#input-img-value')



function getNameValueInput(img) {
    CtnModalImg.style.display = 'none'
    setValueImg(img, inputValue);
}

function setValueImg(imgName, input) {
    let showImg = input.nextElementSibling
    input.value += imgName + ','
    showImg.innerHTML += `<div name="${imgName}" class="img-detail" style="background-image: url('/img/${imgName}');"><h1 onclick="removeImg(this)" class="flex-center remove-img">&#10540;</h1></div>`;
}

function removeImg(el) {
    let ctnImg = el.parentElement.parentElement.parentElement
    let input = ctnImg.querySelector('input')
    let name = el.parentElement.getAttribute('name')
    input.value = input.value.replace(name + ',', "");
    el.parentElement.remove();
}


function confirmModal(cf) {
    let modalConfirm = document.querySelector('#confirm-modal')
    let titleConfirm = modalConfirm.querySelector('.title-confirm')
    let contentConfirm = modalConfirm.querySelector('.content-confirm')
    let btnConfirm = modalConfirm.querySelector('.btn-confirm-modal')
    let btnCancel = modalConfirm.querySelector('.btn-cancel-modal')
    btnConfirm.onclick = () => {
        if (cf.confirmTrue) {
            cf.confirmTrue()
        }
        modalConfirm.style.display = 'none'
    }
    btnCancel.onclick = function() {
        if (cf.confirmFalse) {
            cf.confirmFalse()
        }
        modalConfirm.style.display = 'none'
    }
    titleConfirm.innerHTML = cf.title || 'Thong bao Mac dinh'
    contentConfirm.innerHTML = cf.content
    showModal(modalConfirm)
}