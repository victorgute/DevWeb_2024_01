const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const searchContainer = document.getElementById('search');

searchIcon.addEventListener('click', function() {
    if (searchInput.style.width === '0px') {
        searchInput.style.width = '150px'; // Largura expandida
        searchInput.focus(); // Foca no campo de pesquisa
    } else {
        searchInput.style.width = '0'; // Esconde o campo de pesquisa
    }
});
