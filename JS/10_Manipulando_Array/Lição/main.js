// 1. Criar um array de objetos com 5 funcionários
let funcionarios = [
    { nome: 'Wally', salario: 4800 },
    { nome: 'Ana', salario: 4500 },
    { nome: 'Pedro', salario: 4700 },
    { nome: 'Maria', salario: 5200 },
    { nome: 'João', salario: 4900 }
];

// 2. Listar no console o nome de todos os funcionários e seus respectivos salários
funcionarios.forEach(funcionario => {
    console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`);
});

// 3. Aplicar um reajuste de 5% de dissídio a todos os funcionários
funcionarios = funcionarios.map(funcionario => {
    return {
        nome: funcionario.nome,
        salario: funcionario.salario * 1.05
    };
});

// 4. Filtrar todos os funcionários que atualmente recebem mais de 5000
let funcionariosAcima5000 = funcionarios.filter(funcionario => funcionario.salario > 5000);

// 5. Pesquisar dentro do array remanescente o funcionário Wally e mostrar no console a mensagem "Você o encontrou"
let wally = funcionariosAcima5000.find(funcionario => funcionario.nome === 'Wally');

if (wally) {
    console.log("Você o encontrou");
} else {
    console.log("Wally não está entre os funcionários com salário acima de 5000");
}
