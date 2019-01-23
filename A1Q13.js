"use strict";


function magic(num){
    let test =  num;
    let sum = 0;
    while (test >=1){
        let test4 = test % 10;
        sum = sum + test4;
        test = Math.floor(test/10);
       
       
    }
    let test2= sum;
    let rev = 0;
    while (test2 >=1){
        let test3 = test2 % 10;
        rev = rev*10+ test3;
        test2 = Math.floor(test2 /10);
       
    }
    let prod = rev*sum;
    if (num === prod){
        console.log("It is magic number");
    }
    else{
        console.log("not a magic number");
    }
}

let num = 1729;
magic(num);
