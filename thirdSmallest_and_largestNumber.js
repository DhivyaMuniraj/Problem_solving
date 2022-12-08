//get an input
//declare the function
//sort the array 
//return the third smallest and third largest number in an array

let arr=[2,1,4,3,6,5,7];
function find_numbers(arr){
    let temp;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
               temp=arr[i];
               arr[i]=arr[j];
               arr[j]=temp;
            }
        }
    }
    return`${arr[2]} ${arr[arr.length-3]}`
}
console.log(find_numbers(arr));

