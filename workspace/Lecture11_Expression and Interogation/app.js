(function () {
  'use strict';

  angular.module('MsgApp', []).controller('MsgController',MsgController);

  MsgController.$inject =['$scope'];

  function MsgController($scope) {
    $scope.name="Joy";
    $scope.stateOfBeing="hungry";

    $scope.sayMessage= function() {
      return "Joy likes to eat healthy snacks at night";
    };

    $scope.feedJoy=function () {
      $scope.stateOfBeing="fed";
    }
  }

})();
