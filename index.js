// Code your solutions in this file
const names = [];
const eventName = "";

function writeCards(names, eventName) {
    const newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    };
    console.log(newArr);
    return newArr;

}

writeCards(names, eventName);

function countDown(n) {
    while (n > 0) {
       console.log(n);
       n -= 1;
    };
    console.log(n);
}





