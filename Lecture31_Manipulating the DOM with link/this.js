function Person() {
  this.fullName = "Joy";
  this.fav = "Cookies";

  this.describe = function () {
    console.log('this is: ', this);
    console.log(this.fullName + " likes " + this.fav);
  };
}
var joy = new Person();
joy.describe();

var describe = joy.describe;
describe();
describe.call(joy);
