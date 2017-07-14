'use strict';

(function (angular) {
  angular.module('GSTApp').factory('gstService', ['$http', '$q', function ($http, $q) {
    var self = this;
    return {
      getData: function (limit, skip) {
        var deferred = $q.defer();
        var configObj = {
          method: 'GET',
          url: "https://gstdata.herokuapp.com/gethsn?limit="+limit+"&skip="+skip,
          headers: {
              'Access-Control-Allow-Origin' : "*",
              },
        };
        $http(configObj).then(function fullfilled(response){
          console.log(response);
          return deferred.resolve(response);
        }).catch(function rejection(error){
          console.log("Error: ", error);
          return deferred.reject(error);
        });
        return deferred.promise;
      }
    }
}])
})(window.angular)
