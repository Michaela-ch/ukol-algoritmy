const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

//1
document.body.innerHTML += numbers + "<br>"

//2
const mocnina = numbers.map((cislo)=> cislo**2)
document.body.innerHTML += mocnina + "<br>"


//3
// const zaporna = numbers.map(cislo => {
//   if (cislo < 0) {
//     return cislo;
//   } else {
//     return null; 
//   }
// });
// document.body.innerHTML += zaporna + "<br>"


const zaporna = numbers.filter(cislo => cislo < 0)
document.body.innerHTML += zaporna + "<br>"

//4

const absolutni = numbers.map((cislo)=> Math.abs(cislo))
document.body.innerHTML += absolutni + "<br>"

//5 

const suda = numbers.filter(cislo => cislo%2===0)
document.body.innerHTML += suda + "<br>"

//6
const absolutni3 = numbers.filter((cislo)=> (Math.abs(cislo))%3===0)
document.body.innerHTML += absolutni3 + "<br>"

//7
const vzdalenosti = numbers.map(cislo => Math.abs(cislo - 5))
document.body.innerHTML += vzdalenosti + "<br>"

//8
const vzdalenosti2 = numbers.map(cislo => Math.abs(cislo - 5)**2)
document.body.innerHTML += vzdalenosti2 + "<br>"

//9
document.body.innerHTML += zaporna.length + "<br>"

//10
let soucet = 0
numbers.forEach(function(num) {
  soucet +=num
})
document.body.innerHTML += soucet + "<br>"

//11
document.body.innerHTML += soucet/numbers.length+ "<br>"

//12
const kladna = numbers.filter(cislo => cislo > 0)

let soucetKladna = 0
kladna.forEach(function(num) {
  soucetKladna +=num
})

document.body.innerHTML += soucetKladna + "<br>"