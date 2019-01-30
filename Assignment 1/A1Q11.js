"use strict";

function isfactorial(num){
    let test = num;
    let fact =0;
    while (test>=1){
        let test1 = test % 10;
        fact = fact + facto(test1);
        test = Math.floor(test/10);

    }
    if (fact===num){
        console.log("It is stong number");

    }
    else
    {console.log("NOt a strong number")};

}
function facto(test1){
    if (test1===1){return 1}
    else{return test1*facto(test1-1)}
}




isfactorial(145);