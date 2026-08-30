// data type
// there are two type of data
// 1: primitive (its hold single value)
/*
-> number 
-> string
->boolean 
-> undefine
-> null
->symbole
*/

// 2: non primitive (its hold group of value)

// its all primitive data type
// number
/*let a= 10;
console.log(typeof a);
// string
let name = "saad";
console.log(typeof name);
// boolean
let isLogin = true;
console.log(typeof isLogin);
// undefine
let b;
console.log(b);
console.log(typeof undefined);
// null
let c = null;
console.log(c);
console.log(typeof null);
// symbol
let k = Symbol("hello");
let e = Symbol("hello");
console.log( typeof k);


console.log(k==e);
*/

// comparasion operators:
// >: grater  than
// <: less than
// >= : greater or equal
// <= : less than or equal
// != : not equal (don't check data type)
// !== : not equal (check data type)
// == :eqaulity
// === : equality and also check  datatype
/*
example

let a=20;
let b=20;
//equality
console.log(a==b);//true
console.log(a===b);//false    because  its also check datatype

logical operator

&& :: AND logical operator
|| :: OR ;ogical operator




table for AND operator

true true =true 
false true = false
false false = false
true false  = false
*/
// let email = "saad@gmail.com";
// let password = "saad123";
// let termcondition = "true";
// console.log(email === "saad@gamil.com" &&  password === saad123 && termcondition ==="true"); //agar aik bi false hoga to sub false hoga

// table for OR opoerator

// true true =true
// false true = true
// false false = false
// true false  = true

let email = "saad@gmail.com";
let password = "saad123";
let termcondition = true;
console.log(
  email === "saad@gamil.com" || password === "saad123" || termcondition == true,
); //agar aik bi true hoga to sub true hoga

console.log("hello");
