
export const fetchApi = async ({ data, url, method, callbackApi }) => {

    const token = await fetch('/token')
    const response = await fetch(url, {
        method: method ?? 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ ...data, token: await token.json() })
    });


    callbackApi && callbackApi(response.text())

    // console.log(response)

    return response.text();
}


