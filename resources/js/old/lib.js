function api(url, data, callbackApi, type = 'get', elShow = null) {
    data.token = TOKEN
    $.ajax({
        url: url,
        type: type,
        data: data,
        beforeSend: () => {
            if (elShow) {
                elShow.innerHTML = '<h2>dang tai du lieu  .....!!!<h2>'
            } else {
                document.querySelector('#loadding-modal').style.display = 'block'
            }
        },
        success: (res) => {
            callbackApi(res);
            document.querySelector('#loadding-modal').style.display = 'none'

        },

        statusCode: {
            403: function(res) {
                res = JSON.parse(res.responseText)
                console.log(res.message)
            }
        }

    })
}

function showModal(modal) {
    content = modal.querySelector('.content-modal')
    let close = modal.querySelector('.close-modal')
    modal.style.display = 'block';
    close.onclick = function() {
        modal.style.display = 'none'
    }
}