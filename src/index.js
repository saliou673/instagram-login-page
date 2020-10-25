'use strict'

const m = require("mithril");
import { LoginComponent } from "./components/login.component.js";
const root = document.querySelector('main');
// m.mount(root, LoginComponent);
m.route(root, "/login", {
    "/login": LoginComponent, // defines `https://localhost/#!/home`
})