
function matchProducts(products, search) {
    let matched = [];
    for(product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const products = [
    {'id':1, 'name':'xaomi phone', 'price':15000},
    {'id':2, 'name':'samsung Laptop', 'price':65000},
    {'id':3, 'name':'Iphone phone', 'price':2000000},
    {'id':4, 'name':'Dell Inspiron Laptop', 'price':85000},
    {'id':5, 'name':'xaomi Tab', 'price':30000}
]

console.log(matchProducts(products, 'tab'))