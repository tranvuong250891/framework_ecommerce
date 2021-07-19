export default (url) => {
    window.history.replaceState('', "", url)
    window.router({ pathname: url })
}