const experss = require("express");
var bodyParser = require('body-parser')

const app = experss();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(experss.static((__dirname + '/public')))

app.get("/", function(req, res) {
    res.render("index");
})

app.post("/", function(req, res) {
    let name = req.body.Name;
    let email = req.body.email;
    let desc = req.body.description;
    console.log(name);
    console.log(email);
    console.log(desc);
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
    console.log(`Listening on port 3000`);
})