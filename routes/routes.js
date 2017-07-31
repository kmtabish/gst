
const getHSN = require('./../controller/getHSN');
var path = require('path');
//GraphQL Routs

module.exports = function(app) {
  app.get('/gethsn',getHSN.get);
  app.get('/search',getHSN.search);



   //
  //  //Default route
  //  app.get('*', function(req, res) {
  //    res.sendFile(path.resolve('public/index1.html'));
  //   });


}
