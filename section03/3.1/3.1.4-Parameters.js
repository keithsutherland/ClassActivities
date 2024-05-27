// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams(x, y) {
  console.log("x=", x);
  console.log("y=", y);
  return x + y;
}
// invoke the function and pass in two numbers
functionWithTwoParams(3, 4);
// invoke the function and pass in more than two numbers
functionWithTwoParams(3, 4, 9, 6);
// invoke the function and pass in only one number
console.log(functionWithTwoParams(3));
// change the function to set default values for the parameters
function functionWithDefaultParams(x = "cheese", y = "pepperoni") {
  console.log("x=", x);
  console.log("y=", y);
  return x + y;
}
// again, invoke the function and pass in only one number
//Two different ways to print returned value of function
// 1) invoke function inside console.log

console.log(functionWithDefaultParams(5));
// 2) intialize variable and assign it the value of invoked function.

let returnedValue = functionWithDefaultParams(5);
console.log(returnedValue);
// Rest Operator
function functionWithRestParam(x, y, ...a) {
  console.log("x=", x);
  console.log("y=", y);
  console.log(a);
  return x + y;
}
console.log(functionWithRestParam(3, 4, 5, 6, 7, 75455, 8));
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
