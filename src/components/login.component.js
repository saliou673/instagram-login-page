const m = require("mithril");

export const LoginComponent = {
    view: () => {
        return m("div", {class: "login row align-middle"},[
            m("div", {class:"col-12"},[
                m('a', {class: "facebook", href: "#"}, [
                    m("i", {class: "fab fa-facebook-f"})
                ], "Se connecter avec Facebook"),
                m('a', {class: "twitter", href: "#"}, [
                    m("i", {class: "fab fa-twitter"})
                ], "Se connecter avec Twitter"),
                m('a', {class: "google", href: "#"}, [
                    m("i", {class: "fab fa-google-plus-g"})
                ], "Se connecter avec Google")
            ])
        ])
    }
}