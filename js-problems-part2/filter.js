const ages = [32, 20, 16, 40];

const result = ages.filter(checkAdult);

function checkAdult(age){
    return age >= 18;
}

console.log(result);