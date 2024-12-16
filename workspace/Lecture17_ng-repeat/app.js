(function functionName() {
  'use strict';

  var shoppingList1 =[
    "Miik","Donuts","Cookies","Chocolate","Peanut butter",
    "Pepto bismol","Pepto Bismol(chocolate flavor)",
    "Pepto Bismol(cookie flavor)"
  ];

  var shoppingList2 =[
    {
      name:"Milk",
      quantity: "2"
    },
    {
      name:"Donuts",
      quantity: "200"
    },
    {
      name:"Cookies",
      quantity: "300"
    },
    {
      name:"Chocolate",
      quantity: "5"
    }
  ];

    angular.module('ShoppingListApp',[])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
      $scope.shoppingList1 = shoppingList1;
      $scope.shoppingList2 = shoppingList2;

      $scope.addToList=function() {
        var newItem ={
          name:$scope.newItemName,
          quantity: $scope.newItemQuantity
        };
        $scope.shoppingList2.push(newItem);
      };
    }
})();
