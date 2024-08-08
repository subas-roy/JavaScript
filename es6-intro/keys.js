const glass = {
  name: 'glass',
  color: 'golden',
  price: 12,
  isCleaned: true
}

// console.log(glass)

// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys)


// all property values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values)


// array of array / two dimentional array 
const pairs = Object.entries(glass);
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]
// console.log(pairs)

// delete glass.isCleaned

const {isCleaned, ...rest} = glass
console.log(glass)
console.log(rest)

// freeze 
// Object.freeze(glass); // does not allows change
Object.seal(glass); // allow changing value
glass.price = 500
console.log(glass)


