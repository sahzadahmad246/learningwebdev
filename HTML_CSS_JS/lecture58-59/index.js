class Product {
  constructor(name, price, discountPercentage) {
    this.name = name;
    this.price = price;
    this.discountPercentage = discountPercentage;
  }

  getDiscountedPrice() {
    return this.price - (this.price * this.discountPercentage) / 100;
  }

  getInfo() {
    return `Product:${this.name}, Price ${this.price}, discount ${this.discountPercentage}`;
  }
}

const p = new Product("Shoes", 2000, 20);

console.log(p.getDiscountedPrice());
console.log(p.getInfo());

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const r = new Rectangle(10, 5);

// console.log(r.area());
// console.log(r.perimeter());

// class BankAccount {
//   #password;
//   constructor(name, balance, password) {
//     this.name = name;
//     this.balance = balance;
//     this.#password = password;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(
//         `dear ${this.name}, you have deposited ${amount} in your account. you updated balance i ${this.balance}`
//       );
//     }
//   }

//   withdraw(password, amount) {
//     if (password !== this.#password) {
//       console.log("Incorrect password.");
//       return;
//     }

//     if (amount > this.balance) {
//       console.log("Insufficient balance. Earn some money first bro 😂");
//       return;
//     }

//     this.balance -= amount;

//     console.log(
//       `Dear ${this.name}, you withdrew ${amount}. Updated balance is ${this.balance}.`
//     );
//   }

//   getBalance(password) {
//     if (password !== this.#password) {
//       console.log("Incorrect password.");
//       return this.balance;
//     }
//   }
// }

// const acc = new BankAccount("Shahzad", 1000, "abc123");

// console.log(acc);
// acc.deposit(10000);
// acc.withdraw("abc123", 500);
// console.log(acc.getBalance("wrong"));
// console.log(acc.getBalance("abc123"));

// document.addEventListener("DOMContentLoaded", function () {
//   let searchButton = document.getElementById("searchBtn");
//   let userInput = document.getElementById("user-input");

//   function validateLeetCodeUsername(username) {
//     if (!username || username.trim() === "") {
//       alert("Username cannot be empty");
//       return false;
//     }

//     const regex = /^[a-zA-Z0-9_-]{3,39}$/;
//     if (!regex.test(username)) {
//       alert("Invalid username! Use letters, numbers, _ or - (3-39 characters)");
//       return false;
//     }

//     return true;
//   }

//   function renderData(userData) {
//     console.log(userData);
//     document.querySelector(".progressContainer").style.display = "flex";

//     function updateProgress(level) {
//       const solved = userData[`${level}Solved`];
//       const total = userData.totalSolved;
//       const percentage = Math.round((solved / total) * 100);
//       const degree = (percentage / 100) * 360;

//       const progressElement1 = document.getElementById(`${level}Progress`);
//       const textElement1 = document.getElementById(`${level}Level`);

//       progressElement1.style.setProperty("--progress-degree", `${degree}deg`);
//       textElement1.textContent = `${solved}/${total}`;
//     }
//     ["easy", "medium", "hard"].forEach(updateProgress);
//     function renderStats(statsData) {
//       const container = document.querySelector(".stats");
//       container.style.display = "grid";
//       let card = document.createElement("div");
//       card.classList.add("statsCard");

//       const valueDiv = document.createElement("div");
//       valueDiv.classList.add("statsValue");
//       valueDiv.textContent = statsData.value;

//       const labelDiv = document.createElement("div");
//       labelDiv.classList.add("statsLabel");
//       labelDiv.textContent = statsData.label;

//       card.appendChild(valueDiv);
//       card.appendChild(labelDiv);

//       container.appendChild(card);
//     }

//     [
//       { label: "Acceptance Rate", value: `${userData.acceptanceRate}%` },
//       { label: "Ranking", value: userData.ranking },
//       { label: "Reputation", value: userData.reputation },
//       { label: "Total Solved", value: userData.totalSolved },
//       { label: "Contribution Points", value: userData.contributionPoints },
//     ].forEach((stats) => {
//       renderStats(stats);
//     });
//   }

//   async function fetchUserData(username) {
//     try {
//       searchButton.textContent = "Searching...";
//       const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
//       const response = await fetch(url);
//       const userData = await response.json();
//       // console.log(data);
//       if (userData.status === "success") {
//         renderData(userData);
//       } else {
//         console.log(userData);
//         const errorDiv = document.createElement("p");
//         errorDiv.classList.add("errorDiv");
//         errorDiv.textContent = "Username not found";
//         document.querySelector(".main").appendChild(errorDiv);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       searchButton.textContent = "Search";
//     }
//   }

//   function clearOldData() {
//     const statsContainer = document.querySelector(".stats");
//     const errorDiv = document.querySelector(".errorDiv");
//     errorDiv;
//     if (statsContainer) {
//       statsContainer.innerHTML = "";
//       statsContainer.style.display = "none";
//     }

//     if (errorDiv) {
//       errorDiv.textContent = "";
//       statsContainer.style.display = "none";
//     }
//   }
//   searchButton.addEventListener("click", () => {
//     username = userInput.value;
//     if (validateLeetCodeUsername(username)) {
//       clearOldData();
//       fetchUserData(username);
//     }
//   });
// });

// class User {
//   #password;
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   greet() {
//     return `Hello ${this.name}`;
//   }
//   setPassword(password) {
//     return (this.#password = password);
//   }

//   checkPassword(password) {
//     return this.#password === password;
//   }
// }

// const user1 = new User("Shahzad", "sahzad@gmail.com");

// user1.setPassword("shaz123");
// console.log(user1);

// console.log(user1.checkPassword("shaz123"));
