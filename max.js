
const buisness = 450;
const minister = 350;
const army = 650;

// if(buisness > minister){
//     console.log('Buisness man is bigger');
// }
// else{
//     console.log('mininster is bigger');
// }

 if(buisness > minister && buisness > army){
    console.log('Buisness man is bigger');
}
else if(minister > buisness && minister > army){
    console.log('mininster is bigger');
}
else{
    console.log('army is bigger');
}

var max = Math.max(buisness, minister, army);
console.log('bigger is', max);

var min = Math.min(buisness, minister, army);
console.log('smallest is', min); 

function findLergest(first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if(second > first && second > third){
        return second;
    } 
    else{
        return third
    }
}
 
const lergest = findLergest(612, 342, 542);
console.log(lergest);

// Write a function to find the smallest of three numbers
function findSmallest(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    } 
    else{
        return third
    }
}
 
const smallest = findSmallest(12, 142, 542);
console.log(smallest);


function findSmall(first, second, third){
    const small = Math.min(first, second, third);
    return small;
}
 
const smaller = findSmall(89, 122, 542);
console.log(smaller);

function findBig(first, second, third){
    const small = Math.max(first, second, third);
    return small;
}
 
const bigger = findBig(89, 122, 542);
console.log(bigger);