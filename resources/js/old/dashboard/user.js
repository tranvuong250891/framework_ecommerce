let urlUserShow = '/api/user/show'
let urlUserDelete = '/api/user/delete'
let ctnUser = document.querySelector('.ctn-user')

api(urlUserShow, {}, callbackTest, 'post')



function deleteUserDetail(value, email) {
    confirmModal({
        confirmTrue: () => {
            api(urlUserDelete, { id: value }, callbackUserDelete, 'post')
        },
        title: 'thong bao User',
        content: `Ban co muon xoa <span style="color: red;"> ${email}<span> `,
    })

}


function callbackUserDelete(res) {
    console.log(res)
    res = JSON.parse(res).message
    api(urlUserShow, {}, callbackTest, 'post')
    if (res == 'success') {
        confirmModal({
            title: 'thong bao User',
            content: `Xoa Thanh Cong`,
        })
    }


}



function callbackTest(res) {
    // console.log(res)
    res = JSON.parse(res)
    console.log(res)
    res = res.response
    let html = `<div class="table-user bg-user">
                        <a class="stt" href="#">STT</a>
                        <a class="title">ten user</a>
                        <a class="url">Email</a>
                        <a class="img">Anh dai dien</a>
                        <a class="creat_at">Ngay Tao</a>
                        <a class="delete">xoa tin</a>
                        <a class="eidt">sua tin</a>
                    </div>`
    res.forEach((user, id) => {
        user.img = user.img.split(',')[0];
        html += ` <div class="table-user">
                        <div class="stt" href="#">${id+1}</div>
                        <div class="title">${user.name}</div>
                        <div class="url">${user.email}</div>
                        <div class="img"><div class="img-detail" style="background-image: url('${user.img}');"> </div></div>
                        <div class="creat_at">${user.create_at}</div>
                        <button onclick="deleteUserDetail(${user.id}, '${user.email}')" class="delete">xoa user</button>
                        <button onclick="editUserDetail(${user.id})" class="eidt">sua user</button>
                    </div>`
    })
    ctnUser.innerHTML = html
}