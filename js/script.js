// // Object Creation
// var company=new Object();
// company.name="Google";
// company.ceo=new Object();
// company.ceo["firstname"]="Sundar";
// company.ceo.lastname="Pichai";
// console.log(company["ceo"]);

// var google = {
//     name: "Google",
//     ceo: {
//         firstname:"Sundar",
//         lastname: "Pichai"
//     }
// }
// console.log(google);

function multiply(x,y) {
    return x*y;
}
// console.log(multiply(5,3));
// multiply.version ="v.1.0";
// console.log(multiply);

// function makeMultiplier(multiplier) {
//     var myFunc = function (x) {
//         return multiplier*x;
//     };
//     return myFunc; 
// }
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
  }
  
  var max = new Dog("Max", "Buddy");
  max.bark();
  var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);
