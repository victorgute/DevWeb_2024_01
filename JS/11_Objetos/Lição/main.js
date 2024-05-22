class tempo {
   constructor(dia,mes,ano,hora){
        this.dia=dia;
        this.ano=ano;
        this.mes=mes;
        this.hora=hora;
    }
}

//Intaciando objetos a classe
let meuCarro1= new tempo(7,11,2014,12);
let meuCarro2= new tempo(10,12,2019,11);

//Imprmindo valores
console.log(meuCarro1.dia);
console.log(meuCarro1.ano);
console.log(meuCarro1.mes);
console.log(meuCarro1.hora);

console.log(meuCarro1.dia);
console.log(meuCarro1.ano);
console.log(meuCarro1.mes);
console.log(meuCarro1.hora);

console.clear();
class NovoCarro{
    constructor(dia,mes,ano,hora) {
        this.dia=dia;
        this.ano=ano;
        this.mes=mes;
        this.hora=hora;
    }
    idadeCarro(ano){
        return ano - this.ano;
    }
}
//Buscando o ano atual automaticamente
let dataHoje = new Date();
let ano1 = dataHoje.getFullYear();

//console.log(dataHoje)

let meuNovoCarro = new NovoCarro('Ford',2014);


console.clear();
let  datatoday = new Date()
let dia = datatoday.getUTCDate()
let mês = datatoday.getMonth()
let ano = datatoday.getFullYear()
let hora = datatoday.getHours()

console.log(datatoday)
console.log(hora)
console.log(dia)
console.log(mês)
console.log(ano)

