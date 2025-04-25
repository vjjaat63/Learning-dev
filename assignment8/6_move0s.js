// using two pointers approach
function arrange(arr)
{
    let start = 0;  // runs for only non - zero values
    let end = 0;    // runs from start to end

    while(end<arr.length)
    {
        if(arr[end]!==0)
        {
            arr[start]=arr[end];
            start++;
        }
        end++;
    } 

    // here our array get all the non zero values before start so now make all next values 0

        while(start<arr.length)
        {
            arr[start]=0;
            start++;
        }


        return arr;
}

let arr = [0,1,0,3,0,1,2];

let ans = arrange(arr);

console.log(ans);