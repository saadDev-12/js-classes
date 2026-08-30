/*
condition statment
if
else 
else if
*/

// let age = Number(prompt("enter your age",19));
// if(age == 18){
//     Document.write("you are eligble");
// } 
// else{
//     document.write("you are not eligble");
// }
// let age = Number(prompt("enter your age" , 18 ));
// let gender = prompt("enter your gender","male");
// if(age >= 18 && gender == "male"){
//     document.write("you can vote");
// }
// else if( age>=18 && gender == "female"){
//     document.write("you can vote");
// }
// else{
//     document.write("please enter correct data");
// }


let roll = prompt("enter roll" , "user");
let email =  prompt("enter your email" ,"abc@gmail.com");
let password = prompt("eter your password" , 123);

if(email === "abc@gmail.com" && password == 123 ){
    if(roll == "admin"){
        document.write("you can post");
    }else{
        document.write("you con't post");
    }
}else{
    document.write("invalide credietial");
}


/*ternary operator
condition ?"fulldilled" :"failed"

switch statment
syntax
switch(condition)
case1:log
case2:log
.
.
default :message

*/