
function oddAverage(numbers){
    let odds = [];
    for(const num of numbers){
        if(num % 2 != 0){
            odds.push(num);
        }
    }
    console.log(odds)
    
    let sum = 0;
    for(let num of odds){
        sum = sum + num;
    }
    
    let count = odds.length;
    let avg = sum / count;

    console.log(sum, count)
    return avg;
}

numbers = [31,49,50,97,65,70];

console.log(oddAverage(numbers))