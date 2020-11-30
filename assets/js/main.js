// global variables
var searchText = '';
var count = '';
var page = sessionStorage.getItem('page');
var pageLimit = '';


// Runs the getGames function when you click the submit button on the search bar taking in searchText as a parameter

$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        console.clear();
        searchText = $('#searchText').val();
        sessionStorage.setItem('searchText', searchText);
        getGames(searchText);
        e.preventDefault();
    });
});


// Retrieves a list of games from the API based on the search text entered and submitted in the search Bar 
// and post them on the index page. Searches for strings.

function getGames(searchText) {

    page = 1;

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?page=" + page + "&search=" + searchText,
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
        let errorMessage = `<p>Sorry, No results exist for your chosen search</p>`;
        count = games.count
        pageLimit = Math.ceil(count/=20);

        if (gamesResults.length == 0) {
            console.log("fucked");
            document.getElementById("gamediv").innerHTML = errorMessage;
        }


    // output for gamediv

        let output = '';
        $.each(gamesResults, (key, game) => {
            output += `
            <div class="col-lg-4 col-md-6 no-padding">
                <div class="text-center">
                    <img class="thumbnails" src="${game.background_image}">
                    <h5>${game.name}</h5>
                    <p>Metacritic score - ${game.metacritic}</p>
                    <a onclick="gameSelected('${game.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("gamediv").innerHTML = output;
            

            if (game.background_image == null){

            };
        });
    })

        .catch((err) => {
            console.log(err);
        });


        // displays next and previous buttons and page number in a single line
        document.getElementById("next-prev").style.display = "inline-block";
        document.getElementById("page-number-top").style.display = "inline-block";
        document.getElementById("page-number-bottom").style.display = "inline-block";
        document.getElementById("next-prev2").style.display = "inline-block";

        // displays inital page number
        document.getElementById("page-number-top").innerHTML = `<p>${page}</p>`;
        document.getElementById("page-number-bottom").innerHTML = `<p>${page}</p>`;
}

 // code for the next and previous buttons
    $(".prev-btn").on("click", function(){
        if (page > 1) {
            page--;
            sessionStorage.setItem("page", page);
            changePage(page, sessionStorage.getItem(searchText));
            document.getElementById("page-number-top").innerHTML = `<p>${page}</p>`;
            document.getElementById("page-number-bottom").innerHTML = `<p>${page}</p>`;
        }
    });

    $(".next-btn").on("click", function(){
        if (page < pageLimit) {
            page++;
            sessionStorage.setItem("page", page);
            changePage(page, sessionStorage.getItem(searchText));
            document.getElementById("page-number-top").innerHTML = `<p>${page}</p>`;
            document.getElementById("page-number-bottom").innerHTML = `<p>${page}</p>`;
        }
    });

    // hides the image slider on index.html when a search is performed

    function sliderHide() {
            document.getElementById('sliderSection').style.display='none'             
         }


// function for changing pages

function changePage(page, searchText){

if ('page' in sessionStorage && 'searchText' in sessionStorage) {

    page = sessionStorage.getItem('page');
    searchText = sessionStorage.getItem('searchText');

const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?page=" + page + "&search=" + searchText,
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

        // output for changed page

        let output = '';
        $.each(gamesResults, (key, game) => {
            output += `
            <div class="col-lg-4 col-md-6 no-padding">
                <div class="text-center">
                    <img class="thumbnails" src="${game.background_image}">
                    <h5>${game.name}</h5>
                    <p>Metacritic score - ${game.metacritic}</p>
                    <a onclick="gameSelected('${game.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("gamediv").innerHTML = output;
        });
    })


        .catch((err) => {
            console.log(err);
        });
}
else {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?page=" + page + "&search=" + searchText,
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

        // output for changed page

        let output = '';
        $.each(gamesResults, (key, game) => {
            output += `
            <div class="col-lg-4 col-md-6 no-padding">
                <div class="text-center">
                    <img class="thumbnails" src="${game.background_image}">
                    <h5>${game.name}</h5>
                    <p>Metacritic score - ${game.metacritic}</p>
                    <a onclick="gameSelected('${game.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("gamediv").innerHTML = output;
        });
    })


        .catch((err) => {
            console.log(err);
        });
}

console.log("changepage " + page);

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

        // create game dev name array 

        let selectedGame = response;
        let gameDevs = selectedGame.developers;
        let devNameArray = [];
        gameDevs.forEach(function (devs) {

            let devNames = devs.name;
            devNameArray.push(devNames);
        });

        console.log(`ARRAY + ${devNameArray}`);


        // code for generating a all the rating based arrays
        let gameRatings = selectedGame.ratings;

        if (gameRatings.length >= 1) {

        // create ratings count array


        let ratingsObj = [];

        gameRatings.forEach(function (rate) {

            let ratingCount = rate.count;
            ratingsObj.push(ratingCount);
            ratingsArray = Object.values(ratingsObj);
            console.log(ratingsArray)
        });

        // create ratings title array

        let gameRatingsTitles = selectedGame.ratings;
        let rateTitleObj = [];

        gameRatingsTitles.forEach(function (rate2) {

            let ratingTitle = rate2.title;
            rateTitleObj.push(ratingTitle);
            rateTitleArray = Object.values(rateTitleObj);
        });

        console.log(`ARRAY + ${rateTitleArray}`);
        console.log(rateTitleArray);


        // add  chart
        var ctx = document.getElementById('chart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: rateTitleArray,
                datasets: [{
                    label: '# of Votes',
                    data: ratingsArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        }

        // hides the chart if sufficient rating data doesn't exist
        else {
            document.getElementById('chart').style.display='none';
        }

        // record game info to output variable

        let output = `
            <div class="no-padding game-width">
                <div class="text-center game-width">
                    <a onclick="backFunction()" class="back-btn btn btn-success detail-btn href="#">Back</a>
                    <h2>${selectedGame.name}</h2>
                    <img class="game-image" src="${selectedGame.background_image}">
                    <p>Description - ${selectedGame.description}</p>
                    <p>Developers - ${devNameArray}</p>
                    <p>Released - ${selectedGame.released}</p>
                    <p>Metacritic score - ${selectedGame.metacritic}</p>                  
                </div>
            </div>`
        document.getElementById("selected-div").innerHTML = output;




    })
        .catch((err) => {
            console.log(err);
        });
}

// refreshes the gamediv each time a new search is performed

function backFunction() {
    window.history.back();

}

// reload games after backFunction() is called 

function reloadGames() { 

    let searchText = sessionStorage.getItem("searchText");
    let page = sessionStorage.getItem("page");

    if (page && searchText) {

        let searchText1 = sessionStorage.getItem("searchText");
        let page1 = sessionStorage.getItem("page");
        
            const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?page=" + page + "&search=" + searchText,
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
        count = games.count
        pageLimit = Math.ceil(count/=20);


    // output for gamediv

        let output = '';
        $.each(gamesResults, (key, game) => {
            output += `
            <div class="col-lg-4 col-md-6 no-padding">
                <div class="text-center">
                    <img class="thumbnails" src="${game.background_image}">
                    <h5>${game.name}</h5>
                    <p>Metacritic score - ${game.metacritic}</p>
                    <a onclick="gameSelected('${game.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("gamediv").innerHTML = output;
        });
    })

        .catch((err) => {
            console.log(err);
        });


        // displays next and previous buttons and page number in a single line
        document.getElementById("next-prev").style.display = "inline-block";
        document.getElementById("page-number-top").style.display = "inline-block";
        document.getElementById("page-number-bottom").style.display = "inline-block";
        document.getElementById("next-prev2").style.display = "inline-block";

        // displays inital page number
        document.getElementById("page-number-top").innerHTML = `<p>${page}</p>`;
        document.getElementById("page-number-bottom").innerHTML = `<p>${page}</p>`;
}
         
    }


