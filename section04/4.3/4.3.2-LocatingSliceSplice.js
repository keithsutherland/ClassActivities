const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];
console.log(arr.length);
// find the first index of "a", "b", and "c"
console.log(arr.indexOf('a'), arr.indexOf('b'), arr.indexOf('c'));


// find the last index of "a", "b", and "c"
function removeStuff(arr) {
  let firstA = arr.indexOf('a');
  let lastA = arr.lastIndexOf('a');

  if (firstA !== lastA) {
    console.log(lastA);
    arr.splice(lastA, 1);
  } else {
    console.log("It didn't run")
  }
  return arr;
}
console.log(removeStuff(arr));
console.log(arr.length);
// if the first index and last index of "a" is not the same, remove the last instance
function removeStuff(arr) {
  let firstA = arr.indexOf('a');
  let lastA = arr.lastIndexOf('a');

  while (firstA !== lastA) {
    console.log(lastA);
    arr.splice(lastA, 1);

  }
  return arr;
}
// console.log(removeStuff(arr));
// console.log(arr.length);
let firstA = arr.indexOf('a');
let lastA = arr.lastIndexOf('a');

for (let x = 0; i < lastA; i++)  {
  removeStuff(arr);
  return arr;

}

// repeat until there is just one "a"
