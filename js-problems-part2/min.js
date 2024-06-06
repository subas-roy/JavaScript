
const prices = [20000,30000,50000,100000,12000]

function getMin(prices){
    let min = prices[0];
    for(num of prices){
        if(min > num){
            min = num;
        }
    }
    return min;
}

m = getMin(prices)
console.log(m)