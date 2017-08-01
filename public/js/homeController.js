'use strict';

(function (angular) {
  angular
    .module('GSTApp')
    .controller('homeController', ['$scope', '$http','$location', '$state','$rootScope', 'gstService', function ($scope, $http, $location, $state, $rootScope, gstService){
      var HomeCtrl = this;
        window.scrollTo(0, 0);
              //     console.time();
              //     console.time('total');
              //   console.time('init arr');
              //   var t0 = performance.now();
              //   var arr = new Array(1000000);
              //   console.timeEnd('init arr');
              //   for (var i = 0; i < arr.length; i++) {
              //     arr[i] = new Object();
              //   }
              //   console.timeEnd('total');
              // var t1 = performance.now();
              // HomeCtrl.test = "Call to doSomething took " + performance.now() + " milliseconds."
              //
              // console.log("Call to doSomething took " + performance.now() + " milliseconds.");
              gstService.getData(500, 2).then(function(data) {
                HomeCtrl.data = data.data.data;
                console.log(HomeCtrl.data)
              })
              HomeCtrl.search = function() {
                HomeCtrl.data = null;
              gstService.search(HomeCtrl.searchData).then(function(data) {
                HomeCtrl.data = data.data.data;
                console.log(HomeCtrl.data)
              })
            }
    }])
})(window.angular)
