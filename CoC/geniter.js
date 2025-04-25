function num(){
    let i = 1;    
    return function* count(){
        while(i<101){
            yield i;
            i++;
        }
    } 
}
    
const fun = num();
console.log(fun)
console.log(fun())
const start = fun();
console.log(start)
for (let ind = 1; ind < 101; ind++) {
    console.log(start.next().value)
    
}

