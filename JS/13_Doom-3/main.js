window.onload = function() {
    var changeColorButton = document.getElementById("changeColorButton");
    changeColorButton.onclick = function() {
        var firstParagraph = document.querySelector("#section1 p");
        firstParagraph.style.backgroundColor = "lightblue";
    };
    var markParagraphsButton = document.getElementById("markParagraphsButton");
    markParagraphsButton.onclick = function() {
        var paragraphs = document.querySelectorAll("#section2 p");
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.toggle("highlight");
        });
    };
};
