const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const musicList = document.querySelectorAll('.musica');
const searchResults = document.querySelector('.search-results');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    musicList.forEach(music => {
        const title = music.querySelector('h3').innerText.toLowerCase();
        const artist = music.querySelector('p').innerText.toLowerCase();

        if (title.includes(searchTerm) || artist.includes(searchTerm)) {
            searchResults.appendChild(music.cloneNode(true));
        }
    });

    if (searchResults.innerHTML === "") {
        searchResults.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
});
