var numberArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log("numbers in array", numberArray);

 function above5Filter(value) {
   return  value > 5;
 }
var filteredNumberArray = numberArray.filter(above5Filter);
console.log("filter number array: ", filteredNumberArray);


var shoppingList =[
  "Miik","Donuts","Cookies","Chocolate","Peanut butter",
  "Pepto Bismol","Pepto Bismol(chocolate flavor)",
  "Pepto Bismol(cookie flavor)"
];
console.log("shopping List: ", shoppingList);

var searchValue = "Bismol";
function containsFilter(value) {
  return value.indexOf(searchValue)!== -1;
}
var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched Shopping List: ", searchedShoppingList);
