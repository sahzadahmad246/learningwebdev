// let firstPromise = new Promise((resolve, reject) => {
//   let sucess = false;
//   if (sucess) {
//     resolve("10");
//   } else {
//     reject(-10);
//   }
// });

// firstPromise
//   .then((message) => {
//     console.log(`First Message ${message}`);
//     return 20;
//   })
//   .then((message) => {
//     console.log(`Second Message ${message}`);
//     return 30;
//   })
//   .then((message) => {
//     console.log(`Third Message ${message}`);
//   })
//   .catch((error) => {
//     console.error("Error Message", error);
//   });

// let promise = new Promise((resolve, reject) => {
//   resolve("First");
//   reject("Second");
// });

// promise
//   .then(msg => console.log("Then:", msg))
//   .catch(err => console.log("Catch:", err));

// Promise.resolve(5)
//   .then((num) => {
//     console.log("Step 1:", num);
//     return num * 2;
//   })
//   .then((num) => {
//     console.log("Step 2:", num);
//     return Promise.resolve(num + 3);
//   })
//   .then((num) => {
//     console.log("Step 3:", num);
//   });

// Promise.reject("Error happened")
//   .then(() => console.log("Step 1"))
//   .catch(err => {
//     console.log("Step 2:", err);
//     return "Recovered";
//   })
//   .then(msg => console.log("Step 3:", msg));
// Promise.resolve(1)
//   .then(num => num + 1)
//   .then(num => { throw "Oops!"; })
//   .then(num => num + 1)
//   .catch(err => err)
//   .then(num => num + 1)
//   .then(num => console.log(num));
// const p1 = new Promise(res => setTimeout(() => res("A"), 100));
// const p2 = new Promise(res => setTimeout(() => res("B"), 50));
// const p3 = new Promise((_, rej) => setTimeout(() => rej("C"), 30));

// Promise.race([p1, p2, p3])
//   .then(val => console.log("Race resolved:", val))
//   .catch(err => console.log("Race rejected:", err));

// Promise.all([p1, p2, p3])
//   .then(val => console.log("All resolved:", val))
//   .catch(err => console.log("All rejected:", err));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First");
//   }, 200);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Second failed");
//   }, 100);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Third");
//   }, 50);
// });

// p1.then((message) => {
//   console.log("Success", message);
//   return p2.catch((error) => {
//     console.log(error);
//     return p3;
//   });
// }).then((message) => {
//   console.log("Success", message);
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("A");
//   }, 300);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("B failed");
//   }, 100);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("C");
//   }, 200);
// });

// Promise.allSettled([p1, p2, p3]).then((results) => {
//   results.forEach((result) => {
//     if (result.status === "fulfilled") {
//       console.log("Success:", result.value);
//     } else {
//       console.log("Error:", result.reason);
//     }
//   });
// });

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo"),
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.value)),
// );

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1");
//   }, 100);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P2 failed");
//   }, 200);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3");
//   }, 50);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P4");
//   }, 150);
// });

// p1.then((message) => console.log("Success", message)).catch((errro) =>
//   console.log("Error", errro)
// );
// Promise.allSettled([p2, p3, p4]).then((results) => {
//   results.forEach((result) => {
//     if (result.status === "fulfilled") {
//       console.log("Success", result.value);
//     } else {
//       console.log("Failed", result.reason);
//     }
//   });
// });

// const p1 = new Promise((res, rej) => setTimeout(() => res(10), 100));
// const p2 = new Promise((res, rej) => setTimeout(() => rej("Failed P2"), 50));
// const p3 = new Promise((res, rej) => setTimeout(() => res(30), 150));

// p1.then((message) => {
//   console.log("Step 1:", message);
//   return p2.catch((error) => {
//     console.log("Error caught:", error);
//     return 100;
//   });
// })
//   .then((message) => {
//     console.log("success", message);
//     return p3;
//   })
//   .then((message) => {
//     console.log("success", message);
//   });
