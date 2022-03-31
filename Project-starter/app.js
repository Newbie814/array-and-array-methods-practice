// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// // // another way of creating an array. new initializes a constructor function
// // const moreNumbers = new Array('hi', 'hello', 'bye');
// // console.log(moreNumbers);

// // // more than one numeric input will return a normal array
// // const moreNumbers2 = new Array(1, 2, 3);
// // console.log(moreNumbers2);

// // // one numeric input will return an empty array of that length
// // const moreNumbers3 = new Array(5);
// // console.log(moreNumbers3);

// // // both will behave the same way without the new keyword

// // const evenMoreNumbers = Array.of(1, 2, 3);
// // console.log(evenMoreNumbers);

// // in general, you will always create an array with [] and that usually has better performance, too

// // below doesn't take multiple arguments, it is used to pass turn iterable objects into an array, i.e. array like objects like strings, arrays, maps, sets, etc.

// const listItems = document.querySelectorAll('li');
// // console.log(listItems);

// // const moreNumbers = Array.from('hello');
// // console.log(moreNumbers);

// const moreNumbers = Array.from(listItems);
// console.log(moreNumbers);

// // the above log returns the string split into an array of characters:
// // [ 'h', 'e', 'l', 'l', 'o' ]

// const hobbies = ['Sports', 'Cooking'];

// // different types of data can be added to an array
// const personalData = ['Andrew', 30, { moreDetails: [] }];

// // nested arrays
// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

const hobbies = ['Bass Guitar', 'Cooking', 'Programming'];
// adds to end of array
// hobbies.push('Reading');

// adds to beginning of array
// hobbies.unshift('Fishing');

// push and unshift return a value of the new length of the array

// removes from end of array
// hobbies.pop();

// could store the popped value in a variable
// const lastHobby = hobbies.pop();

// removes from beginning of array
// hobbies.shift();

// can manipulate the array directly through index
// hobbies[1] = 'Reading'; would replace 'cooking'

// hobbies[5] = 'Screaming';

// You can add a value to a previously nonexistent spot on the array

// hobbies[5] = 'Screaming'; which would return an array like follows:
//  ['Bass Guitar', 'Cooking', 'Programming', undefined, undefined, 'Screaming'];

// console.log(hobbies[4]);
// undefined      ======= rarely used

//
//  splice with two arguments will remove the element at that index and the number of elements specified
// splice with three arguments will remove the element at that index and the number of elements specified and add the new elements specified
// hobbies.splice(2, 0, 'Fishing', 'Traveling');

// console.log(hobbies);

// below will return an array with only specified number of elements remaining
// hobbies.splice(0);
// console.log(hobbies);
// empty array

// hobbies.splice(1);
// console.log(hobbies);
// ['Bass Guitar']
//
