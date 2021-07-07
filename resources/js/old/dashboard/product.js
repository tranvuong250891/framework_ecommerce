const formProductContent = document.querySelector('.form-product-content')
let btnAddProduct = document.querySelector('#btn-add-product')
let btnUpdateProduct = document.querySelector('#btn-update-product')
let btnCancelProduct = document.querySelector('#btn-cancel-product')
let ctnProduct = document.querySelector('.ctn-product')
let selectTypeProduct = document.querySelector('.select-type-product')
let showImg = document.querySelector('.field.img')
var btnModalImg = document.querySelector('.btn-modal-img')
let urlProductAll = '/api/product/show'
let urlProductInsert = '/api/product/insert'

let dataProductEditor

btnModalImg.onclick = function() {
    CtnModalImg.style.display = 'block'
}
api(urlProductAll, { product_id: selectTypeProduct.value }, callbackProductAll, 'post')

ClassicEditor.create(document.querySelector('#editor-content-product'), {
    toolbar: ['ckfinder', 'uploadImage'],
    ckfinder: { uploadUrl: '/upload', },
    toolbar: { items: ['heading', '|', 'bold', 'italic', 'underline', '|', 'bulletedList', 'numberedList', 'outdent', 'indent', '|', 'mediaEmbed', 'imageInsert', 'CKFinder', 'link', '|', 'undo', 'redo', '|', 'highlight', 'fontBackgroundColor', 'fontColor', '|', 'insertTable'] },
    language: 'vi',
    image: { toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side', 'linkImage'] },
    table: { contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'] },
}).then(editor => {
    window.editor = editor;
    dataProductEditor = editor;
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => { return new UploadAdapter(loader); };
}).catch(error => {
    console.error('Oops, something went wrong!');
    console.error('Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace: ');
    console.warn('Build id: z9e7c3nz8ti - 2 zf297e0wdbx ');
    console.error(error);
});

class UploadAdapter {
    constructor(loader) { this.loader = loader }
    upload() {
        return new Promise((resolve, reject) => {
            this.loader.file.then(function(file) {
                var data = new FormData()
                data.append('fileToUpload', file)
                data.append('allowSize', 2)
                $.ajax({
                    type: "post",
                    url: "/upload",
                    contentType: false,
                    processData: false,
                    data: data,
                    success: function(response) {
                        data = JSON.parse(response)
                        if (data.res) { resolve({ default: data.url }) } else { reject(data.msg) }
                    }
                });
            });
        });
    }
    abort() {}
}

selectTypeProduct.onclick = function() {
    api(urlProductAll, {
        product_id: this.value
    }, callbackProductAll, 'post')
}

function callbackProductAll(res) {
    // console.log(res)
    res = JSON.parse(res)
        // console.log(res)
    res = res.response
    let html = `<div class="table-product bg-product">
                        <a class="stt" href="#">STT</a>
                        <a class="title">tieu de</a>
                        <a class="url">duong dan</a>
                        <a class="img">Anh dai dien</a>
                        <a class="creat_at">Ngay Tao</a>
                        <a class="delete">xoa tin</a>
                        <a class="eidt">sua tin</a>
                    </div>`
    res.forEach((product, id) => {
        product.img = product.img.split(',')[0];
        html += ` <div class="table-product">
                        <div class="stt" href="#">${id+1}</div>
                        <div class="title">${product.name}</div>
                        <div class="url">${product.path}</div>
                        <div class="img"><div class="img-detail" style="background-image: url('/img/${product.img}');"> </div></div>
                        <div class="creat_at">${product.create_at}</div>
                        <button onclick="deleteProductDetail(${product.id}, '${product.name}')" class="delete">xoa tin</button>
                        <button onclick="editProductDetail(${product.id})" class="eidt">sua tin</button>
                    </div>`
    })
    ctnProduct.innerHTML = html
}

function callbackAddContent(res) {
    if (res == 'success') {
        dataProductEditor.setData('')
        formProductContent.querySelectorAll('.field-value').forEach(value => { value.value = '' })
    }
}

btnAddProduct.onclick = function() {
    form(formProductContent, urlProductInsert, { 'content': dataProductEditor.getData() }, callbackInsertProduct)
    api(urlProductAll, { product_id: selectTypeProduct.value }, callbackProductAll, 'post')
}

function callbackInsertProduct(res) {
    res = JSON.parse(res)
    console.log(res)
    if (res.code == 200) {
        confirmModal({
            confirmTrue: () => {
                document.querySelector('#confirm-modal').style.display = 'none'

            },
            title: 'thong bao Product',
            content: 'Them tin thanh cong',
        })

    }

}

document.querySelector('.btn-show-add-product').onclick = function() {
    formProductContent.parentElement.style.display = "block"
    formProductContent.querySelector('select').value = selectTypeProduct.value
    showImgInput(formProductContent.querySelector('.field.img'))
    showBtnAddForm(formProductContent)
}
btnCancelProduct.onclick = function() {
    formProductContent.parentElement.style.display = 'none'
    dataProductEditor.setData('')
    resetForm(formProductContent);
}

function deleteProductDetail(id, name = null) {
    confirmModal({
        confirmTrue: () => {
            api('/api/product/delete', { id: id }, callbackDelete, 'post')
            document.querySelector('#confirm-modal').style.display = 'none'

        },
        title: 'thong bao Product',
        content: `ban co muon xoa ten san pham:   <span style="color: red;">${name}<span>`,
    })

}

function callbackDelete(res) {
    res = JSON.parse(res)
    console.log(res)
    if (res.message == 'success') {
        confirmModal({
            confirmTrue: () => {

                document.querySelector('#confirm-modal').style.display = 'none'

            },
            title: 'thong bao Product',
            content: 'Xoa thanh cong',
        })
    }
    api(urlProductAll, {
        product_id: selectTypeProduct.value
    }, callbackProductAll, 'post')
}

function editProductDetail(id) {
    api('/api/product/detail?id=' + id, {}, editProduct)
}

function editProduct(res) {
    console.log(res)
    res = JSON.parse(res)
    res = res.response
    btnUpdateProduct.value = res.id
    insertFormData(formProductContent, res, dataProductEditor)
    showImgInput(showImg)
    showBtnUpdateForm(formProductContent)
}

function insertFormData(form, res, contentEditor) {
    form.querySelectorAll('.field').forEach(field => {
        let name = field.getAttribute('name')
        field.querySelector('.field-value').value = res[name]
        contentEditor.setData(res['content'])
    });

}



function showImgInput(field) {
    let values = field.querySelector('input').value.split(',')
    let html = ``;
    values.forEach(img => { if (img.includes('.jpg')) { html += `<div name="${img}" class="img-detail" style="background-image: url('/img/${img}');"><h1 onclick="removeImg(this)" class="flex-center remove-img">⤬</h1></div>` } })
    field.querySelector('.show-img').innerHTML = html
}

function showBtnUpdateForm(form) {
    let btnAddForm = form.querySelector('.btn-add-form')
    let btnUpdateForm = form.querySelector('.btn-update-form')
    form.parentElement.style.display = 'block'
    btnAddForm.style.display = 'none'
    btnUpdateForm.style.display = 'block'
}

function showBtnAddForm(form) {
    let btnAddForm = form.querySelector('.btn-add-form')
    let btnUpdateForm = form.querySelector('.btn-update-form')
    btnAddForm.style.display = 'block'
    btnUpdateForm.style.display = 'none'
}

btnUpdateProduct.onclick = function() {
    form(formProductContent, '/api/product/update', { content: dataProductEditor.getData(), id: this.value }, callbackUpdateProduct)
    api(urlProductAll, { product_id: selectTypeProduct.value }, callbackProductAll, 'post')
}

function callbackUpdateProduct(res) {

    res = JSON.parse(res)
    console.log(res)
    if (res.message == 'success') {
        confirmModal({
            confirmTrue: () => {
                document.querySelector('#confirm-modal').style.display = 'none'
            },
            title: 'thong bao Product',
            content: 'sua thanh cong',
        })
    }
}