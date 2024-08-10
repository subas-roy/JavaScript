const products = [
  {id:1, name:'lenovo', price:65000},
  {id:2, name:'dell', price:45000},
  {id:3, name:'hp', price:40000},
  {id:4, name:'mac', price:15000}
]



// class
class Product{
  constructor(brand, price){
    this.brand = brand;
    this.price = price;
  }
  specificatioin(){
    console.log('8GB RAM, 128GB Memory')
  }
}

const lenovo = new Product('lenovo', 65000);
console.log(lenovo)