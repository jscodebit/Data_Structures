const nemo = ['nemo'];

function findNemo(array){
    for(let i = 0; i< nemo.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
        }
    }
}

findNemo(nemo);

/*This example is to understand that this is the instruction we are giving to our computer, to find the nemo. Its called the runtime. How long does it take to run a certain problem through a function or a ceratin task. How can we measure the Big O of something like this.  or the efficiency of this code. Next we shall try to measure the performance. And see how Big O allows us to measure scalability */