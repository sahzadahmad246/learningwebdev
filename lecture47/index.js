// class Human {
//   //Properties
//   name = "Shahzad";
//   age = 25;
//   weight = 70;
//   #height = 6;
//   constructor(newName, newAge, newWeight, newHeight) {
//     this.name = newName;
//     this.age = newAge;
//     this.weight = newWeight;
//     this.#height = newHeight;
//   }

//   // Behaviour

//   #walking() {
//     console.log("Im walking");
//   }
//   eating() {
//     console.log("Im eating");
//   }
//   coding() {
//     console.log("Im coding");
//   }

//   get fetchHeight() {
//     return this.#height;
//   }
//    get fetchwalking() {
//     return this.#walking;
//   }
//   set modifyHeight(val) {
//     this.#height = val;
//   }
// }

// const obj = new Human("Ahmad", 26, 65, 6.1);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.weight);
// console.log(obj.fetchHeight);
// obj.fetchwalking()

// function sayMyName(myFirstName = "Shahzad", myLastName = "Ahmad") {
//   console.log("My name is:", myFirstName, myLastName);
// }

// function sayMyName(
//   myFirstName = "Shahzad",
//   myLastName = myFirstName.toUpperCase()
// ) {
//   console.log("My name is:", myFirstName, myLastName);
// }

// function sayMyName(value = { name: "Shahzad", age: 25, weight: 65 }) {
//   console.log("My name is:", value.name, "and age", value.age, "and age", value.weight);
// }

// function sayMyName(value = 'Shahzad') {
//   console.log("My name is:", value);
// }
// sayMyName(undefined);

// class Person {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introdunce() {
//     console.log(`My name is ${this.name} and I am ${this.age} years old`);
//   }
// }

// let personObj = new Person("Shahzad", 23);
// personObj.introdunce();

// class BankAccount {
//   accountHolderName;
//   #balance = 0;

//   constructor(balance, accountHolderName) {
//     this.#balance = balance;
//     this.accountHolderName = accountHolderName;
//   }
//   get fetchBalance() {
//     return this.#balance;
//   }
//   set addFunds(amount) {
//     this.#balance = this.#balance + amount;
//     console.log(
//       `Deposititng...you have deposited ${amount} in your account, total balance is ${
//         this.#balance
//       }`
//     );
//   }
//   withdraw(withdrawAmount) {
//     if (this.#balance === 0 || this.#balance < withdrawAmount) {
//       console.log(
//         `Withdrawing...Dear ${this.accountHolderName} , you have insufficient balance in your account`
//       );
//     } else {
//       this.#balance -= withdrawAmount;
//       console.log(
//         `Withdrawing...Dear ${this.accountHolderName} , ${withdrawAmount} was debited from your account. updated balance is ${this.#balance}`
//       );
//     }
//   }
// }

// let BankAccountObj = new BankAccount(100000, "Shahzad");

// console.log(
//   `Account opening...Dear ${BankAccountObj.accountHolderName}, account opened for you and ${BankAccountObj.fetchBalance} has been deposited in your account`
// );

// BankAccountObj.addFunds = 10000;
// console.log(`Balance checking...your account balance is ${BankAccountObj.fetchBalance}`);

// BankAccountObj.withdraw(150000);

// class BankAccount {
//   #balance = 0;
//   constructor(name) {
//     this.name = name;
//   }

//   deposite(amount) {
//     this.#balance += amount;
//     console.log(`${amount} was deposited in your account`);
//   }
//   withdraw(amount) {
//     if (this.#balance >= amount) {
//       this.#balance -= amount;
//       console.log(`${amount} was withdrwn from your account`);
//     } else {
//       console.log(`insufficient balance bro, go earn some money, you begger`);
//     }
//   }
//   get getBalance() {
//     return this.#balance;
//   }
//   static fundTransfer(sender, receiver, amountToBeTransferred) {
//     if (sender.getBalance >= amountToBeTransferred) {
//       sender.withdraw(amountToBeTransferred);
//       receiver.deposite(amountToBeTransferred);
//       console.log(
//         `${amountToBeTransferred} transferred from ${sender.name} to ${receiver.name}`
//       );
//     } else {
//       console.log("insufficient balance");
//     }
//   }
// }

// let account1 = new BankAccount("Shahzad");
// let account2 = new BankAccount("Shahbaz");

