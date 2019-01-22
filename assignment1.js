"use strict"

const birth_year = 1997;
const future_year = 2030;

function cal(birth_year, future_year){
    let age1 = future_year-birth_year;
    let age2 = future_year-birth_year+1;
    console.log("You will be "+age1+" or "+ age2+" years old");

}

//Using arrow function
const cal1 = (birth_year,future_year) => {
    let age1 = future_year-birth_year;
    let age2 = future_year-birth_year+1;
    console.log("You will be "+ age1+"" + " or " +age2+" years old");
}

cal(birth_year,future_year);
cal1(birth_year,future_year);

