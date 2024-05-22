//Classes
class carro {
    constructor(nome,ano,horas,dia,mes){
        this.nome=nome;
        this.ano=ano;
        this.horas=horas;
        this.dia=dia;
        this.mes=mes;
    }
}

//Intaciando objetos a classe
let meuCarro1= new carro('Ford',2014,12,7,11);
let meuCarro2= new carro('Audi',2019,11,3,5);

//Imprmindo valores
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);

console.clear();
class NovoCarro{
    constructor(nome,ano) {
        this.nome = nome;
        this.ano = ano;
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