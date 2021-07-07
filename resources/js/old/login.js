var forms = ctnFormLogin.querySelector('.form')
var formLogin = document.querySelector('.form-login')
var formSignin = document.querySelector('.form-signin')
var submitLogin = formLogin.querySelector('button');
var selectLogin = document.querySelector('.select-login')
var closeLogin = document.querySelector('.close-login')
var submitSignin = formSignin.querySelector('button')
var submitGoogle = document.querySelector('.social .google')

submitGoogle.onclick = function() {
    $.get('/logingoogle?token=' + TOKEN, login)

    function login(res) {
        console.log(res)
        window.location.href = res
    }
}

$.get('/user?token=' + TOKEN, callbackUser)

function callbackUser(res) {
    // console.log(res)
    res = JSON.parse(res)
    if (res.name) {
        // console.log(res.name)
        document.querySelector('.user-name').innerHTML = res.name;
        document.querySelector('.user-bg').style = `background-image: url("${res.img}");`
        showUser.style.display = 'flex';
        showLogin.style.display = 'none';
    }
}

submitSignin.onclick = function() {
    let form = this.parentElement
    postApi(formvalue(form), '/signin', form, callbackSignin)

    function callbackSignin(res, form) {
        // res = JSON.parse(res)
        if (res == 'success') {
            confirmModal({
                title: 'thong bao User',
                content: `Dang ky Thanh Cong`,
            })

            selectLogin.querySelectorAll('.select')[0].classList.add('active-select')
            selectLogin.querySelectorAll('.select')[1].classList.remove('active-select')
            formLogin.style.display = 'block'
            formSignin.style.display = 'none'
        }
        handleLogin(res, form);
    }
}

function postApi(data, url = '/', form, callback) {
    $.ajax({
        url: url,
        data: data,
        type: 'post',
        success: function(response) {
            console.log(response)
            let res = JSON.parse(response)
            return callback(res, form);
        }
    })
}

function getApi(data, url = '/', form, callback) {
    $.ajax({
        url: url,
        data: data,
        type: 'get',
        success: function(response) {
            console.log(response)

            return callback(response, form);
        }
    })
}

submitLogin.onclick = function() {
    let form = this.parentElement;
    postApi(formvalue(form), '/login', form, callbackSubmitLogin)
    $.get('/user?token=' + TOKEN, callbackUser)
}

function callbackSubmitLogin(res, form) {
    if (res == 'success') {
        confirmModal({
            title: 'thong bao user',
            content: 'Dang nhap thanh cong'
        })
        ctnFormLogin.parentElement.style.display = 'none'
        showUser.style.display = 'flex';
        showLogin.style.display = 'none';
        return
    }
    handleLogin(res, form);
}

function formvalue(form) {
    let fields = Array.from(form.querySelectorAll('.field'))
    let data = {}
    fields.forEach((field, id) => {
        getvalue(field, data)
    })
    return data
}

function getvalue(field, data) {
    let el = field.querySelector('.field-value')
    let name = el.getAttribute('name');
    data[name] = el.value
}

function handleLogin(res, form) {
    let fields = form.querySelectorAll('.field')
    let test = Array.from(fields).filter((field) => {
        return field.getAttribute('name')
    })
    test.forEach(field => {
        let mess = field.querySelector('.mess')
        let ip = field.querySelector('.field-value')
        let name = field.getAttribute('name');
        if (res[name]) {
            ip.classList.add('error')
            ip.classList.remove('success')
            mess.innerHTML = res[name][0]
        } else {
            ip.classList.add('success')
            ip.classList.remove('error')
            mess.innerHTML = ''
        }
    })
}

selectLogin.querySelectorAll('.select').forEach(sl => {
    let classForm = sl.getAttribute('for')
    sl.onclick = () => {
        selectLogin.querySelectorAll('.select')[0].classList.remove('active-select')
        selectLogin.querySelectorAll('.select')[1].classList.remove('active-select')
        styleSl(sl, classForm)
    }
})

styleSl = (sl, classForm) => {
    ctnFormLogin.querySelectorAll('.form').forEach(form => {
        form.style.display = 'none'
    })
    sl.classList.add('active-select')
    ctnFormLogin.querySelector(`.${classForm}`).style.display = 'block';
}
ctnFormLogin.querySelectorAll('input').forEach(ip => {
    styleIp(ip);
})

function styleIp(ip) {
    ip.onfocus = () => {
        ip.classList.remove('error')
        ip.classList.add('success')
        ip.parentElement.querySelector('.mess').innerHTML = '';
    }
    ip.onblur = () => {
        form = ip.parentElement.parentElement
        let ipcheck = ip.getAttribute('check')
        let nameValueCheck = form.querySelector('.field-value.' + ipcheck)
        let setValueCheck = nameValueCheck ? {
            [nameValueCheck.getAttribute('name')]: nameValueCheck.value
        } : {}
        url = form.getAttribute('url')
        postApi(getValueCheck(ip, setValueCheck), url, ip, callbackOnblur)

        function callbackOnblur(res, ip) {
            let mess = ip.parentElement.querySelector('.mess')
            let name = ip.getAttribute('name')
            if (res[name]) {
                ip.classList.remove('success')
                ip.classList.add('error')
                mess.innerHTML = res[name][0]
            } else {
                ip.classList.add('success')
                ip.classList.remove('error')
                mess.innerHTML = ''
            }
        }
    }
}

function getValueCheck(ip, ipcheck = {}) {
    let form = ip.parentElement.parentElement
    let token = form.querySelector('.token')
    let name = ip.getAttribute('name')
    data = {
        token: token.value,
        [name]: ip.value,
    }
    data = Object.assign(data, ipcheck);
    return data;
}

closeLogin.onclick = () => {
    ctnFormLogin.parentElement.style.display = 'none'
}