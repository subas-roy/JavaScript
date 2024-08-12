// const user = {id:1, name:'Gorib Amir', job:'Actor'}

// // Javascipt Object Notation (JSON)
// console.log(user)

// const stringified = JSON.stringify(user);
// console.log(stringified)


const shop = {
  owner:  'Alia',
  address:  {
    street: 'Narinda Rd',
    city: 'Dhaka',
    country:  'BD'
  },
  products: ['laptop', 'mic', 'keyboard', 'guiter'],
  revenue:  45000,
  isOpen: true,
  idNew:  false,
}
console.log(shop)
const shopJSON = JSON.stringify(shop)
console.log(shopJSON)
const shopObj = JSON.parse(shopJSON)
console.log(shopObj)