
function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 3, 86, 45, 42, 26];
const oldest = largestElement(ages);
console.log('oldest', oldest);

//find the lowest element of an array
function smallestElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const num = [12, 3, 86, 45, 42, 26];
const smaller = smallestElement(num);
console.log('smallest', smaller);



