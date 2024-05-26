const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib']
const sortedPersons = persons.sort()

console.log(sortedPersons)

const numberes = [4, 7, 10, 38, 3, 9, 40]

const numberes_asc = numberes.sort(function (a, b){return a - b})
const numberes_dsc = numberes.sort(function (a, b){return b - a})

console.log(numberes_asc)
console.log(numberes_dsc)