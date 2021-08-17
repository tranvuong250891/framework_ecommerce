export const delay = (res, ms = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(res), ms)
    })
}