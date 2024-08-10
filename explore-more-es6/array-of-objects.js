const products = [
  {id:1, name:'lenovo', price:65000},
  {id:2, name:'dell', price:45000},
  {id:3, name:'hp', price:40000},
  {id:4, name:'mac', price:15000}
]

// map 
const names = products.map(product => product.name);
const prices = products.map(x => x.price);
console.log(prices)

// forEach
products.forEach(p => console.log(p.name))

// filter 
const expenssive = products.filter(p => p.price > 50000)
console.log(expenssive)


// find 
const affordable = products.find(p => p.price < 50000)
console.log(affordable)


// reduce
const total = products.reduce((accum, current) => accum + current.price, 0)
console.log(total)