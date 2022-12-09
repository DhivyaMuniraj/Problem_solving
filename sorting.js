/*
* Get an input
* Create a function with array as parameter
* create a temporary variable
* run the first  i loop from 0 to till array length
* run the second j loop from i+1 to till array length
* check the condition if first element is greater than second
* if yes just swap and check with all element
* after the second loop got over then increment the first loop
* return the array
*/
let input=[0,2,1,0]
function sorting(input_array){
    let temp;
    for(let i=0;i<input_array.length;i++){
        for(let j=i+1;j<input_array.length;j++){
            if(input_array[i]>input_array[j]){
               temp=input_array[i];
               input_array[i]=input_array[j];
               input_array[j]=temp;
            }
        }
    }
    return input_array;
}
console.log(sorting(input))
     