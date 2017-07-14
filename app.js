const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
//require mongoose node module
const mongoose = require('mongoose');
var path = require('path');



const PORT = process.env.PORT || 1234;
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
//Comment this below two line to run the graphiqal
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUTapp.use(express.static(__dirname + '/public'));
require('./routes/routes')(app);;


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
