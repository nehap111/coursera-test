(function () {
  'use strict';

  angular.module('MsgApp', []).controller('MsgController',MsgController)
  .filter('loves',lovesFilter)
  .filter('truth',truthFilter);

  MsgController.$inject =['$scope','lovesFilter'];

  function MsgController($scope ,lovesFilter) {
    $scope.stateOfBeing="hungry";

    $scope.sayMessage= function() {
      var msg = "Joy likes to eat healthy snacks at night!";
      return msg;
    };
    $scope.sayLovesMessage= function() {
        var msg = "Joy likes to eat healthy snacks at night!";
        msg = lovesFilter(msg);
        return msg;
      };

    $scope.feedJoy=function ()  {
      $scope.stateOfBeing="fed";
    };
  }

  function lovesFilter() {
    return function (input) {
      input= input || "";
      input = input.replace("likes","loves");
      return input;
    };
  }

  function truthFilter() {
    return function (input, target, replace) {
      input= input || "";
      input = input.replace(target, replace);
      return input;
}
  }

})();
