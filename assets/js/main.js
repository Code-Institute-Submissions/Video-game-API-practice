// Runs the getGames function when you click the submit button on the search bar taking in searchText as a parameter

$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getGames(searchText);
        e.preventDefault();
    });
});

// Retrieves a list of games from the API based on the search text entered and submitted in the search Bar 
// and post them on the index page. Searches for strings.

function getGames(searchText) {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?search=" + searchText,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let games = response;
        let gamesResults = games.results;
        
        let output = '';
        $.each(gamesResults, (key, game) => {
            console.log(key, game);
            output += `
            <div class="col-lg-4 col-md-6 no-padding">
                <div class="text-center">
                    <img class="thumbnails" src="${game.background_image}">
                    <h5>${game.name}</h5>
                    <p>Metacritic score - ${game.metacritic}</p>
                    <a onclick="gameSelected('${game.id}')" class="btn btn-success href="#">Game Details</a>
                </div>
            </div>`
            
        });
        document.getElementById("gamediv").innerHTML = output;


    })

    .catch((err)  => {
        console.log(err);
    });
}

