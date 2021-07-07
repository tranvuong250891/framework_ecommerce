const formNewsContent = document.querySelector('.form-news-content')
let btnAddNews = document.querySelector('#btn-add-news')
let btnUpdateNews = document.querySelector('#btn-update-news')
let btnCancelNews = document.querySelector('#btn-cancel-news')
var ctnNews = document.querySelector('.ctn-news')
let selectTypeNews = document.querySelector('.select-type-news')
let showImg = document.querySelector('.field.img')
var btnModalImg = document.querySelector('.btn-modal-img')
let dataNewsEditor,
    urlShowNews = '/api/news/show',
    urlDetailNews = '/api/news/detail',
    urlUpdateNews = '/api/news/update',
    urlInsertNews = '/api/news/insert',
    urlDeleteNews = '/api/news/delete'

btnModalImg.onclick = function() {
    CtnModalImg.style.display = 'block'
}
api(urlShowNews, { news_id: selectTypeNews.value }, callbackNewsAll, 'post', ctnNews)

ClassicEditor.create(document.querySelector('#editor-content-news'), {
    toolbar: ['ckfinder', 'uploadImage'],
    ckfinder: { uploadUrl: '/upload', },
    toolbar: { items: ['heading', '|', 'bold', 'italic', 'underline', '|', 'bulletedList', 'numberedList', 'outdent', 'indent', '|', 'mediaEmbed', 'imageInsert', 'CKFinder', 'link', '|', 'undo', 'redo', '|', 'highlight', 'fontBackgroundColor', 'fontColor', '|', 'insertTable'] },
    language: 'vi',
    image: { toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side', 'linkImage'] },
    table: { contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'] },
}).then(editor => {
    window.editor = editor;
    dataNewsEditor = editor;
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

selectTypeNews.onclick = function() {
    api(urlShowNews, { news_id: this.value }, callbackNewsAll, 'post', ctnNews)
}

function callbackNewsAll(res) {
    ctnNews.innerHTML = 'loadding...'
    res = JSON.parse(res)
    res = res.response
    let html = `<div class="table-news bg-news">
                        <a class="stt" href="#">STT</a>
                        <a class="title">tieude</a>
                        <a class="url">duong dan</a>
                        <a class="img">Anh dai dien</a>
                        <a class="creat_at">Ngay Tao</a>
                        <a class="delete">xoa tin</a>
                        <a class="eidt">sua tin</a>
                    </div>`

    res.forEach((news, id) => {
        news.img = news.img.split(',')[0];
        html += ` <div class="table-news">
                        <div class="stt" href="#">${id+1}</div>
                        <div class="title">${news.title}</div>
                        <div class="url">${news.path}</div>
                        <div class="img"><div class="img-detail" style="background-image: url('/img/${news.img}');"> </div></div>
                        <div class="creat_at">${news.create_at}</div>
                        <button onclick="deleteNewsDetail(${news.id}, '${news.title}')" class="delete">xoa tin</button>
                        <button onclick="editNewsDetail(${news.id})" class="eidt">sua tin</button>
                    </div>`
    })


    ctnNews.innerHTML = html




}

function callbackAddContent(res) {
    if (res == 'success') {
        dataNewsEditor.setData('')
        formNewsContent.querySelectorAll('.field-value').forEach(value => { value.value = '' })
    }
}

btnAddNews.onclick = function() {
    form(formNewsContent, urlInsertNews, { 'content': dataNewsEditor.getData() }, callbackInsertNews)
    api(urlShowNews, { news_id: selectTypeNews.value }, callbackNewsAll, 'post')
}

function callbackInsertNews(res) {
    res = JSON.parse(res)
    console.log(res)
    if (res.code == 200) {
        confirmModal({
            confirmTrue: () => {

                document.querySelector('#confirm-modal').style.display = 'none'

            },
            title: 'thong bao Tin Tuc',
            content: `Ban Them Tin Thanh Cong`,
        })
    }

}

document.querySelector('.btn-show-add-news').onclick = function() {
    formNewsContent.parentElement.style.display = "block"
    formNewsContent.querySelector('select').value = selectTypeNews.value
    showImgInput(formNewsContent.querySelector('.field.img'))
    showBtnAddForm(formNewsContent)
}
btnCancelNews.onclick = function() {
    formNewsContent.parentElement.style.display = 'none'
    dataNewsEditor.setData('')
    resetForm(formNewsContent);
}

function deleteNewsDetail(id, name) {

    confirmModal({
        confirmTrue: () => {
            api(urlDeleteNews, { id: id }, callbackDelete, 'post', ctnNews)
            document.querySelector('#confirm-modal').style.display = 'none'

        },
        title: 'thong bao Tin Tuc',
        content: `Ban co muon xoa tin <span style="color: red;">${name}<span> `,
    })
}

function callbackDelete(res) {
    console.log(res)
    res = JSON.parse(res)
    console.log(res)
    api(urlShowNews, { news_id: selectTypeNews.value }, callbackNewsAll, 'post', ctnNews)
    if (res.message == 'success') {
        confirmModal({
            confirmTrue: () => {

                document.querySelector('#confirm-modal').style.display = 'none'

            },
            title: 'thong bao Tin Tuc',
            content: `Xoa Thanh Cong`,
        })

    }
}

function editNewsDetail(id) {
    formNewsContent.parentElement.style.display = 'block'
    document.querySelector('#loadding-modal').style.display = 'block'
    api(urlDetailNews, { id: id }, editNews, 'get')


}

function editNews(res) {
    // console.log(res)
    res = JSON.parse(res)
    res = res.response
    console.log(res)
    btnUpdateNews.value = res.id
    getFormData(formNewsContent, res, dataNewsEditor)
    showImgInput(showImg)
    showBtnUpdateForm(formNewsContent)

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
    form.parentElement.style.display = 'block'
    let btnAddForm = form.querySelector('.btn-add-form')
    let btnUpdateForm = form.querySelector('.btn-update-form')
    btnAddForm.style.display = 'block'
    btnUpdateForm.style.display = 'none'

}

btnUpdateNews.onclick = function() {
    form(formNewsContent, urlUpdateNews, { content: dataNewsEditor.getData(), id: this.value }, callbackUpdateNews)
}

function callbackUpdateNews(res) {
    res = JSON.parse(res)
    console.log(res)
    api(urlShowNews, { news_id: selectTypeNews.value }, callbackNewsAll, 'post')
    if (res.message == 'success') {
        confirmModal({
            title: 'thong bao Tin Tuc',
            content: `Sua Thanh Cong`,
        })
    }



}