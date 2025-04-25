function reverse(str)   // function to get the reverse of a string
{
    let rev = "";
    for(let i=str.length-1;i>=0;i--)
    {
        rev+=str[i];
    }
    return rev;
}

let str1 = "racecar";  // entering first string
let str2 = "hello";    // entering second string

let rev1 = reverse(str1);   // getting reverse of str 1
let rev2 = reverse(str2);   // getting reverse of str 2

console.log(str1===rev1);  // checking 1st string for palindrome
console.log(str2===rev2);  // checking 2nd string for palindrome