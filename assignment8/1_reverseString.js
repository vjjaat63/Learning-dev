function reverse(str)
{
    let rev = "";
    for(let i=str.length-1;i>=0;i--)
    {
        rev+=str[i];
    }
    return rev;
}
let str = "Hello World!"
let rev = reverse(str);
console.log(rev);