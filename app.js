const app = angular.module('portfolio-app', ['duScroll']).value('duScrollOffset', 50);

app.controller('MainController',  function() {
  this.menu = false;
});
