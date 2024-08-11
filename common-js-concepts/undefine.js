/**
 * 8 ways to get undefine
 * 
 * variable that is not initialized
 * function with no return
 * parameter that are not passed will be undefined
 * if return has nothing to the right side will return undefined give you undefined
 * property that does not exist in an object will
 * accessing array elements outside the index range
 * deleting an element inside an array
 * set a value directly to undefined
 * 
 * 
 * */

let first;

function second(a, b){
  const total = a + b;
}
// const result = second()

function third(a,b,c,d){
  const total = a + b + c + d;
  console.log(a,b,c,d);
}
// third(1,2)

function noNegetive(a, b){
  if(a < 0 || b < 0){
    return
  }
  return a + b;
}
const total = noNegetive(2, -5)

const fifth = {id:5, name:'ponchom', age:40}
// console.log(fifth.id, fifth.sallary)

const sixth = [36,98,48,97,22]
delete sixth[1]
// console.log(sixth[1], sixth[2])

const eight = undefined;

const nine = null;

const data = {results: [], updated: null}
// console.log(typeof results, typeof updated)

console.log(typeof null)




