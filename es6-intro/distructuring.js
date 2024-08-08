const actor = {
  name: 'Ananta',
  age: 30,
  phone: '01303636541',
  money: 2000000000
}

// const phone = actor.phone
// const name = actor.name
// const age = actor.age


// if right is an object left of distructuring will object as well
// use property name as variable that contains the property value
const {phone, age: boyos} = actor
const {age} = actor
console.log(phone)
console.log(boyos)


// array distructuring
const numbers = [45, 66];
const [first, second] = numbers;
const [x, y] = [12, 66];


// function distructuring 
function doubleThem(a, b) {
  return [a*2, b*2];
}

const [a, b] = doubleThem(6, 9)
console.log(a, b)