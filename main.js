// "use Strict"; in moderen language this automatecally lode
// let admin;
// let name;

// name = "john";
// admin = name;
// alert(admin);
// alert(name);

// Create a variable with the name of our planet. How would you name such a variable?
// const OurPlanatName = "Earth";
// console.log(OurPlanatName);
// // Create a variable to store the name of a current visitor to a website. How would you name that variable?

// let currentUserName = "john";
// console.log(currentUserName);

// let var constant
// let and constant block scope and var in global scope
// block scope means we access only in block and global we can access any where in the code out side the block

// string , backtick
// let name = "john";
// console.log(`hi ${name}`);
// name[1] = "A";
// console.log(`hi ${name}`);
// let numbers = [1, 2, 3, 4, 66];
// console.log(numbers);
// numbers[1] = 300;
// console.log(numbers);
// console.log(typeof Object);

// Create a web-page that asks for a name and outputs it.

// let name = prompt("whats your name");
// console.log(name);
// let correctname = confirm(`${name} is your nam: is confirm`);
// console.log(correctname);
// type conversion
// string conversion
// let value = "234";
// alert(typeof value);
// console.log(value);
// value = Number(value);
// alert(typeof value);
// console.log(value);
// alert(typeof ("6" / "2"));
// alert(typeof ("6" / 2));
// alert(Boolean("0")); // true
// alert(Boolean(" ")); // true
// let a = 4;
// let c = "3";
// let b = "3";
// // alert(a + c + b);
// // alert(+"");
// // alert(a ** b);
// // let ="2"
// // let
// // console.log(typeof a, typeof +b, typeof +c);
// // console.log(+a + +c);
// // console.log((1 + 2) * 2);
// a++;
// // ++a;
// console.log(++a);
// let a = 1,
//   b = 1;

// let c = ++a; // ? c=2
// let d = ++b; //d=1
// console.log(c, d);
// console.log(undefined + null);
// let a = prompt("your age");
// let convertAge = Number(a);
// // a + 3;
// // console.log(convertAge + 6);
// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// console.log(firstName || lastName || nickName || "Anonymous");
// console.log(firstName == "" ? true : false);
// console.log(1 > 2 ? true : false);
// alert(1 && null && 2);
// console.log(firstName ?? nickName);
// for (let i = 0; i < 10; i++) {
//   if (i == 2) {
//     continue;
//   }
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }
// outerLoop: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) {
//       continue outerLoop; // Skip to the next iteration of the outer loop
//     }
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }
// let i = 0;
// while (i++ < 5) console.log(i);
// let i = 2;
// console.log(++i);
// console.log(i++, i);
// callName();
// function callName() {
//   console.log("hi js");
// }
// callName();
// let message = function callName() {
//   console.log("hi js");
// };
// console.log(message);
// var numbers = 7;
// function message() {
//   var numbers = 79;
//   console.log(3 + 3);
//   numbers = 3;
//   console.log(numbers);
// }
// message();
// console.log(numbers);
// let numbers = 7;
// console.log(numbers);
// {
//   let numbers = 98;
//   console.log(numbers);
// }
// numbers = numbers + numbers;
// console.log(numbers);

// function sumOFNumbers(sum, numbers) {
//   sum = 10;
//   console.log(sum);
//   sum = sum + numbers;
//   console.log(sum);
// }
// let sum = 2;
// console.log(sum);
// sumOFNumbers(sum, 30);
// sum = 4;
// console.log(sum);
// function showmsg(name, text) {
//   console.log(name, text);
// }
// showmsg("ali");
// function showMsg(name, text) {
//   if (text === "ali") {
//     return some + long + expression + or + whatever * f(a) + f(b);
//   }
//   console.log(name, text);
// }
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }
// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }
// let show = () => {
//   console.log("hi i am ali");
// };
// show();
// console.log(show());
// let greeting = function (name, second) {
//   console.log(name);
//   second();
// };
// let second = function () {
//   console.log("hi");
// };
// greeting("ali", second);
// second();
// let a = [1, 2, 3];
// // let b = [];
// let c = a;
// c[2] = 4;
// console.log(a);
// // console.log(a == b);
// console.log(c === a);
// console.log(c);
// console.log(a === b);
// sayHi("John"); // Hello, John

// function sayHi(name) {
//   // alert(`Hello, ${name}`);
//   console.log(`hi, ${name}`);
// }
// let allow = () => {
//   console.log("age is greater than 18");
// };
// let notAllow = () => {
//   console.log("age is less than 18");
// };
// let age = prompt("whats your age");
// if (age > 18) {
//   allow();
// } else {
//   notAllow();
// }
// let a = 9;
// let b = a;
// b = "90";
// console.log(2 + 3 + "2");
// console.log(typeof (2 + "2"));
// console.log(a == b);
// console.log(true + 1); // 2 (number)
// console.log(5 + "5" - 2);
// function modifyObject(obj) {
//   obj.name = "Updated ";
//   console.log(obj); // Modifying the original object
// }

// let person = { name: "Tanawish" };
// modifyObject(person); // Passing reference

// console.log(person.name); // Original object is modified
// let user = {
//   name: "ali",
//   age: 20,
// };
// let a = 9;
// user.name = "tanawish";
// user.age = a + user.name;
// console.log(result);
// user.istrue = true;
//  user.gender = "male";
// console.log(user);
// delete user.istrue;
// console.log(user);
// let fruit = "apple";

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// // alert(bag.apple);
// console.log(bag);
// let data = "data";
// let names = {
//   [data + "-id"]: "ali",
//   [data + "-num"]: 232,
// };
// console.log(typeof names[data + "-num"]);
// console.log(names);

// let user = {
//   name: "ali",
//   age: 90,
//   id: {
//     data: 23,
//     rp: 33,
//   },
//   sayhi: function () {
//     console.log("i" + user.name);
//   },
// };
// user.name = "altaf";
// console.log(user);
// const admin = user;
// admin.age = 23;
// admin.id = "rp33";
// // delete user.age;
// admin.name = "tanawish";
// admin.id.rp = 78;
// console.log(user);
// console.log(admin);
// console.log(...Object.entries(user));

// user.sayhi();
// console.log(user);
// let clone = { ...user };
// console.log(clone["age"]);
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert(this.name); // leads to an error
//   },
// };

// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi();
// console.log(admin);
// let calculate = {
//   a: +prompt("enter first number"),
//   b: +prompt("enter first number"),
//   sum() {
//     return this.a + this.b;
//   },
// };
// console.log(calculate.sum());
// calculate.sum();
