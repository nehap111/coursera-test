(function () {
  'use strict';

  angular.module('MsgApp', []).controller('MsgController',MsgController);

  MsgController.$inject =['$scope','$filter'];

  function MsgController($scope ,$filter)
  {
    $scope.name="Joy";
    $scope.stateOfBeing="hungry";
    $scope.cookieCost=.23;

    $scope.sayMessage= function()
    {
      // var msg = "Joy likes to eat healthy snacks at night!";
      // var output = $filter('uppercase')(msg);

      // var output = $filter('lowercase');
      // var lowered = output("GIVE ME COOKIES NOW!");
      var lowered = $filter('lowercase')("GIVE ME COOKIES NOW!");

      return lowered;
    };

    $scope.feedJoy=function ()
    {
      $scope.stateOfBeing="fed";
    };
  }

})();
