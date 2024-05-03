function processarFrutas(Maça, Uva, Pera, Banana, Goiaba) {
    // Receber o nome de 5 frutas

    console.log(Maça, Uva, Pera, Banana, Goiaba)

    // Retornar a quantidade de letras (length)
    const len1 = Maça.length;
    const len2 = Uva.length;
    const len3 = Pera.length;
    const len4 = Banana.length;
    const len5 = Goiaba.length;

    // Mostrar os 3 primeiros caracteres (substring)
    const sub1 = Maça.substring(0, 3);
    const sub2 = Uva.substring(0, 3);
    const sub3 = Pera.substring(0, 3);
    const sub4 = Banana.substring(0, 3);
    const sub5 = Goiaba.substring(0, 3);

    // Limpar caracter em branco do início (trim)
    const fruta1Trim = Maça.trim();

    // Após receber as strings sobrepor o conteúdo (replace) em caixa baixa (toLowerCase)
    const fruta1Lower = Maça.toLowerCase();
    const fruta2Lower = Uva.toLowerCase();
    const fruta3Lower = Pera.toLowerCase();
    const fruta4Lower = Banana.toLowerCase();
    const fruta5Lower = Goiaba.toLowerCase();

    // Exibir a listagem de frutas recebidas em Template String
    const listaFrutas = `${fruta1Lower}, ${fruta2Lower}, ${fruta3Lower}, ${fruta4Lower}, ${fruta5Lower}`;

    return {
        quantidadeLetras: [len1, len2, len3, len4, len5],
        tresPrimeiros: [sub1, sub2, sub3, sub4, sub5],
        frutaSemEspaco: fruta1Trim,
        frutasLowerCase: listaFrutas
    };
}

// Exemplo de uso:
const resultado = processarFrutas(" Maçã", "Banana", "Morango", "Pera", " Laranja ");
console.log("Quantidade de letras:", resultado.quantidadeLetras);
console.log("Três primeiros caracteres:", resultado.tresPrimeiros);
console.log("Fruta sem espaço em branco:", resultado.frutaSemEspaco);
console.log("Listagem de frutas em caixa baixa:", resultado.frutasLowerCase);
