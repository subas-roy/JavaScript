function greeting(greetingHandler, name){
  greetingHandler(name)
}

const name = 'manna biswas'
const numbers = [25, 98, 12, 60]
const laptop = {brand:'lenovo', price:50000, memory:'8gb'}

function greetingHandler(name){
  console.log('good morning!', name)
}
function greetAfternoon(name){
  console.log('good afternoon!', name)
}
function greetEvening(name){
  console.log('good evening!', name)
}

greeting(greetingHandler, 'Kodom')
greeting(greetEvening, 'Jim')


// usage
document.getElementById('btn-submit').addEventListener('click', function(){
  console.log('you clicked');
})