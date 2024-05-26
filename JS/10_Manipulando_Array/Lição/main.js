
let funcionarios = [
    { nome: 'Wally', salario: 4800 },
    { nome: 'Ana', salario: 4500 },
    { nome: 'Pedro', salario: 4700 },
    { nome: 'Maria', salario: 5200 },
    { nome: 'João', salario: 4900 }
];


funcionarios.forEach(funcionario => {
    console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`);
});


funcionarios = funcionarios.map(funcionario => {
    return {
        nome: funcionario.nome,
        salario: funcionario.salario * 1.05
    };
});


let funcionariosAcima5000 = funcionarios.filter(funcionario => funcionario.salario > 5000);


let wally = funcionariosAcima5000.find(funcionario => funcionario.nome === 'Wally');

if (wally) {
    console.log("Você o encontrou");
} else {
    console.log("Wally não está entre os funcionários com salário acima de 5000");
}
