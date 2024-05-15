function addNums(num1=1,num2=1){
    return num1+num2;
}

//chamada a função addNums
let x = addNums(4,5);
console.log(x);

//chamada a função myfunc antes  de declaração da função
let z = myFunc(4,5);
console.log(z);

function myFunc(num1,num2){
    return num1*num2;
}

const hello = () =>{
    return 'ola arrow  Function';
;}

const addNums2 =(num1=1, num2=1) =>{
    return num1+num2;
}
console.clear();
const hello1 = () => {
return 'ola arroe fuction';
};

console.log(hello1);
console.log(hello());

console.clear();
const addNums3 = (num1=1,num2=2) =>{
    return num1+num2;
};

let soma = addNums2(5,10);
console.log(soma);
