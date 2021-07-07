export const fetchLayout = async ({ url, method, data }) => {
    const response = await fetch(url, {
        method: method || 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    return response.json()

}