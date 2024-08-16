console.log(1)
console.log(2)
// setTimeout(() => {
//   console.log(3)
// })
setTimeout(() => {
  console.log(3)
}, 3000)
console.log(4)
console.log(5)

setInterval
let num = 0;
const intervalId = setInterval(() => {
  num++
  if(num >= 6) {
    clearInterval(intervalId)
  }
  console.log(num)
}, 1000)