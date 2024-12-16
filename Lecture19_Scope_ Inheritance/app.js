(function functionName() {
  'use strict';

  var shoppingList1 =[
    "Miik","Donuts","Cookies","Chocolate","Peanut butter",
    "Pepto bismol","Pepto Bismol(chocolate flavor)",
    "Pepto Bismol(cookie flavor)"
  ];

    angular.module('ShoppingListApp',[])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
      $scope.shoppingList1 = shoppingList1;
    }
})();
