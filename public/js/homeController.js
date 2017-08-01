'use strict';

(function (angular) {
  angular
    .module('GSTApp')
    .controller('homeController', ['$scope', '$http','$location', '$state','$rootScope', 'gstService', function ($scope, $http, $location, $state, $rootScope, gstService){
      var HomeCtrl = this;
        window.scrollTo(0, 0);
        HomeCtrl.pagination = 0;
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
              gstService.getData(10, 1).then(function(data) {
                HomeCtrl.data = data.data.data;
                console.log(HomeCtrl.data)
              })
              HomeCtrl.search = function(page, from) {
                HomeCtrl.data = null
                if(from == 'initial'){
                  HomeCtrl.pagination = 1;
              gstService.search(HomeCtrl.searchData,10, page ).then(function(data) {
                HomeCtrl.data = data.data.data;
                console.log(HomeCtrl.data)
              })
              }else{
                HomeCtrl.pagination = HomeCtrl.pagination +1
                gstService.search(HomeCtrl.searchData,10, HomeCtrl.pagination ).then(function(data) {
                  HomeCtrl.data = data.data.data;

                  console.log(HomeCtrl.data, HomeCtrl.pagination)
                })
              }
            }
    }])
})(window.angular)
