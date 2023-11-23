// {
//  var dzis = Date();
// console.log("hello word, today is "+ dzis); //date
// let myAge = 35
// console.log("This is my age in 5 years: " + (myAge+5));
// }

// const getAgeFromBirthDate = (year, month, day) => {
//     const date = new Date();
//     date.setFullYear(date.getFullYear() - year);
//     date.setMonth(date.getMonth() - month);
//     date.setDate(date.getDate() - day);
//     return date;
//  };
 
//  console.log( getAgeFromBirthDate(1987, 9, 23).getFullYear() ); + diff.getMonth() + " miesięcy " + diff.getDate() + " dni" 


var date1 = new Date("10/23/1987"); // ustawienie daty za pomocą tekstu (miesiąc/dzień/rok)
var date2 = new Date("11/23/2023");
var diff = new Date(Math.abs(date2.getTime() - date1.getTime()));
const donia = (diff.getFullYear() - 1970);
console.log(donia)



console.log("this is my age in 5 years: " + (donia+5));
console.log("this is my age in 10 years: " + (donia+10));

