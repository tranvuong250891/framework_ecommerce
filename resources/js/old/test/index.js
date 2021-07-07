import App from "./component/App";
import { attach } from "./core/store";
// import { app } from "./router";





attach(App, document.getElementById('app'))

// console.log(app())
// app()