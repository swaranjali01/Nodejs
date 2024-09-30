const notes = require('./notes.js');
var_ = require('lodash');//for using uniq to filter

console.log('server file is available');
var age = notes.age;
var result = notes.addNumber(age+18,10);
console.log(age);
console.log('result is now '+result);

var data = ["person",1,2,1,2,'name','age','2'];
var filter=_.uniq(data);
console.log(filter);


// function add(a,b){
//     return a+b;
// }

// var result =add(2,5);
// console.log(result);

// let fs =require('fs');
// let os =require('os');

// let user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi'+user.username + '!\n', ()=>(
//      console.log('file is created')));

//      console.log(fs);
     