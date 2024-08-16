const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random()
    if(success <= 0.5){
      resolve(success)
    }
    else{
      reject(success)
    }
  })
}

// call myLoader() in browser console

// call the promise 
myLoader()
.then(data => console.log('resolved with', data))
.catch(error => console.log('rejected with', error))

fetch('')
.then(res => res.json())
.then(data => console.log(data))

// fetch data with function
async function loadData() {
  const res = await fetch()
  const data = await res.json()
  console.log(data)
}

// fetch data with arrow function
const taskLoader = async() => {
  const response = await fetch()
  const data = response.json()
  console.log(data)
}


// console.log(1)
// console.log(2)
// setTimeout(() => {
//   console.log('lazy logged')
// }, 3000)
// console.log(4)
// console.log(5)
// console.log(6)

// function doSomething(){
//   console.log(3)
// }