
const numbers = [44, 53, 32, 56, 41, 19, 90, 65];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    sum = sum + element;
}
console.log(sum);

function arrayTotal(number){
    let doSum = 0;
    for (i = 0; i < number.length; i++) {
        const elements = number[i];
        doSum = doSum + elements;
    }
    return doSum
}

const total = arrayTotal([10, 10, 10]);
console.log('array total', total);