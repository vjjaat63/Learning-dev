// using binary search
function first(arr,target)   // function for getting the first occurrence of target
{
    let firstoccurence = 0;
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
                end = mid - 1 ;   // searching leftside for first occurrence
            }
        }
        return firstoccurence;   // return the index of first occurrence of target
    }
    
    function last(arr,target)   // function for getting the last occurrence of target
    {
        let lastoccurence = 0;
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
                    lastoccurence = mid;
                    start = mid + 1 ;  // searching right side for last occurence
                }
            }
            return lastoccurence;    // returns the index of last occurence of the target
        }
        
let arr = [5,7,7,8,8,10];
let target = 8;

let firstoccurence = first(arr,target);
let lastoccurence = last(arr,target);
        
console.log(lastoccurence - firstoccurence +1);  // gives the total occurence