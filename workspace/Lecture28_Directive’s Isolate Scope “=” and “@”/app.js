(function() {
  'use strict';

  angular.module('ShoppingListDirectiveApp', [])
  .controller('ShoppingListController1',ShoppingListController1)
  .controller('ShoppingListController2', ShoppingListController2)
  .factory('ShoppingListFactory', ShoppingListFactory)
  .directive('shoppingList', ShoppingList);

  function ShoppingList() {
    var ddo = {
      templateUrl: 'shoppingList.html',
      scope: {
        list: '=myList',
        title: '@title'
      }
    };
    return ddo;
  }

  //list #1-controller
  ShoppingListController1.$inject=['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory) {
    var list = this;

    //use factory to create new shopping list service
    var shoppingList =ShoppingListFactory();

    list.items = shoppingList.getItems();
    var origTitle = "Shopping List #1 ";
    list.title = origTitle + " (" + list.items.length + " items )";

    list.itemName= "";
    list.itemQuantity= "";

    list.addItem= function() {
      shoppingList.addItem(list.itemName, list.itemQuantity);
      list.title = origTitle + " (" + list.items.length + " items )";

    }

    list.removeItem =function(itemIndex) {
    shoppingList.removeItem(itemIndex);
    list.title = origTitle + " (" + list.items.length + " items )";

    };
  }


  //list #2-controller
  ShoppingListController2.$inject=['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory) {
    var list2 = this;

    //use factory to create new shopping list service
    var shoppingList =ShoppingListFactory(3); //limit to 3

    list2.items = shoppingList.getItems();

    list2.itemName= "";
    list2.itemQuantity= "";

    list2.addItem= function() {
      try{
      shoppingList.addItem(list2.itemName, list2.itemQuantity);
        list2.errorMessage ="";
    }catch(error){
      list2.errorMessage = error.message;
    }

  };

    list2.removeItem = function(itemIndex) {
    shoppingList.removeItem(itemIndex);
    };
  }

    //if not specified, maxItems assumed unlimited
    function ShoppingListService(maxItems) {
      var service= this;

      //list of shopping items
      var items=[];
      service.addItem = function (itemName, quantity) {
        if((maxItems) === undefined || (maxItems !== undefined && items.length < maxItems)) {
            var item ={
              name: itemName,
              quantity:quantity
            };
            items.push(item);
          }
          else {
            throw new Error("Max items(" + maxItems + ") reached.");
          }
    };

        service.removeItem= function(itemIndex) {
          items.splice(itemIndex, 1);
        };

        service.getItems =function() {
          return items;
        };
    }


        function ShoppingListFactory() {
              var factory = function( maxItems) {
                return new ShoppingListService(maxItems);
        };
        return factory;
      }

})();
