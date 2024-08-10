class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sleep(){
    console.log(`sleeping now ${this.name}`)
  }
}

const kodom = new Person('Kodom Ali', 30)
console.log(kodom.age)
kodom.sleep()