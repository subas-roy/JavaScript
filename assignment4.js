function calculateMoney(ticketSale) {
    let ticketTotal = ticketSale * 120
    let gateMan = 500
    let staffLunch = 8 * 50
    let totalMoney = 0
    if(ticketSale >= 0){
        totalMoney = ticketTotal - (gateMan + staffLunch)
    }
    else if(ticketSale < 0){
        console.log('Invalid Number')
    }
    return totalMoney
}
// console.log(calculateMoney(10))


function checkName(name) {
    const letters = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w']
    const lastChar = name.slice(-1)
    if(letters.includes(lastChar.toLowerCase())) {
        return 'Good Name'
    }
    else {
        return 'Bad Name'
    }
}
// console.log(checkName("Jafor"))


function deleteInvalids(array) {
    if(Array.isArray(array)){
        let numbers = []
        for(num of array) {
            if(typeof num === 'number' & isNaN(num) === false)
            numbers.push(num)
        }
        return numbers;
    }
    else{
        return 'Invalid Array'
    }
}
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))


function password(obj) {
    if(obj.birthYear.toString().length !== 4){
        return 'invalid'
    }
    let pass = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear
    return pass;
}
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }))


function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) === false){
        return 'invalid input'
    }
    let savings = 0
    for(payment of arr) {
       if(payment >= 3000) {
        savings += (payment - payment * 0.2)
       }
       else {
        savings += payment
       }
    }
    let monthly = savings - livingCost
    if(monthly < 0) {
        return 'earn more'
    }
    else {
        return monthly
    }
}
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]))