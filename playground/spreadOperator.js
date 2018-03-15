//ES6 Spread Operator

// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd));

// var groupA=['Knowles', 'Neema', 'Juno'];
// var groupB=['Andrew', 'Aichelen', 'Sam'];
// var final =[3, ...groupA, ...groupB];
//
// console.log(final)

var person = ['Andrew', 27];
var person2 = ['Aichelen', 28];

var names =['Juno', 'Neema', 'Knowles'];
var final =['Marc', ...names];
// Hi Andrew, you are 27

function greeting(name, age){
  console.log('Hello, '+ name +'. You are ' + age);
}

greeting(...person);
greeting(...person2);

final.forEach(function(name){
  console.log("Hi, "+name);
})
