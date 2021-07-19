// function delay(ms) {
//     return new Promise(resolve => setTimeout(() => { }, ms))
// }

export const api = async ({ data, url, method, callbackApi }) => {
    // delay(1)
    // console.log(await delay(1))
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

    callbackApi && callbackApi(response.json())



    return response.json();
}


