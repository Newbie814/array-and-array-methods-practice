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

// const hobbies = ['Bass Guitar', 'Cooking', 'Programming'];
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

// can store removed values in a variable
// let removedEls = hobbies.splice(1);

// can also use - values to change the start direction of the splice
// console.log(hobbies);
// hobbies.splice(-2);
// console.log(hobbies);
// ['Bass Guitar']  i.e. removed two elements from the end of the array

// const medianIncome = [54.5, 36, 24.3, 62, 100, 46];
// const storeResults = medianIncome

// if i did the above and made a change to storeResults, the original medianIncome array would also change, as what's being stored in the variable is a reference to the original array, not the original array. they are both pointing to the same array. You can use slice as follows because it creates a new array and, therefore changes to the array in one variable won't change the other array.

// const medianIncome = [54.5, 36, 24.3, 62, 100, 46];
// const storeResults = medianIncome.slice(2);

// medianIncome.push(37.9);

// console.log(storeResults, medianIncome);

// can also use - values to change the start direction of the slice
// empty params return the entire array
// 1 param selects that element and everything after it
// 2 params is the start and end indexes of the slice

// const medianIncome = [54.5, 36, 24.3, 62, 100, 46];
// // const storeResults = medianIncome.slice(2);
// const storeResults = medianIncome.concat([37.9, 34.6, 19]);

// console.log(storeResults, medianIncome);
// console.log(medianIncome.indexOf(36));

// concat adds the elements of an array into an existing array, push would add as a nested array

// const medianIncome = [54.5, 36, 24.3, 62, 100, 46];
// const storeResults = medianIncome.slice(2);
// const storeResults = medianIncome.concat([37.9, 34.6, 19]);

// console.log(storeResults, medianIncome);

// indexOf returns the index of the first element that matches the specified value. Asecond optional argument specifies the index to start the search at. If the element is not found, it returns -1. Can be handy for checking if an element is in an array before pushing it, for example. Only finds the first instance of the element.
// console.log(medianIncome.indexOf(36, 2));

// lasIndexOf begins checking from the right(end) and will, therefore, return the index of the last element that matches the specified value.

// both indexOf and lastIndexOf work for primitive data types, but not reference types. (objects)

// For objects (but also available on arrays)

// const personData = [
//   {
//     name: 'Matt',
//   },
//   {
//     name: 'Matthew',
//   },
// ];
// console.log(personData.indexOf({ name: 'Matt' }));
// would return -1

// find()   takes a function as an argument and returns the first element in the array that passes the test implemented by the function.
// 1st parameter is a single object from array, second is the index of the object in the array, third is the name of the array itself

// const matt = personData.find(person, idx, persons); => {
//   return person.name === 'Matt';
// }
// would return the first object in the array that matches the condition. returns actual object, not a copy, which makes the value mutable

// findIndex()   takes same function but returns the index not the object

// .includes()   returns true if the array contains the specified element, false otherwise. Use case would be similar to a using !=== -1 with indexOf

// const prices = [10.99, 5.99, 3.99, 6.59];

// const tax = 0.07;

// const taxAdjustedPrices = [];

// for (const price of prices) {
//   let newPrice = price * (1 + tax);
//   let totalPrice = newPrice.toFixed(2);
//   taxAdjustedPrices.push(totalPrice);
// }

// forEach() also takes 3 arguments, the value you are looking at, the index, and the name of the array

// prices.forEach((price, idx, prices) => {
//   let newPrice = price * (1 + tax);
//   let totalPrice = newPrice.toFixed(2);

//   taxAdjustedPrices.push(totalPrice);
// });

// prices.forEach((price, idx, prices) => {
//   let newPrice = price * (1 + tax);
//   let totalPrice = newPrice.toFixed(2);
//   const priceObject = { index: idx, taxedPrice: totalPrice };
//   taxAdjustedPrices.push(priceObject);
// });

// console.log(taxAdjustedPrices);

// map()   takes a function as an argument and returns a new array with the results of calling the function on every element in the calling array. Sinmilar to forEach, but returns a new array with a new address in memory, and leaves original array unchanged.

// const prices = [10.99, 5.99, 3.99, 6.59];

// const tax = 0.07;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   let newPrice = price * (1 + tax);
//   let totalPrice = newPrice.toFixed(2);
//   const priceObject = { index: idx, taxedPrice: totalPrice };
//   return priceObject;
// });

// console.log(taxAdjustedPrices);

// sort() by default turns everything into strings and sorts them alphabetically. Can also sort numbers, but will sort them as strings.
// i.e., below, it checks the first charcter and sorts them in ascending and alphabetical order.

// ) [10.99, 3.99, 5.99, 6.59]
// 0: 10.99
// 1: 3.99
// 2: 5.99
// 3: 6.59
// length: 4
// [[Prototype]]: Array(0)

// const prices = [10.99, 5.99, 3.99, 6.59];

// const tax = 0.07;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   let newPrice = price * (1 + tax);
//   let totalPrice = newPrice.toFixed(2);
//   const priceObject = { index: idx, taxedPrice: totalPrice };
//   return priceObject;
// });

// const sortedPrices = prices.sort();

// console.log(sortedPrices);

// you can pass a fucntion to sort with two parameters that take numbers as arguments, and takes a compare function. The compare function takes two arguments, and returns a number. If the number is less than 0, the first argument is less than the second. If the number is greater than 0, the first argument is greater than the second. If the number is equal to 0, the first argument is equal to the second.
// It compares every element in the array, two at a time, until it has finsihed and resorts them according to the compare function.
const prices = [10.99, 5.99, 3.99, 6.59];

const tax = 0.07;

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

// puts in ascending numerical order
// console.log(sortedPrices);

// doesn't take argumetns, simply reverses the order of the array. often more appropriate to just reverse logic in function
console.log(prices.reverse());
// console.log(sortedPrices.reverse());

// const points = [40, 100, 1, 5, 25, 10];

// const sortedPoints = points.sort();
// console.log(sortedPoints);

// const sortedPoints2 = points.sort(function(a, b) {
//   return a - b;
// });
// console.log(sortedPoints2);

//  to sort in random order, using the built in Math.random() function is not completely random, use the Fisher-Yates shuffle.
// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * i);
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }
