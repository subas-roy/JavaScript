const biryaniKhor = ['abul','babul','cabul','abul', 'kabul', 'babul']

console.log(biryaniKhor)

function noDuplicate(array){
    // console.log(array)
    const unique = [];
    for(item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

console.log(noDuplicate(biryaniKhor))