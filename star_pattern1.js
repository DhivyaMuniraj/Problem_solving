// 1.get an input 
 // 2.declare a function
 //declare a empty string variable
// 3.run two for loops one for rows and another for columns
// 4.just add the star inside the second loop in string variable
// 5.return the function

let input=5;
function star_pattern(inputs){
 let result_string="";
 for(let i=0;i<inputs;i++){
    for(let j=i;j<inputs;j++){
        result_string+="*";
    }
    result_string+="\n";
 }
 return result_string;
}
console.log(star_pattern(input));