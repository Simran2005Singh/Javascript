"use strict";
let accnum=null;
console.log(typeof accnum);
let name=null;
console.log(typeof name);
let isloggedin=true;
console.log(typeof isloggedin);
console.log(typeof null);

let number = Number(name);
console.log(number);
console.log(typeof number);
let num =5
let negvalue=-num;
console.log(negvalue);
console.log("1"+2);
console.log("1"+"2");
console.log(1+2+"2");

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true 
//here comparision operator works differently for null and undefined. 
// comparision operator converts null to 0 and undefined to NaN.
//  so null is greater than or equal to 0 but undefined is not greater than or equal to 0. 
// and null is not equal to 0 and undefined is not equal to 0. so the output is false, false, true. 

//undefined m dono comparision operator false aayega.
//=== datatype check karta hai aur null aur undefined alag alag data type hai.


