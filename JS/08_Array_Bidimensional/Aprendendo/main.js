let matrix1=[
    [1,2,3],
    [4,5,6],
]

console.log('antes');
console.log(matrix1);

//alternar um valor do Array
console.clear();
matrix1[0][2]=-10;
console.log('depois');
console.log(matrix1);


console.clear();
let teste1=[0,1,2,3,4,5];
let teste2=teste1.join('***');

console.log(teste2);
console.log(typeof teste2);

console.clear();
let Array = [0,1,2,3,4];
console.log(Array,length);


console.clear();
let frutas1=['Banana','Lanranja','Maça','Manga'];
let x=frutas1.pop();
console.log(frutas1);
console.log(x);

console.clear();
const fruta2=['Banana','Maça','Laranja','Manga'];
let y=fruta2.push('Kiwi');
console.log(fruta2);
console.log(y);

console.clear();
const fruta3=['Banana',"Laranja"];
let p = fruta3.shift('Banana');
console.log(p);

console.clear();
const fruta4=['Banana',"Laranja"];
let w = fruta4.unshift('kiwi');
console.log(w);

console.clear();
const fruta5 = ['Banana','Laranja','Maça','Manga'];
delete fruta5[2];
console.log(fruta5);

