'use strict';

var app = angular.module('productTracker');

app.controller('homeCtrl', function(){
  console.log("homeCtrl");
})

app.controller('categoryCtrl', function($state){
  console.log('categoryCtrl');

  //$scope.<ARRAY> = [];

})

app.controller('tvCtrl', function($scope, Catalogue){
  console.log('tvCtrl');

  $scope.tvs = [];

  Catalogue.getTvs()
  .then(tvs => {
    console.log(tvs);
    $scope.tvs = tvs;
  });

  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    };
  };




});

app.controller('headphoneCtrl', function($scope, $state, Catalogue){
  console.log('headphoneCtrl');


  $scope.headphones = [];

  Catalogue.getHPs()
  .then(headphones => {
    console.log(headphones);
    $scope.headphones = headphones;
  });

  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    };
  };

})

app.controller('mobileCtrl', function($scope, $state, Catalogue){
  console.log('listCtrl');

  //$scope.<ARRAY> = [];

})

// // app.controller('betaCtrl', function($scope, $state, <SERVICE NAME>){
//   console.log('betaCtrl');
//
//   //$scope.<ARRAY> = [];
//
// })