// search for a random game based on ID and post it to a div on random.html

function randomGames() {

let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 20) + 1;
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?dates=1990-01-01,2020-12-31&ordering=-rating&page=" + randomNumber,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let resultsResponse = response;
        let randomGame = resultsResponse.results[randomNumber2];
        console.log('game' + randomGame.name);

        // output for random games
        
        let output =`
            <div class="no-padding no-margins">
                <div class="text-center">
                    <img class="random-thumbnails" src="${randomGame.background_image}">
                    <h5>${randomGame.name}</h5>
                    <p>Metacritic score - ${randomGame.metacritic}</p>
                    <a onclick="gameSelected('${randomGame.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("randomGamediv").innerHTML = output;

    })

        .catch((err) => {
            console.log(err);
            randomGames();
        });
}


// search for a second random game based on ID and post it to a div on random.html

function randomGames2() {

let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?dates=1990-01-01,2020-12-31&ordering=-rating&page=" + randomNumber,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let resultsResponse = response;
        let randomGame = resultsResponse.results[randomNumber2];
        console.log('game' + randomGame.name);
        let output =`
            <div class="no-padding no-margins">
                <div class="text-center">
                    <img class="random-thumbnails" src="${randomGame.background_image}">
                    <h5>${randomGame.name}</h5>
                    <p>Metacritic score - ${randomGame.metacritic}</p>
                    <a onclick="gameSelected('${randomGame.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("randomGamediv2").innerHTML = output;

    })

        .catch((err) => {
            console.log(err);
            randomGames2();
        });
}

