; (function (w, d) {
    var _viewEl = null, _defaultRoute = null, _rendered = false
    var App = function () {
        this._routeMap = {}
    }

    var routeObj = function (c, r, t) {
        this.controller = c, this.route = r, this.template = t
    }

    App.prototype.AddRoute = function (controller, route, template) {
        this._routeMap[route] = new routeObj(controller, route, template)
    }

    App.prototype.Initialize = function () {
        //create the update view delegate
        var updateViewDelegate = updateView.bind(this)

        //wire up the update view function with hash changes
        _viewEl = d.getElementById('content')
        if (!_viewEl) return

        //Set a default route
        _defaultRoute = this._routeMap[Object.getOwnPropertyNames(this._routeMap)[0]]

        //wire up the hash change event with the update view delegate
        w.onhashchange = updateViewDelegate

        //call the update view delegate
        updateViewDelegate()
    }
    function updateView() {
        //get the route name from the address bar hash
        var pageHash = w.location.hash.replace('#', ''), routeName = null, routeObj = null
        routeName = pageHash.replace('/', '')
        _rendered = false

        //fetch the route object using the route name
        routeObj = this._routeMap[routeName]

        //route name is not found then use default route
        if (!routeObj) { routeObj = _defaultRoute }

        //render the view html associated eith the route
        loadTemplate(routeObj, _viewEl)
    }

    function loadTemplate(routeObject, viewEl) {
        var xmlhttp
        if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest() }
        else { xmlhttp = new ActiveXObject('Microsoft.XMLHTTP') }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                //load the view
                loadView(routeObj, viewEl, xmlhttp.responseText)
            }
        }

        xmlhttp.open('GET', routeObject.template, true)
        xmlhttp.send()
    }

    function loadView(routeObj, viewEl, viewHtml) {
        //create the model object
        var model = {}

        //call the controller function of the model properties
        routeObj.controller(model)

        //replace the view html tokens the model properties
        viewHtml = replaceTokens(viewHtml, model)

        //render the view
        if (!_rendered) {
            _viewEl.innerHML = viewHtml
            _rendered = true
        }

    }

    function replaceTokens(viewHtml, model) {
        var modelProps = Object.getOwnPropertyNames(model)
        modelProps.forEach((el, id, array) => {
            viewHtml = viewHtml.replace('{{' + el + '}}', model[el])
        })
        return viewHtml
    }

    w['App'] = new App()

})(window, document)
