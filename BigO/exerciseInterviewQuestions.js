/*Give 2 arrays, create a function that let's a user know (true/false) wheather these two arrays contains any common items
For example: 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
should return false.
---------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
should return true.
*/
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

function containsArrayElements(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                break;
                console.log(arr1[i] === arr2[j]);
                return true;
            } else {
                return false;
            }
        }
    }
}

//O(a*b) => O(n^2) is there any chance to turn Time complexity a times b
/*In order to speed things up you may use somethign called hash Tables in 
javascript it's called objects, and avoid nested for loops.
Space COmplexity here is O(1) because we are not creating any new variables, 
we are using the existing arrays so for the function space complexity is O(1)*/

//console.log(containsArrayElements(array1, array2));

function containsArrayElements2(arr1, arr2){
    /*loop through first array and create object
    where properties === items in the array*/

    /*
    1. Can  we assume always two parameters in the function?
    Here since we are creating a new object, we can say it takes O(a) for 
    Space complexity*/
    let map = {};
    for(let i = 0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const temp = arr1[i];
            map[temp] = true;
        }
    }
    //console.log(map);
    /*loop through second array and check if item
    in second array exists on created obejct.*/
    for(let i = 0; i < arr1.length; i++){
        if(map[arr2[i]])
            return true;
        else 
            return false;
    }
}
//O(a+b) whenthe array size increases substancially we can say this time complexity is better than O(a*b)
//console.log(containsArrayElements2(array1, array2));

function containsArrayElements3(arr1, arr2){
    return arr1.some(item => arr2.includes(item));
}
console.log(containsArrayElements3(array1, array2));