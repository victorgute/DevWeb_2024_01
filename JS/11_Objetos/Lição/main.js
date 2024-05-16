//Classes
class carro {
    constructor(dia,mes,ano,hora){
        this.dia=dia;
        this.ano=ano;
        this.mes=mes;
        this.hora=hora;
    }
}

//Intaciando objetos a classe
let meuCarro1= new carro(7,11,2014,12);
let meuCarro2= new carro(10,12,2019,11);

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
let ano = dataHoje.getFullYear();

//console.log(dataHoje)

let meuNovoCarro = new NovoCarro('Ford',2014);

console.log(meuNovoCarro.idadeCarro(ano));