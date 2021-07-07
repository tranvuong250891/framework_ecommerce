


// const express = require("express")

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard") },
        { path: "/post", view: () => console.log("Viewing Post") },
        { path: "/setting", view: () => console.log("Viewing Setting") },
    ]

    const potenialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })
    let match = potenialMatches.find(potenialMatche => potenialMatche.isMatch)
    console.log(match)
}

document.addEventListener("DOMContentLoaded", () => {
    router()
})