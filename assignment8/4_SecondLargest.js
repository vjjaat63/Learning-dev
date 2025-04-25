let arr = [12,45,22,68,39];

function secmax(arr)
{
    let max = -Infinity;     // initializing max value to - Infinity
    let max2 = -Infinity;    // initializing second max value to - Infinity

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max2 = max;
            max = arr[i];
        }
        else if (arr[i] > max2 && arr[i] < max) 
        {
            max2 = arr[i];
        }
    }
    return max2;
}

console.log(secmax(arr));