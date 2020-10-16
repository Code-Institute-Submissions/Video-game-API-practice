$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getGames(searchText);
        e.preventDefault();
    });
});

function getGames(searchText) {

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(JSON.parse(xhr.response));
            let games = JSON.parse(xhr.response);
            let output = '';
            $.each(games, (id, game) => {
                output += `
                <div class="col-md-3>"
                    <div class="well text-center">
                        <img src="${game.background_image}">
                        <h5>${game.name}</h5>
                        <a onclick="gameSelected('${game.metacritic_url})" class="btn btn-primary" href="#">Game Details</a>
                    </div>
                </div>
                `;
            })
            
            $('games').html(output);
        }
    });

    xhr.open("GET", "https://rapidapi.p.rapidapi.com/games?" + searchText);
    xhr.setRequestHeader("x-rapidapi-host", "rawg-video-games-database.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84");

    xhr.send(data);
}
