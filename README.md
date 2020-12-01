<p align="center">
  <img src=https://github.com/joshhunt1991/Video-game-API-practice/blob/e41db221dc31aa202654691f6d79aa9ed1332228/assets/images/VGsearch.png alt="VG Search logo"/>
</p>

# Description

*This is a fictitious company*

> VG Search is a video game search website that allows video game enthusiasts to find new games to play. Users can find a game they have previously heard about based on a keyword and then retrieve information on that game such as release date, metacritic score and developer names.

> VG Search allows users to randomly generate 6 games at a time with the aim of finding new gaming experiences that they may not have heard of otherwise. The previously mentioned details of these games can then be found at the click 

> Where information is available a chart will be generated that presents a visual representation of the games popularity.

# Deployment and Demo

Website has been deployed to [GitHub Pages](https://joshhunt1991.github.io/Chalk-and-Sawdust/).

# Wireframe

The wireframe was designed using [Balsamiq](https://balsamiq.com/wireframes/) and links to the final version can be found below:

- [Wireframe Final Version](/readmelinks/VG-search.bmpr)

# UX

I have opted for a simple retro style design with dark greys and black backgrounds to contrast the bright green logo and text; inspired by old games particularly space invaders.  the site has a loading time of 3.1 seconds.

- Home page: Contains a jumbotron with a search bar inside and an automatic image slider containing gaming images. When a keyword is searched the image slider disappears and the page is populated with the relevant games. The image slider is hidden at this point and next and previous page buttons are generated with a page number in between. Each game has a details button to take the user to a seperate page with the information for that game. Everything resizes accordingly depending on user's viewport size.
- The game page: Contains the game title, an image generated from the api, assorted game details and a chart to display a visual representation of the games popularity. The page also contains a back button to return to the previous page.
- Random page: Contains 6 randomly generated games from the top 2000 rated games on the API.
- About page: Contains a write up about the purpose of the website and an image to convey the theme.

[image of responsive web page in desktop size](/readmelinks/desktop.png) <br/>
[image of responsive web page in tablet size](/readmelinks/tablet.png) <br/>
[image of responsive web page in mobile size](/readmelinks/mobile.png) <br/>


# Visual Identity

- [Canva](https://www.canva.com/) for the logo design.

- The color scheme was inspired by the vintage xbox color scheme.

- The general theme was inspired by retro gaming

# User Stories

Users:

- As a user, I'd like to find good quality games that are highly rated.
- As a user, I'd like to get a clear sense of what the website is meant to achieve.
- As a user, I'd like to be able to search for game series by keyword.
- As a user, I'd like to quickly find highly rated and popular games at random.

site creator:

- As a site owner, I would like my users to find the site easy to use to retain their interest.
- As a site owner I would like the theme to clearly represent gaming
- As a gym owner, I'd like the website to give the user information about the purpose of the site.

# Testing

Website has been tested using [GTmetrix](https://gtmetrix.com/reports/joshhunt1991.github.io/FwfY1qpW) see results below:

[gt metrix test Results](/readmelinks/gtmetrix.pdf)

The points below can be improved with a bit more optimization:

- Image optimization
- Leveraging browser caching

I tested the modal form to make sure that it opens and submits to the code institute form dump. images below.

[Opening the modal](/readmelinks/modalopen.png) <br/>
[Making sure fields are required](/readmelinks/required.png) <br/>
[Submitting to form dump](/readmelinks/formsubmit.png) <br/>

I also tested the contact form. Images below.

[Modal filled out](/readmelinks/form2.png) <br/>
[Submitted to form dump](/readmelinks/form2submit.png) <br/>

I then decided to test the dropdown navbar. Images below.

[Making sure the dropdown menu opens on click](/readmelinks/ddown.png) <br/>
[Ensuring that the color change hover effect works](/readmelinks/hover.png) <br/>

# Bugs and issues

- found a bug where the next page function was registering all previous searches and displaying mixed results. I discovered that the position of the code for the next and previous buttons was causing event listener binding. Issue was solved by moving the code.

- Originally the random game function was rarely displaying any good quality games. I looked into this and discovered that this was due to the high number of games in the API and my random games functions were searching the entire list of games. Issue was resolved by only searching from the highest rated 2000 games.

- found a bug where if the API didn't contain sufficient information to populate the chart the whole game page wouldn't display. Bug was fixed by writing an if statement that hides the chart if sufficient data isn't present.

- When clicking the back button the results shown were always for the first page of results regardless of which page was supposed to be presented, this was due to the session storage value for page number being reset to one when the game information page was opened.

# Scalability

I'd like to have a range of filters on the random games page including genres and release date.

# Technologies

- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Charts js](https://www.chartjs.org/)

# Media

I have used different resources for the API images and my logo, I'll list all below:

- [Canva](https://www.canva.com/) for the logo design
- [Pexels](https://unsplash.com/s/photos/video-game) for the slider images on the index.html page and the image on the about page.
- [Font Awesome](https://fontawesome.com/6?next=%2Fstart) for the magnifying glass on the search bar
- [Rapid API](https://rapidapi.com/accujazz/api/rawg-video-games-database/) I used the RawG video games database API which is hosted on Rapid API.


# Thanks to

- Font awesome community for developing this great resource
- Bootstrap crew for developing and maintaining such great library
- jQuery developers for all the work and great documentation
- Canva for the great service
- Rapid API and RawG video games database for the impressive database of video games and information and the well documented platform.

# License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

Copyright 2020 Joshua Connor Hunt.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.