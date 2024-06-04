const today = new Date();

const date = new Date('2062-10-09')

const specificDate = new Date(2091, 2, 26)

console.log(date.getMonth())

console.log(date.getDay())

console.log(specificDate)

specificDate.setMonth(10)

console.log(specificDate)

console.log(specificDate.toLocaleString("en-GB")) // Great Briten
console.log(specificDate.toLocaleString("en-US")) // United States
console.log(specificDate.toLocaleString("en-UK")) // United States