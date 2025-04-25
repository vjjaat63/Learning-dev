function primeornot(num)   
{
    if(num<=1)
        return false;
    for(let i = 2;i<=num/2;i++)
    {
        if(num%i===0)
            return false;
    }
    return true;
}

let num1 = 21;
let num2 = 23;

console.log(primeornot(num1));  // printing the result for 21
console.log(primeornot(num2));  // printing the result for 23