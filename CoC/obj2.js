let user = {email : "vjjhajhria@gmail"}
 let fullname = {firstname : "Vishal",middlename : "Singh",lastname : "Jhajhria",nickname : "JAAT"}
        
// let details1 = Object.assign(user,fullname);
// console.log(details1);
// console.log(user);
let details2 = Object.assign({},user,fullname);
console.log(details2);
console.log(user);

let a = 1;
let b = 2;
let c = 3;
console.log(a);

setInterval(() => {
    console.log(b);
},110);
console.log(c);

