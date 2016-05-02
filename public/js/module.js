'use strict';

var app = angular.module('productTracker', [ 'ui.router', 'ui.bootstrap', 'oitozero.ngSweetAlert' ]);

app.config(function($stateProvider, $urlRouterProvider){


  $stateProvider
  .state('home', {
    url           : '/' ,
    templateUrl   : 'html/home.html' ,
    controller    : 'homeCtrl'
  })
  .state('category', {
    url           : '/category' ,
    templateUrl   : '/html/category.html' ,
    controller    : 'categoryCtrl'
  })
  .state('tv', {
    url           : '/tv' ,
    templateUrl   : '/html/tv.html' ,
    controller    : 'tvCtrl'
  })
  .state('headphone', {
    url           : '/headphone' ,
    templateUrl   : '/html/headphone.html' ,
    controller    : 'headphoneCtrl'
  })
  .state('mobile', {
    url           : '/mobile' ,
    templateUrl   : '/html/mobile.html' ,
    controller    : 'mobileCtrl'
  })

  // .state('< name >', {
  //   url           : '< / >' ,
  //   templateUrl   : '< / >' ,
  //   controller    : '< / >' ,
  //   resolve       : ' { < CONTROLLER PROP. NAME > : function( < PARAMS > ){ return < SERVICE NAME.METHOD( <PARAMS> ) > } }'
  // })

  ; // END OF .state(s)

  $urlRouterProvider.otherwise('/');
})
