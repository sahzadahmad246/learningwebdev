// let obj = {
//   name: "Shahzad",
//   age: 25,
//   weight: 74,
//   greet: function () {
//     console.log("salam bhaiya");
//   },
// };
// console.log(typeof(obj.age));

// arrays

// let anOtherArray = new Array("Shahzad", 23, "yes!", function () {});
// console.log(anOtherArray);

// let arr = ["Shahzad", 1, 2, true];
// arr.push("Ahmad")
// arr.pop()
// arr.shift()
// arr.unshift("Shahzad", "Ahmad")

// console.log(arr.slice(1,4))
// arr.splice(3,0,"Ahmad")
// console.log(arr);

// let getSquare = [10, 20, 30, 40, 50];

// let square = getSquare.map((num) => {
//   return num ** 2;
// });
// console.log(square);

// let arr = [
//   2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// let evenNum = arr.filter((num) => {
//   return num % 2 !== 0;
// });

// console.log(evenNum)

// let arr = ["Shahzad", 12, true, 69, null, "Ahmad", "Khan"];
// let getStrings = arr.filter((val) => {
//   return typeof val === 'string';
// });
// console.log(getStrings)

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// let answer = arr.reduce((acc, cv) => {
//   return acc + cv;
// }, 0);
// console.log(answer);
// let arr = [2, 1, 4, 40, 6, 3, 0, 9, 76, 54, 35];
// arr.sort((a, b) => b - a);
// console.log(arr);
// console.log(arr.indexOf(40));

// let numbers = [10, 13, 21, 35, 42, 50];
// let isDivisibleBy7 = numbers.find((num) => num % 7 == 0);
// console.log(isDivisibleBy7);

// let users = [
//   { id: 1, name: "Shahzad", age: 25 },
//   { id: 2, name: "Ahmad", age: 30 },
//   { id: 3, name: "Khan", age: 22 },
// ];

// function firstName(users, username) {
//   return users.find((user) => user.name === username);
// }
// console.log(firstName(users, "Ahmad"));

// let arr = [1, 3, 4, 67, 8];
// arr.forEach((num, index) => {
//   console.log("number:", num, "index no:", index);
// });
// console.log(arr)

// let users = { name: "Shahzad", age: 25 };

// for (let key in users) {
//   console.log(key, users[key]);
// }

// let arr = [1, 3, 4, 67, 8];
// function getSum(arr) {
//   let sum = 0;
//   arr.forEach((val) => {
//     sum += val;
//   });
//   return sum;
// }
// console.log(getSum(arr))

// let numbers = [5, 12, 8, 130, 44];

// let getLargest = (numbers) => {
//   let max = numbers[0];
//   numbers.forEach((num) => {
//     if (num > max) {
//       max = num;
//     }
//   });
//   return max;
// };
// console.log(getLargest(numbers))
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let doubleOddNumbers = function (arr) {
//   let oddNum = arr.filter((num) => {
//     return num % 2 !== 0;
//   });
//   return oddNum.map((num) => {
//     return num * 2;
//   });
// };

// console.log(doubleOddNumbers(arr));
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumOfSquaresEven = (arr) => {
//   let evenNum = arr.filter((num) => {
//     return num % 2 == 0;
//   });
//   let squareNum = evenNum.map((num) => {
//     return num ** 2;
//   });
//   return squareNum.reduce((acc, cv) => acc + cv);
// };
// console.log(sumOfSquaresEven(arr));

let arr = ["Shahzad", "Ahmad", "Khan", "JavaScript", "CSS", "HTML"];
function findLongestString(arr) {
  let longestStr = arr[0];
  arr.forEach((str) => {
    if (str.length > longestStr.length) {
      longestStr = str;
    }
  });
  return longestStr;
}

console.log(findLongestString(arr));
