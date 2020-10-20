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
            document.getElementById("gamediv").innerHTML = output;
        });
    })

        .catch((err) => {
            console.log(err);
        });
}

// saves the session id to carry over to the game.html page opens the page when you click the game details button

function gameSelected(id) {
    sessionStorage.setItem('gameID', id);
    window.location = 'game.html';
    return false;
}

// transfers the object of the selected game to the game.html page and displays the data onto the page

function getGame() {
    let gameID = sessionStorage.getItem('gameID');
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games/" + gameID,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        let selectedGame = response;
        let gameDevs = selectedGame.developers;
        console.log(gameDevs);
        let devNameArray = [];
        gameDevs.forEach(function (devs) {
           
            let devNames = devs.name;
            console.log(devNames);
            devNameArray.push(devNames);
            console.log(`ARRAY: ${devNameArray}`);
        });

        let output = `
            <div class="col-lg-4 col-md-6 no-padding">
                <div class="text-center">
                    <img class="thumbnails" src="${selectedGame.background_image}">
                    <h5>${selectedGame.name}</h5>
                    <div>Description - ${selectedGame.description}</div>
                    <div>Developers - <p>${devNameArray}</p></div>
                    <p>Released - ${selectedGame.released}</p>
                    <p>Metacritic score - ${selectedGame.metacritic}</p>
                    <p>ratings - ${selectedGame.ratings}</p>
                    <a href="${selectedGame.website}" target=_blank>Official Website</a><br>
                    <a onclick="gameSelected('${selectedGame.website}')" class="btn btn-success href="#">Screenshots</a>
                </div>
            </div>`
        document.getElementById("selected-div").innerHTML = output;




    })
        .catch((err) => {
            console.log(err);
        });
}

