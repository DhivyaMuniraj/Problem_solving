
function matrixRotate(input){
let result_arr= []

for (let i=0;i<input.length;i++){
    let sub_array = []
    for(let j=input.length-1;j>=0;j--){
        sub_array.push(input[j][i])    
    }
    result_arr.push(sub_array)
}
return(result_arr)
}


console.log(matrixRotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))