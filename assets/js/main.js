$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getGames(searchText);
        e.preventDefault();
    });
});

function getGames(searchText) {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/games/" + searchText,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e820b60717mshf9de36d3c2a66b8p16a209jsnbbb441546d84"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
