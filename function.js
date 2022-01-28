      
    let num=[];
    for (let i = 0; i<=100; i++){
        num.push(i);

function NumFilter(num) {
    for (let i = 0; i<=num; i++){
    if (num % 5 == 0) {  
      return num;
    }
  }
}
}
console.log("The numbers below or equal to 100 that are divisible by 5 are " + num.filter(NumFilter)); 

let values=num.filter(NumFilter)
function Add(num1,num2){
    return num1 + num2;
}
console.log("The sum of numbers below or equal to 100 that are divisible by 5 is " +values.reduce(Add));
    