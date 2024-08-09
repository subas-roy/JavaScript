const numbers = [4,5,2,8,1,10];


// const doubled = [];
// for(const num of numbers){
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled)


// function
function doubleIt(num){
  console.log(num);
  return num * 2;
}

// arrow function
const double2 = n => n * 2;


// map
const result = numbers.map(double2);



const output = numbers.map(x => x * 2);

// more map
const fiveBonus = numbers.map(n => n +5)


const halfs = numbers.map(n => n / 2)


const friends = ['karim', 'anik', 'angad']
const nameLen = friends.map(x => x.length);

console.log(nameLen);


