// premitive type are pass by value
let num1 = 5
let num2 = 10

function multiply(a, b){
  a = 27; // does not make change in outer scope
  const result = a*b;
  return result;
}

console.log(num1)

const output = multiply(num1, num2)
console.log(output)



// for non-premitive type 
// object and array are pass by reference
let student1 = {name:'ananta', partner:'borsha'}
let student2 = {name:'raj', partner:'anika'}

function makeMovie(student1, student2){
  student1.name = 'jalil'
  student2.partner = 'mim'
}
console.log(student1, student2)
makeMovie(student1, student2) // changes non-premitive both ounter and inner scope
console.log(student1, student2)


