const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable

// let popsReturn = [nums.pop(), nums.pop()];
// console.log(popsReturn);
let pop1 = nums.pop();
let pop2 = nums.pop();



// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = [nums.shift(), nums.shift()];
console.log(shiftReturn);
// use push and unshift to add the variables back to the array in numerical order, 0-6
console.log(nums);
nums.unshift(pop2);
console.log(nums);
nums.unshift(pop1);

nums.push(shiftReturn[1]);
nums.push(shiftReturn[0]);
console.log(nums);

let newArr = nums.slice(2,4);
console.log(newArr, nums);


nums.splice
