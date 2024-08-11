console.log(hello2); // undefined

hello()

// hoisting (var)
// for(var i=1; i<5; i++){
//   console.log(i)
// }
// // value of 'i' in outside
// console.log(i)

// using (let)
for(let i=1; i<5; i++){
  console.log(i)
}
// value of 'i' in outside
// console.log(i)

function hello(){
  console.log('hello world!')
}

var hello2 = function(){
  console.log('hello expression!')
}