(function () {
  'use strict';
  angular.module('DIApp', [])
    .controller('DIController',DIController);
    DIController.inject=['$scope','$filter'];
  function DIController($scope, $filter) {
    $scope.name="John";

    $scope.upper = function() {
      var upCase= $filter('uppercase');
      $scope.name= upCase($scope.name);
    };
  }
})();

// angular.module("DIApp",[])
// .controller("DIController",["$scope","$filter",function e(n,o){
//           n.name="John",
//           n.upper=function(){
//             var e=o("uppercase");
//             n.name=e(n.name)}
//           }]);
