
var first = 5;
var second = 7;

console.log(first, second);

//fist approach 
var temp = first;
first = second;
second = temp;

console.log(first, second);

//second approach destructuring 

[first , second] = [second , first];

console.log(first, second);
