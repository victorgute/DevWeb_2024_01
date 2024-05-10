// Array de objetos alunos
const alunos = [
    {
        nome: "Victor",
        notas: [8, 8, 8],
        endereco: 'São Paulo'
    },
    {
        nome: "Brunna",
        notas: [10, 10, 10],
        endereco: 'Rio de Janeiro'
    },
    {
        nome: "Cristian",
        notas: [6, 5, 4],
        endereco: 'Minas Gerais'
    }
];

function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

function verificarStatus(media) {
    return media >= 7 ? "aprovado(a)" : "reprovado(a)";
}

alunos.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    const status = verificarStatus(media);
    console.log(`Aluno(a) ${aluno.nome} com notas ${aluno.notas.join(', ')} mora em ${aluno.endereco}, e teve a média ${media}, portanto foi ${status}.`);
});
