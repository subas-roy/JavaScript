/**
 * Looping Techniqque
 * 1. for loop
 * 2. while loop
 * 3. do while loop --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
 */

const friends = ['Elon', 'Mark', 'Bill', 'Waren'];

for(const friend of friends){
    // console.log(friend)
}

for(let i = 0; i < friends.length; i++){
    // console.log(i)
    // console.log(friends[i])
}

let numbers = [22,56,98,444,10,90,500,70,30,56]
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i])
}

let i = 0;
while(i < friends.length){
    console.log(friends[i])
    i++;
}