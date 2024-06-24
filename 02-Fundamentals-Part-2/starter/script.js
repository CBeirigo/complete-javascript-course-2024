// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio"

// const private = 543

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function declaration
// function calcAge1(birthYear){
//   return 2024 - birthYear
// }

// const age1 = calcAge1(2000)

// Function expression
// const calcAge = function(birthYear){
//   return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])

// console.log(age1, age2, age3)

// const ages = [age1, age2, age3]

// console.log(ages)

// Add elements
const friendsArray = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");

// console.log(friends);
// console.log(newLength);

// friends.unshift('John')
// console.log(friends)

// // Remove elements
// friends.pop()
// console.log(friends)

// friends.shift() // first
// console.log(friends)

// friends.push(23)

// console.log(friends.indexOf("Steven"))

// // console.log(friends.includes('Steven'))
// // console.log(friends.includes('Bob'))
// console.log(friends.includes("23"))

// const carolina = {
//   firstName: "Carolina",
//   lastName: "Souza",
//   age: 2024 - 2000,
//   job: "Programmer",
//   friends: ["Isabela", "Denice", "Amanda"],
// };

// console.log(carolina);
// console.log(carolina.firstName)
// console.log(carolina["lastName"])

// const nameKey = "Name";
// console.log(carolina["first" + nameKey])
// console.log(carolina["last" + nameKey])

// const interestedIn = prompt(
//   "What do you want to know about Carolina? Choose between firstName, lastName, age, job and friends"
// );

// if (carolina[interestedIn]) {
//   console.log(carolina[interestedIn]);
// } else {
//   console.log("Wrong request! Choose between firstName, lastName, age, job and friends")
// }

// carolina.location = "Brasil"
// carolina["instagram"] = "carolinnabeirigo"

// console.log(carolina)

// Challenge

// "Carolina has 3 friends, and his best friend is called Denice"

// const firstName = carolina.firstName
// const friendsQuantity = carolina.friends.length
// const bestFriend = carolina.friends[1]

// console.log(`${firstName} has ${friendsQuantity}, and her best friend is called ${bestFriend}`)

// const carolina = {
//   firstName: "Carolina",
//   lastName: "Souza",
//   birthYear: 2000,
//   job: "Programmer",
//   friends: ["Isabela", "Denice", "Amanda"],
//   hasDriversLicense: false,

//   // calcAge: function (birthYear) {
//   //     return 2024 - birthYear;
//   //   },

//   // calcAge: function () {
//   //   return 2024 - this.birthYear
//   // }
//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she ${
//       this.hasDriversLicense
//         ? `a`
//         : `no`
//     } has driver's license`;
//   },
// };

// console.log(carolina.calcAge());
// console.log(carolina.age);
// console.log(carolina.getSummary());

// const carolinaArray = [
//   "Carolina",
//   "Beirigo",
//   2024 - 2000,
//   "Programmer",
//   ["Isabela", "Amanda", "Brenda"],
// ];

// const types = []

// for (let i = 0; i < carolinaArray.length; i++) {
//   console.log(carolinaArray[i], typeof carolinaArray[i]);

//   // types[i] = typeof carolinaArray[i]
//   types.push(typeof carolinaArray[i])
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }

// console.log(ages)

// const carolina = [
//   "Carolina",
//   "Beirigo",
//   2024 - 2000,
//   "Programmer",
//   ["Isabela", "Amanda", "Brenda"],
// ];

// for(let i = carolina.length - 1; i >= 0; i--){
//   console.log(carolina[i])
// }

// for(let exercise = 1; exercise < 4; exercise++){
//   console.log(`------ Starting exercise ${exercise}`)
//   for(let rep = 1; rep < 6; rep ++ ){
//     console.log(`Lifting weight repetition ${rep}`)
//   }
// }
const classPoints = [2, 3];
let soma = 0;

for (let i = 0; i <= classPoints.length-1; i++) {
  soma += classPoints[i];
  console.log(soma);
}
const media = soma/classPoints.length
console.log(media)