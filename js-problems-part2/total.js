const products = [
    {name:'Shampoo', price:300, quantity:3},
    {name:'chiruni', price:150, quantity:2},
    {name:'shirt', price:700, quantity:5},
    {name:'pant', price:1200, quantity:4}
]

function shoppingTotal(products){
    let total = 0;
    for(product of products){
        total = total + product.price;
    }
    return total;
}


function cartTotal(products){
    let total = 0;
    for(product of products){
        const thisProductTotal = product.price * product.quantity;
        total = total + thisProductTotal
    }
    return total;
}

console.log(shoppingTotal(products))
console.log(cartTotal(products))