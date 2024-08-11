// function kitchen(){
//   let rost = 0
//   return function(){
//     rost++;
//     return rost;
//   }
// }

// const firstServer = kitchen();
// const secondServer = kitchen();
// console.log(firstServer())
// console.log(firstServer())
// console.log(secondServer())



// try following code in borwser console for better understanding
function stopWatch(){
  let counter = 0;
  return function(){
    counter++;
    return counter;
  }
}
const watch = stopWatch();
watch()
watch()
watch()
const watch2 = stopWatch();
watch2()
watch2()
watch2()

watch()
watch()