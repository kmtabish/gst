
const createTask = require('./../controller/create');
const addUser = require('./../controller/addUser');
const getTask = require('./../controller/getData');
const getUser = require('./../controller/getUser');
const getHSN = require('./../controller/getHSN');
var path = require('path');
//GraphQL Routs

module.exports = function(app) {
  app.post('/create',createTask.post);
  app.post('/adduser',addUser.post);
  app.get('/get',getTask.get);
  app.get('/getuser',getUser.get);
  app.get('/gethsn',getHSN.get);
    app.get('/gethsncount',getHSN.getCount);


   //
  //  //Default route
  //  app.get('*', function(req, res) {
  //    res.sendFile(path.resolve('public/index1.html'));
  //   });


}
