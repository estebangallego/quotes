var path = require("path");
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// set the views folder and set up ejs
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res){
  res.render('index');
})

require('./config/routes.js')(app);


app.listen(8000, function(){
  console.log("listening on port 8000");
})
