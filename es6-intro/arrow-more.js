// single or one parameter
const getAge = (person) => person.age;
const student = {name:'ananta', age: 45}
const age = getAge(student);
console.log(age)


const getThird = (numbers) => numbers[2];
const third = getThird([1,2,3,4,5,6]);
console.log(third)


// no parameter
const getPI = () => Math.PI;
const pi = getPI();
console.log(pi);

