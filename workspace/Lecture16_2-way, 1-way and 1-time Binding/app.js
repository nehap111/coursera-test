(function functionName() {
  'use strict';
  angular.module('BindingApp', [])
  .controller('BindingController', BindingController);

  BindingController.$inject =['$scope'];
  function BindingController($scope) {
    $scope.firstName = "Joe";
//    $scope.fullName = "";    //create 1 watchers

    $scope.showNumberOfWatchers=function() {
      console.log("# of watchers:", $scope.$$watchersCount);
    };

    $scope.setFullName = function() {
      $scope.fullName =$scope.firstName+ " " + "Bing ";
    };

    $scope.logFirstName =function() {
      console.log("first Name is: ", $scope.firstName);
    } ;

    $scope.logFullName =function() {
      console.log("full Name is: ", $scope.fullName);
    };

  }
})();
