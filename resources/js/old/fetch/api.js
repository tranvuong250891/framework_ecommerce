function api(url, data, callbackApi, type = 'get') {

    data.token = TOKEN
    $.ajax({
        url: url,
        type: type,
        data: data,
        success: callbackApi,

        statusCode: {
            403: function(res) {
                res = JSON.parse(res.responseText)
                console.log(res.message)
            }
        }
    })
}

export default api;