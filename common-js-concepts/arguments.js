// array like object

function add(a,b,c){
  const args = [...arguments]
  // console.log(args)
  const result = a+b+c
  return result
}

// console.log(arguments)
const total = add(1,2,3,4,5,6,9)
// console.log(total)

console.log(add.length) // length of parameters
