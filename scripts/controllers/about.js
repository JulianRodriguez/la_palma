'use strict';

/**
 * @ngdoc function
 * @name barApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the barApp
 */
angular.module('barApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
