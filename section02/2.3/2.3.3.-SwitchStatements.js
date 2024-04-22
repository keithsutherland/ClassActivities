// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
// let day = 0;
// let dayName = `This is a truthy value.`;
function useSwitchCase(thingWeWantToCheck) {
  // case 0; {
  //   console.log('This was a falsey value');
  //   break;
// Complete this switch case statement to produce the correct results please.

// switch (3) {
//   case 3 :
//     dayName = `Today is Wednesday`;
//     break;
//   case 1:
//     dayName = `Today is Monday`;
//     break;

  // Note the code blocks in the next 2 cases: Why?
  // case 4: {
  //   const message = `Today is {Thursday}`;
  //   console.log("The day before Friday!");
  //   break;
  // }
  // case {5} : {
  //   const message = `Tomorrow it's the weekend!`;
  //   console.log("So many days so little time.");
  //   break;
  // }

  // case {2} :
  //   console.log(`Today is Tuesday`);
  //   break;
  // write a case here for the weekend (how many days in the weekend?)
  case (6,0):
    console.log(`It's the Weekend !!`);

    useSwitchCase(6)

    default:
    console.log({'Another day another dollar.'});
    break;


}
if (dayName !== `It is the Weekend !! `){
console.log('Another day another dollar.');
}
