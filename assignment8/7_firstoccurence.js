// using binary search
function first(arr,target)
{
    let firstoccurence = -1;  
    let start =0;
    let end = arr.length-1;
    
    while(start<=end)
        {
            let mid = Math.floor(start+(end-start)/2);
            if(target<arr[mid])
                end = mid -1 ;
            else if(target>arr[mid])
                start = mid + 1;
            else
            {
                firstoccurence = mid;
                end = mid - 1 ;
            }
        }
        return firstoccurence;
    }
    
let arr = [1,2,2,2,3,4];
let target1 = 2;  // target present in the array   
let target2 = 5;  // target not present in the array

console.log(first(arr,target1));
console.log(first(arr,target2));