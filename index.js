const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 8000;
const translations = require("./translations.json");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.get("/:lang?", (req, res) => {
    const lang = req.params.lang ? req.params.lang : "fr";
    res.render("home", {
        greeting: translations[lang] ? translations[lang] : translations.fr,
        pageTitle: "Localization",
        title: "Home",
        // lang: lang,
        fr: lang == "fr",
        es: lang == "es",
        en: lang == "en"
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})