// account1.deposite(10000);
// console.log(account1.getBalance, account1.name, "ba;ance");
// BankAccount.fundTransfer(account1, account2, 7000);

// console.log(
//   `dear ${account1.name} you updated balance is ${account1.getBalance}`
// );
// console.log(
//   `dear ${account2.name} you updated balance is ${account2.getBalance}`
// );

//Bank System 2.0
// class BankAccount {
//   #balance = 0;
//   #transactionHistory = [];

//   constructor(name) {
//     this.name = name;
//   }
//   deposit(amount) {
//     this.#balance += amount;
//     this.#transactionHistory.push(`${amount} deposited`);
//   }
//   withdraw(amount) {
//     this.#balance -= amount;
//     this.#transactionHistory.push(`${amount} withdrew`);
//   }
//   get getBalance() {
//     return this.#balance;
//   }
//   get transactionsHistory() {
//     return this.#transactionHistory;
//   }
//   static transfer(sender, receiver, amountToBeTransferred) {
//     if (sender.getBalance >= amountToBeTransferred) {
//       sender.withdraw(amountToBeTransferred);
//       receiver.deposit(amountToBeTransferred);
//       console.log(
//         `amount ${amountToBeTransferred} transferred form ${sender.name} to ${receiver.name}`
//       );
//     } else {
//       console.log(
//         `Error 404: Money not found. ${sender.name}, you're a beggar with WiFi.`
//       );
//     }
//   }
// }

// let account1 = new BankAccount("Shahzad");
// let account2 = new BankAccount("Ajay");

// account1.deposit(10000);
// console.log(
//   `${account1.name}'s account activity:${account1.transactionsHistory}`
// );
// BankAccount.transfer(account1, account2, 4000);
// console.log(
//   `${account1.name}'s account activity:${account1.transactionsHistory}`
// );
// console.log(
//   `${account2.name}'s account activity:${account2.transactionsHistory}`
// );
// console.log(`${account1.name}'s account balance:${account1.getBalance}`);
// console.log(`${account2.name}'s account balance:${account2.getBalance}`);
// BankAccount.transfer(account2, account1, 1000);
// console.log(
//   `${account1.name}'s account activity:${account1.transactionsHistory}`
// );
// console.log(
//   `${account2.name}'s account activity:${account2.transactionsHistory}`
// );
// console.log(`${account1.name}'s account balance:${account1.getBalance}`);
// console.log(`${account2.name}'s account balance:${account2.getBalance}`);

// Student Management System

class Student {
  name;
  age;
  grades = [];
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }
  getAverageGrade() {
    let sum = this.grades.reduce((acc, current) => acc + current, 0);
    return sum / this.grades.length;
  }

  addGrade(grades) {
    this.grades.push(grades);
  }
}

let s1 = new Student("Shahzad", 23, [90, 85, 95]);
let s2 = new Student("Ayesha", 21, [88, 92, 79]);
let s3 = new Student("Rohit", 22, [76, 81, 69]);
let s4 = new Student("Priya", 20, [95, 90, 98]);
let s5 = new Student("Karan", 24, [65, 72, 70]);
let s6 = new Student("Fatima", 23, [89, 94, 91]);
console.log("average", s1.getAverageGrade());
class StudentManager {
  #students = [];

  addStudent(student) {
    this.#students.push(student);
  }

  findStudent(name) {
    return this.#students.find((student) => student.name === name);
  }

  getTopper() {
    return this.#students.reduce((topper, current) => {
      return topper.getAverageGrade() > current.getAverageGrade()
        ? topper
        : current;
    }, this.#students[0]);
  }

  static compareStudents(s1, s2) {
    let avg1 = s1.getAverageGrade();
    let avg2 = s2.getAverageGrade();

    if (avg1 > avg2) {
      console.log(s1.name, "is better than", s2.name);
    } else if (avg2 > avg1) {
      console.log(s2.name, "is better than", s1.name);
    } else {
      console.log(`${s1.name} and ${s2.name} are tied with average ${avg1}`);
    }
  }
}

let manager = new StudentManager();
manager.addStudent(s1);
manager.addStudent(s2);
manager.addStudent(s3);

console.log(manager.findStudent("Shahzad"));
console.log(manager.getTopper().name);

StudentManager.compareStudents(s1, s2);
