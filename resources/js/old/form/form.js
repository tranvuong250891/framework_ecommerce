function form(form, url, content, callbackForm) {
    $.ajax({
        url: url,
        data: getDataForm(form, content),
        type: 'POST',
        success: function(res) {
            callbackForm(res)
            res = JSON.parse(res)
            handleFormRes(form, res)
        }
    })
}

function getDataForm(form, content) {
    fields = form.querySelectorAll('.field')
    fields.forEach(field => {
        let name = field.getAttribute('name')
        let value = !(content[name]) ? field.querySelector('.field-value').value : content[name]
        content[name] = value
    });
    content['token'] = TOKEN
    return content
}

function handleFormRes(form, res) {
    // console.log(res)
    fields = form.querySelectorAll('.field')
    if (res.code == 200) {
        form.parentElement.style.display = 'none', resetForm(form)
    } else {
        fields.forEach(field => {
            let name = field.getAttribute('name'),
                mess = field.querySelector('.mess')
                // console.log(mess)
            mess.innerHTML = ''
            if (res.response[name]) { mess.innerHTML = res.response[name][0] }
        });
    }
}

function resetForm(form) {
    form.querySelectorAll('.field-value').forEach(value => { value.value = '' })
    form.querySelectorAll('.mess').forEach(value => { value.innerHTML = '' })
}

function formUpload(form, callback) {
    let file = form.querySelector('.fileToUpload').files[0]
    let data = new FormData()
    data.append('fileToUpload', file)
    data.append('token', TOKEN)
    $.ajax({
        type: "post",
        url: "/upload",
        contentType: false,
        processData: false,
        data: data,
        success: function(response) { callback(response) }
    });
}

function getFormData(form, res, contentEditor) {
    form.querySelectorAll('.field').forEach(field => {
        let name = field.getAttribute('name')
        field.querySelector('.field-value').value = res[name]
        contentEditor.setData(res['content'])
    });

}