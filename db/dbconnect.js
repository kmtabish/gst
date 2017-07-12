
// require mongoose node module
const mongoose = require('mongoose');

//connect to mongodb database
// mongoose.connect('mongodb://127.0.0.1:27017/testgraphql');
mongoose.connect('mongodb://tabblack:blackblack@ds151662.mlab.com:51662/hsn')
//Attach listner to connect event
//Get the default connection
const db = mongoose.connection

mongoose.connection.once('connect', function(){
   console.log("Mogodb connected")
});

module.exports = db;
