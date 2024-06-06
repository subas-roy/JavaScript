
function getMax(numbers){
    let max = numbers[0];
    for(num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const heights = [68,60,70,65,66,67,69,78,72]

console.log(getMax(heights))


// homework min / vartically privileged