const nemo = ['nemo'];

const everyone = ["Saab", "Volvo", "BMW", "Banana", "Orange", "Apple", "Mango", "Toyota", "Volvo", "Audi", 100, 500, 300, 200, 400,"nemo" ];

const large = new Array(10000).fill('nemo');

function findNemo(array){
    let t0 = performance.now();
    for(let i = 0; i< array.length; i++){

        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log('Call to find nemo took : '+ (t1-t0));
}

findNemo(large); //O(n) --> Linear Time (It takes linear time to find nemo) Complexity is Fair enough

/*This example is to understand that this is the instruction we are giving to our computer, to find the nemo. Its called the runtime. How long does it take to run a certain problem through a function or a ceratin task. How can we measure the Big O of something like this.  or the efficiency of this code. Next we shall try to measure the performance. And see how Big O allows us to measure scalability */

/*Calculating the number of operations a computer has to perform. Because each operation takes time to perform. from one element to 10 elements with thousands of inputs how does the efficiency of this function increases.*/

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
