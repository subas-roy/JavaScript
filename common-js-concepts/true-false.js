/**
Truthy
1. true
2. any number(+ve, -ve) will be true other than 0
3. any string other than other than empty string
4. '0', 'false'
5. {} (empty object)
6. []
7. 

Falsy
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
6. 

**/


const x = false;
if(x){
  console.log('value of x is truthy');
}
console.log('value of x is falsy');


// check falsy
const y = null;
if(!y){
  console.log('value is falsy')
}

// check truthy
const t = 10;
if(!!t){
  console.log('value is truthy')
}