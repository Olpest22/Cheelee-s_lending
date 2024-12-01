const express = require("express");
const hbs = require("hbs");
const app = express();
const expressHbs = require("express-handlebars")
const port = 4000;

app.set('view engine', 'hbs')
app.use('/resources', express.static(__dirname + '/resources'))

app.engine("hbs", expressHbs.engine({
  layoutsDir: "views/layout",
  defaultLayout: "layout",
  extname: "hbs"
}))

app.get("/", function (request, response) {

  response.render("body.hbs",{
    title: "НАЗВАНИЕ САЙТА",
  });
});

app.listen(port, '127.0.0.1', function () {
  console.log(`http://localhost:${port}`)
})