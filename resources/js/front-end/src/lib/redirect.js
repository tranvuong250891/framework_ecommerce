export default (url = null) => {
    window.history.replaceState('', "", url)
    window.router({ pathname: url ?? window.location.pathname })
}