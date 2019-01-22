"use strict";

const celsius = 38;
const fahrenheit = 100;


const fconvert = (celsius) => {return (9/5)*celsius+32}
const cconvert = (fahrenheit) => {return (fahrenheit-32)/1.8}
//Ajay banstola
console.log("The fahrenheit value of " + celsius+ " is " + fconvert(celsius));
console.log("The celsius  value of " + fahrenheit+ " is " + cconvert(fahrenheit));


