(function () {
  'use strict';
  angular.module('CounterApp', [])
  .controller('CounterController',CounterController);

  CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout) {
    $scope.counter = 0;

    $scope.upcounter = function () {
      setTimeout(function() {
        $scope.counter++;
        console.log("counter incremented!");
      }, 2000);
    };



//2    //   setTimeout(function() {
    //   $scope.$apply(function() {
    //     $scope.counter++;
    //     console.log("counter increment!!!");
    //     });
    //   }, 2000);
    // };

//1    // $scope.upcounter = function () {
    //     setTimeout(function() {
    //       $scope.counter++;
    //       console.log("Digest loop fired!!!");
    //       $scope.$digest();
    //     }, 2000);
    //   };
  }
})();
