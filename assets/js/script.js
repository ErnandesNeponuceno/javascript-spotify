const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `https://json-server-nine-xi.vercel.app/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})

function renderPlaylistCards(playlists) {
    const offerListContainer = document.querySelector(".offer__list-item");

    playlists.forEach((playlist) => {
        const card = document.createElement("div");
        card.classList.add("cards");

        card.innerHTML = `
            <div class="cards ${playlist.class}">
                <img src="${playlist.image}" alt="${playlist.name}" />
                <span>${playlist.name}</span>
            </div>
        `;

        offerListContainer.appendChild(card);
    });

}

const playlists = [
    { name: "Boas festas", image: "./assets/img/playlist/1.jpeg", class: "card1", alt: "Boas festas" },
    { name: "Feitos para você", image: "./assets/img/playlist/2.png", class: "card2", alt: "Feitos para você" },
    { name: "Lançamentos", image: "./assets/img/playlist/3.jpeg", class: "card3", alt: "Lançamentos" },
    { name: "Creators", image: "./assets/img/playlist/4.jpeg", class: "card4", alt: "Creators" },
    { name: "Para treinar", image: "./assets/img/playlist/5.jpeg", class: "card5", alt: "Para treinar" },
    { name: "Podcasts", image: "./assets/img/playlist/6.jpeg", class: "card6", alt: "Podcasts" },
    { name: "Sertanejo", image: "./assets/img/playlist/7.jpeg", class: "card7", alt: "Sertanejo" },
    { name: "Samba e pagode", image: "./assets/img/playlist/8.jpeg", class: "card8", alt: "Samba e pagode" },
    { name: "Funk", image: "./assets/img/playlist/9.jpeg", class: "card9", alt: "Funk" },
    { name: "MPB", image: "./assets/img/playlist/10.jpeg", class: "card10", alt: "MPB" },
    { name: "Rock", image: "./assets/img/playlist/11.jpeg", class: "card11", alt: "Rock" },
    { name: "Hip Hop", image: "./assets/img/playlist/12.jpeg", class: "card12", alt: "Hip Hop" },
    { name: "Indie", image: "./assets/img/playlist/13.jpeg", class: "card13", alt: "Indie" },
    { name: "Relax", image: "./assets/img/playlist/14.jpeg", class: "card14", alt: "Relax" },
    { name: "Música Latina", image: "./assets/img/playlist/15.jpeg", class: "card15", alt: "Música Latina" }
];
    
renderPlaylistCards(playlists);

