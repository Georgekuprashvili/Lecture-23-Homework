// 1
// let numbers = [10, 13, 15, 14, 88];
// let newnumbers = numbers.reduce((acc, cur) => {
//   return acc + cur;
// }, 1);
// console.log(newnumbers);

// 2
// let number = [10, 13, 15, 14, 88];
// let numbers = (number) => {
//   return number.reduce((acc, cur) => {
//     if (acc > cur) {
//       return acc;
//     } else {
//       return cur;
//     }
//   });
// };
// console.log(numbers(number));

// 4
// let Names = ["giorgi", "mari", "ani"];
// let fullname = Names.reduce((acc, cur) => {
//   return acc + "" + cur;
// });
// console.log(fullname);

// // 5
// let number = [10, 13, 15, 14, 88];
// let numbers = number.reduce((acc, cur) => {
//   return acc * cur;
// }, 1);
// console.log(numbers);

// // 7
// let number = [10, 13, 15, 14, 88];
// let numbers = number.reduce((acc, cur) => {
//   return acc - cur;
// });
// console.log(numbers);

// 8
// let number = [10, 13, 15, 14, 88];
// let newnumber = number.map((one) => {
//   return one * 2;
// });
// console.log(newnumber);

// 9

// let word = ["Reeducate Is The Best"];
// let newword = word.map((one) => {
//   return one.toLocaleLowerCase();
// });
// console.log(newword);

// 11
// let hello = document.querySelectorAll("#container p");
// let newhello = Array.from(hello).map((one) => {
//   return one.textcontent();
// });
// console.log(newhello);

// 12
// let number = [10, 13, 15, 14, 88];
// number.map((one) => {
//   console.log(one * one);
// });

// // 13
// function Giorgi() {
//   let text = document.querySelectorAll("#container p");
//   text.forEach((one) => {
//     one.textContent += " giorgi";
//   });
// }
// console.log(Giorgi());

// 14
// let students = [
//   { saxeli: "giorgi", qula: 98 },
//   { saxeli: "mate", qula: 99 },
//   { saxeli: "ani", qula: 100 },
// ];

// students.forEach((one) => {
//   return (one.qula += 5);
// });
// console.log(students);

// 16
// let numbers = [1, 2, 3, 4, 5];
// let newnumbers = [];
// (one) => {
//   for (let index = numbers.length - 1; index >= 0; index--) {
//     newnumbers(one[index]);
//   }
//   return newnumbers;
// };
// console.log(newnumbers);

// 17
// let names = ["giorgi", "mari", "salome"];
// let hello = document.getElementById("hello");
// for (let index = 0; index < names.length; index++) {
//   let box = document.createElement("div");
//   box.textContent = names[index];
//   hello.appendChild(box);
// }

// 18

// let numbers = [1, 2, 3, 4];

// for (let index = 0; index < numbers.length; index++) {
//   let number = numbers[index];

//   for (let index = 1; index <= 10; index++) {
//     console.log(`${number} * ${index} = ${number * index}`);
//   }
// }

// 19
// let numbers = [1, 55, 1, 56, 23, 3];
// let newnumbers = numbers.filter((one) => {
//   if (one > 10) {
//     return one;
//   }
// });
// console.log(newnumbers);

// 20
// let divs = document.querySelectorAll("div");

// let stylediv = Array.from(divs).filter((one) => {
//   one.classList.contains("hi");
// });

// console.log(stylediv);
