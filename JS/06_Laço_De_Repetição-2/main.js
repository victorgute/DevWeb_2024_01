const num = 'Óla';
const g = 11;

if(num%2==0&& !isNaN(num))
    console.log('Numero par');

else if(num%2!=0 &&!isNaN(num))
    console.log('Número par');

else console.log('Não é um número')

console.clear()
let resultado= 3>4?'Sim':'Não';
console.log(resultado)

console.clear()
const h=11;
const cor=h>11?'vermelho':'azul';
console.clear()
switch(cor){
    case'vermelha':console.log('A cor é vermelha');
    break;
    case'Azul':console.log('A cor é azul')
    break;
    default:console.log('A cor não é vermelha e nem azul')
}