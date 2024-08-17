const a = () => {
  console.log('a');
  b()
  console.log('aa');
}
const b = () => {
  console.log('b')
  d()
  console.log('bb')
}
const d = () => {
  console.log('d')
  x()
  console.log('dd')
}
const x = () => {
  console.log('x')
  y()
  console.log('xx')
}

const y = () => {
  console.log('y')
  z()
  console.log('yy')
}

const z = () => {
  console.log('z')
  console.log('zz')
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

setTimeout(() => {
  console.log('insede timeout')
}, 2000)

a()
x()