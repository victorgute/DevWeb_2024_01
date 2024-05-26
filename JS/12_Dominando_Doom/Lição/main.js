document.title = 2024;

window.onload = function() {

    window.alert("Bem-vindo à minha página!");

    document.title = "Esse é o título";


    var section = document.createElement("section");
    var article = document.createElement("article");

    var sectionTitle = document.createElement("h1");
    sectionTitle.textContent = "Título em H1";
    var sectionParagraph = document.createElement("p");
    sectionParagraph.textContent = "Este é o elemento P";
    section.appendChild(sectionTitle);
    section.appendChild(sectionParagraph);

    var articleTitle = document.createElement("h1");
    articleTitle.textContent = "Título dentro do artigo";
    var articleParagraph = document.createElement("p");
    articleParagraph.textContent = "Este é o elemento P dedntro do artigo";
    article.appendChild(articleTitle);
    article.appendChild(articleParagraph);

    document.body.appendChild(section);
    document.body.appendChild(article);
};
