document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetch-button");
    const catTableBody = document.querySelector("#cat-table tbody");

    function fetchCatImages() {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10")
            .then(response => response.json())
            .then(data => {
                catTableBody.innerHTML = '';
                const catImages = data.map(cat => {
                    const tr = document.createElement("tr");
                    
                    const idTd = document.createElement("td");
                    idTd.textContent = cat.id;

                    const imgTd = document.createElement("td");
                    const imgElement = document.createElement("img");
                    imgElement.src = cat.url;
                    imgElement.alt = "Random Cat";

                    imgTd.appendChild(imgElement);
                    tr.appendChild(idTd);
                    tr.appendChild(imgTd);
                    return tr;
                });

                catImages.forEach(tr => catTableBody.appendChild(tr));
            })
            .catch(error => console.error("Error fetching cat images:", error));
    }

    fetchButton.addEventListener("click", fetchCatImages);
});
