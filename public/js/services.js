'use strict';


var app = angular.module('productTracker');

app.service('Catalogue', function($q){
  console.log("Catalogue Service!");

  var tvs = [
    {
      image   : "http://ecx.images-amazon.com/images/I/81UHIPl6oLL._SL1500_.jpg",
      brand   : "TCL",
      detail  : "32S3800 32-Inch 720p Roku Smart LED TV (2015 Model)",
      price   : "169.99",
      vendor  : "amazon",
      link    : "http://www.amazon.com/TCL-48FS3750-48-Inch-1080p-Smart/dp/B018TCCWEM/ref=sr_1_1?s=tv&ie=UTF8&qid=1462211677&sr=1-1&keywords=tvs&refinements=p_n_feature_keywords_three_browse-bin%3A7688789011"
    },
    {
      image   : "http://ecx.images-amazon.com/images/I/81RstnIX0iL._SL1500_.jpg",
      brand   : "SONY",
      detail  : " KDL32R300C 32-Inch 720p LED TV (2015 Model)",
      price   : "148.00",
      vendor  : "amazon",
      link    : "http://www.amazon.com/Sony-KDL32R300C-32-Inch-720p-Model/dp/B016APIHZS/ref=sr_1_5?s=electronics&ie=UTF8&qid=1462211700&sr=1-5&keywords=tvs"
    },
    {
      image   : "http://ecx.images-amazon.com/images/I/91ltCacn7BL._SL1500_.jpg",
      brand   : "SAMSUNG",
      detail  : "UN65J6200 65-Inch 1080p Smart LED TV (2015 Model)",
      price   : "1097.99",
      vendor  : "amazon",
      link    : "http://www.amazon.com/Samsung-UN65J6200-65-Inch-1080p-Smart/dp/B00U9U9E1C/ref=sr_1_1?s=tv&ie=UTF8&qid=1462211596&sr=1-1&keywords=tvs&refinements=p_n_feature_keywords_three_browse-bin%3A7688789011%2Cp_n_size_browse-bin%3A1232883011"
    },
    {
      image   : "http://ecx.images-amazon.com/images/I/81gsyE3EREL._SL1500_.jpg",
      brand   : "SONY",
      detail  : "XBR75X910C 75-Inch 4K Ultra HD 3D Smart LED TV (2015 Model)",
      price   : "4189.26",
      vendor  : "amazon",
      link    : "http://www.amazon.com/Sony-XBR75X910C-75-Inch-Ultra-Smart/dp/B00R45XLD2/ref=sr_1_5?s=electronics&ie=UTF8&qid=1462211720&sr=1-5&keywords=tvs&refinements=p_n_size_browse-bin%3A3578043011"
    }];

  var headphones = [
    {
      image   : "http://ecx.images-amazon.com/images/I/31-nuw-iqAL.jpg",
      brand   : "PANASONIC",
      detail  : "ErgoFit In-Ear Earbud Headphones RP-HJE120-K (Black) Dynamic Crystal Clear Sound, Ergonomic Comfort-Fit",
      price   : "7.88",
      vendor  : "amazon",
      link    : "http://www.amazon.com/Panasonic-Headphones-RP-HJE120-K-Ergonomic-Comfort-Fit/dp/B003EM8008/ref=sr_1_1?s=electronics&ie=UTF8&qid=1462215638&sr=1-1&keywords=headphones"
    },
    {
      image   : "http://ecx.images-amazon.com/images/I/41IdPMSfoGL.jpg",
      brand   : "BÖHM",
      detail  : "Bluetooth Wireless Noise Cancelling Headphones with Inline Microphone - Black / Silver",
      price   : "84.99",
      vendor  : "amazon",
      link    : "http://www.amazon.com/B%C3%96HM-Bluetooth-Cancelling-Headphones-Microphone/dp/B01251KZUQ/ref=sr_1_5?s=electronics&ie=UTF8&qid=1462215638&sr=1-5&keywords=headphones"
    },
    {
      image   : "http://ecx.images-amazon.com/images/I/61uYoMZXfpL._SL1500_.jpg",
      brand   : "BEATS",
      detail  : "Solo2 Wired On-Ear Headphones - Black",
      price   : "129.99",
      vendor  : "amazon",
      link    : "http://www.amazon.com/Beats-Solo2-Wired--Ear-Headphones/dp/B00IYA2YRK/ref=sr_1_2?s=electronics&ie=UTF8&qid=1462215766&sr=1-2&keywords=headphones&refinements=p_36%3A1253506011"
    },
    {
      image   : "http://ecx.images-amazon.com/images/I/71H3wwM4eOL._SL1500_.jpg",
      brand   : "Parrot",
      detail  : "Wireless Noise Cancelling Headphones with Touch Control - Black Gold",
      price   : "194.99",
      vendor  : "amazon",
      link    : "http://www.amazon.com/Parrot-Wireless-Cancelling-Headphones-Control/dp/B00F415LFO/ref=sr_1_2?s=electronics&ie=UTF8&qid=1462215832&sr=1-2-spons&keywords=parrot+headphones&psc=1"
    }];

  this.getTvs = () => {
    return $q((resolve, reject) => {
      resolve(tvs);
    });
  };

  this.getHPs = () => {
    return $q((resolve, reject) => {
      resolve(headphones);
    });
  };

  // this.create = newTransaction => {
  //   return $http.post('/api/transactions', newTransaction);
  // };
});