// search for a third random game based on ID and post it to a div on random.html

function randomGames3() {

let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?dates=1990-01-01,2020-12-31&ordering=-rating&page=" + randomNumber,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let resultsResponse = response;
        let randomGame = resultsResponse.results[randomNumber2];
        console.log('game' + randomGame.name);
        let output =`
            <div class="no-padding no-margins">
                <div class="text-center">
                    <img class="random-thumbnails" src="${randomGame.background_image}">
                    <h5>${randomGame.name}</h5>
                    <p>Metacritic score - ${randomGame.metacritic}</p>
                    <a onclick="gameSelected('${randomGame.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("randomGamediv3").innerHTML = output;

    })

        .catch((err) => {
            console.log(err);
            randomGames3();
        });
}

// search for a fourth random game based on ID and post it to a div on random.html

function randomGames4() {

let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 20) + 1;
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?dates=1990-01-01,2020-12-31&ordering=-rating&page=" + randomNumber,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let resultsResponse = response;
        let randomGame = resultsResponse.results[randomNumber2];
        console.log('game' + randomGame.name);
        let output =`
            <div class="no-padding no-margins">
                <div class="text-center">
                    <img class="random-thumbnails" src="${randomGame.background_image}">
                    <h5>${randomGame.name}</h5>
                    <p>Metacritic score - ${randomGame.metacritic}</p>
                    <a onclick="gameSelected('${randomGame.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("randomGamediv4").innerHTML = output;

    })

        .catch((err) => {
            console.log(err);
            randomGames();
        });
}


// search for a fifth random game based on ID and post it to a div on random.html

function randomGames5() {

let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?dates=1990-01-01,2020-12-31&ordering=-rating&page=" + randomNumber,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let resultsResponse = response;
        let randomGame = resultsResponse.results[randomNumber2];
        console.log('game' + randomGame.name);
        let output =`
            <div class="no-padding no-margins">
                <div class="text-center">
                    <img class="random-thumbnails" src="${randomGame.background_image}">
                    <h5>${randomGame.name}</h5>
                    <p>Metacritic score - ${randomGame.metacritic}</p>
                    <a onclick="gameSelected('${randomGame.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("randomGamediv5").innerHTML = output;

    })

        .catch((err) => {
            console.log(err);
            randomGames2();
        });
}

// search for a sixth random game based on ID and post it to a div on random.html

function randomGames6() {
let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games?dates=1990-01-01,2020-12-31&ordering=-rating&page=" + randomNumber,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let resultsResponse = response;
        let randomGame = resultsResponse.results[randomNumber2];
        console.log('game' + randomGame.name);
        let output =`
            <div class="no-padding no-margins">
                <div class="text-center">
                    <img class="random-thumbnails" src="${randomGame.background_image}">
                    <h5>${randomGame.name}</h5>
                    <p>Metacritic score - ${randomGame.metacritic}</p>
                    <a onclick="gameSelected('${randomGame.id}')" class="btn btn-success detail-btn href="#">Game Details</a>
                </div>
            </div>`
            document.getElementById("randomGamediv6").innerHTML = output;

    })

        .catch((err) => {
            console.log(err);
            randomGames3();
        });
}


