// for (let i = 0; i<5; i++){
//     console.log("Shahzad")
// }

// for (let num = 0; num <= 20; num++) {
//   console.log(num);
// }
// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i < 6; i++) {
//   if (i == 5) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 6; i++) {
//   if (i == 5) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
// for (let i = 0; i < 3; i++) {
//   console.log("hi");
// }
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// for (let i = 0; i < 5; i++) {
//   if (i % 2 === 0) i += 1; // increment i by 1 if even
//   console.log(i);
// }
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// for (let i = 0; i <= 5; i++) {
//   console.log(i *3);
// }
// for (let i = 1; i <= 5; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += '*';
//   }
//   console.log(row);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 5;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// let j = 5;
// do {
//   console.log(j);
//   j--;
// } while (j > 0);

// let myName = "shahzad";
// let anotherName = new String("Shahzad")
// console.log(typeof(anotherName));

let sub1 = "hindi ";
let sub2 = "ENGLISH";
// console.log(sub1 + sub2)
// console.log(sub1.length)
// console.log(sub1.toUpperCase())
// console.log(sub1.toLowerCase())
// console.log(sub1.substring(2))
// console.log(sub2.substring(2,5))

let intro = 'Hello i\'m shahzad. a self-taught "software developer"';
// console.log(intro);
let words = intro.split(" ");

// words.shift();
// let stringWords = words.toString();
// console.log(stringWords);
// console.log(words.join(", "));

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     sum += i;
// }
// console.log(sum);

// for (let i = 1; i <= 10; i++) {
//   console.log(`7 x ${i} = ${7 * i}`);
// }
// let i = 10;
// while (i > 0) {
//   prompt(`enter ${i}`);
//   i--;
// }
// let input;
// do {
//   input = Number(prompt("Enter 0 to stop"));
// } while (input !== 0);

// let num = 5;
// do{
//   console.log(num)
//   num--
// }while(num > 0)

// let str = "hello world";
// console.log(str);
// let UPPERCASE = str.toUpperCase()
// console.log(UPPERCASE);
// let lowerCase = str.toLowerCase()
// console.log(lowerCase);
// console.log(lowerCase.length)

// let phal = "seb,kela,cherry";
// let phalArr = phal.split(",");
// console.log(phalArr, phalArr.length)

// let loveArray = ["I", "love", "Aayesha"];
// let jointArray = loveArray.join(" ");
// console.log(jointArray)

let text = "I enjoy coding in JavaScript and Python!";

if (text.includes("JavaScript")) {
  console.log("Yes, 'JavaScript' is in the text!");
} else {
  console.log("No, JavaScript is NOT in the text!");
}

if (text.includes("Python")) {
  console.log("Yes, 'Python' is in the text!");
} else {
  console.log("No, Python is NOT in the text!");
}
if (text.includes("Java")) {
  console.log("Yes, 'Java' is in the text!");
} else {
  console.log("No, Java is NOT in the text!");
}
if (text.includes("C++")) {
  console.log("Yes, 'C++' is in the text!");
} else {
  console.log("No, C++ is NOT in the text!");
}