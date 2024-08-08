const max = Math.max(30,70,55,12,48,20)
console.log(max)


const numbers = [7,50,12,40,90,62,45,32,10,]
const arrayMax = Math.max(...numbers)
console.log(...numbers)
console.log(arrayMax)


// use spread operator to copy
const friends = [4,5,87,10] 
const bondhu = friends;
const dosto = [...friends] // copy
bondhu.push(12);
console.log(friends)
console.log(dosto)

// advance
const sonkha = [...friends, 100]
console.log(sonkha)
