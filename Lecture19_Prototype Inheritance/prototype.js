// var parent = { value: "parentValue",
//                 obj: {
//                       objValue: "parentObjValue"
//                       },
//             walk: function() {
//                 console.log("walking!");
//               }
// };
//
// var child = Object.create(parent);
// console.log("child - child.value: ", child.value);
// console.log("child - child.obj.objValue: ", child.obj.objValue);
// console.log("parent - parent.value: ", parent.value);
// console.log("parent - parent.obj.value: ",parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("*** changed child - child.value = 'childValue'");
// console.log("*** changed child - child.obj.objValue= 'childObjValue'");
// console.log("child - child.value: ", child.value);
// console.log("child - child.obj.objValue: ", child.obj.objValue);
// console.log("parent - parent.value: ", parent.value);
// console.log("parent - parent.obj.value: ",parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// console.log("child.obj === parent.obj ?", child.obj === parent.obj);
//
// var grandChild = Object.create(child);
// console.log("GrandChild: ", grandChild);
// grandChild.walk();

//function constructors

function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}
var myDog =new Dog("Max");
console.log("myDog :", myDog);

//Not being used as a function constructor
Dog("Max2");
