const nemo = ['nemo'];

const everyone = ["Saab", "Volvo", "BMW", "Banana", "Orange", "Apple", "Mango", "Toyota", "Volvo", "Audi", 100, 500, 300, 200, 400,"nemo" ];

const large = new Array(10000).fill('nemo');

// Big O Rule 1
function findNemo(array){
    //let t0 = performance.now();
    for(let i = 0; i< array.length; i++){ //O(n)
        console.log('running');
        if(array[i] === 'nemo'){ //O(n or less than n)
            console.log('Found Nemo!');
            break;
        }
    }
    //let t1 = performance.now();
    //console.log('Call to find nemo took : '+ (t1-t0));
}

findNemo(large); //O(n) --> Linear Time (It takes linear time to find nemo) Complexity is Fair enough

/*This example is to understand that this is the instruction we are giving to our computer, to find 
the nemo. Its called the runtime. How long does it take to run a certain problem through a function
 or a ceratin task. How can we measure the Big O of something like this.  or the efficiency of this code.
  Next we shall try to measure the performance. And see how Big O allows us to measure scalability */

/*Calculating the number of operations a computer has to perform. Because each operation takes time to
 perform. from one element to 10 elements with thousands of inputs how does the efficiency of this 
 function increases.*/

let boxes = ['box1', 'box2'];
function compressFirstBox(boxes){
    console.log(boxes[0]); //O1
    console.log(boxes[1]); //O1
}

compressFirstBox(boxes); //O1 constant time
/* This function is running O2 operations */
/*This is called O(1) no matter how many boxes we have the function is taking the first item in the array*/

function funChallange(input){
    let a = 10; //O(1)
    a = 50 +3; //O(1)

    for(let i =0; i< input.length; i++){  //O(n)
        anotherFunction(); //O(n)
        let starnager = true; //O(n)
        a++; //O(n)
    }
    return a; //O(1)
}

// 3 O(1) + 4 O(n) => Big O(3 + 4n)

//Big O Calculation

function anotherFunChallange(input){
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for(let i = 0; i < input; i++){
        let x = i +1; //O(n)
        let y = i +2; //O(n)
        let z = i +3; //O(n)
    }
    for(let j = 0; j < input; j++){
        let p = j *2; //O(n)
        let q = j * 2; //O(n)
    }
    let whoAnI = "I dont know"; //O(1)
}

// Big O(4 + 5n)

//Big O Rule 2

function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0]); //O(1)

    var middleIndex = Math.floor(items.length/2); //O(1)
    var index = 0;

    while(index < middleIndex){ //O(n/2)
        console.log(items[index]); //O(1)
        index++; //O(1)
    }
    for(var i = 0; i < 100; i++){
        console.log('hi'); //O(100)
    }
}

//O(n/2 + 100 + 4) => O(n/2 + 104)
// Rule 2 says drop the constants O(n)

function compressBoxesTwice(boxes){
    boxes.forEach(function(box){
        console.log(box); //O(n)
    });
    boxes.forEach(function(box){
        console.log(box); //O(n)
    });
}

//O(2n) => O(n)

function compressBoxesTwice(boxes1, boxes2){
    boxes1.forEach(function(box){
        console.log(box); //O(a)
    });
    boxes2.forEach(function(box){
        console.log(box); //O(b)
    });
}
//Rule 3 : Different terms for input
//O(a+b)

//ANother common pattern with Big O is nested loops O(n^2)

//Log all apirs of array

const boxes2 = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j]);
        }
    }
}
logAllPairsOfArray(boxes2);

/* When we see loops that are nested we use multiplication
Big O(n *n) Quadratic Time
*/

//Big O Rule 4:
/*first part O(n) second part O(n^2)*/
const numbers = [1,2,3,4,5]
function printAllNumbersThenAllPAirSums(numbers){
    console.log('These are the numbers:');
    numbers.forEach(function(num){
        console.log(num);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(num1){
        numbers.forEach(function(num2){
            console.log(num1 + num2);
        });
    });
}
printAllNumbersThenAllPAirSums(numbers);
//5 (25 + 15 + 100 + 2.5)
/*O(x^2 + 3x + 100 + x/2) x^2 grows significantly more, wiht this in mind we drop the non dominants*/
/*With Big 0 we worry about scaling, in this case the pre-dominently scalable factor id n^2*/

/*Space Complexity*/

function boo(n){
    for(let i = 0; i < n; i++){
        console.log('boooo!');
    }
}
boo([1,2,3,4,5,6]);

function arrayOfHintTimes(n){
    let hiArray = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = 'Hi';
    }
    return hiArray;
}
arrayOfHintTimes(10); //O(n)