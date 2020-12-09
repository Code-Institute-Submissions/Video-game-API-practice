<p align="center">
  <img src=https://github.com/joshhunt1991/Video-game-API-practice/blob/e41db221dc31aa202654691f6d79aa9ed1332228/assets/images/VGsearch.png alt="VG Search logo"/>
</p>

# Description

*This is a fictitious company*

> VG Search is a video game search website that allows video game enthusiasts to find new games to play. Users can find a game they have previously heard about based on a keyword and then retrieve information on that game such as release date, metacritic score and developer names.

> VG Search allows users to randomly generate 6 games at a time with the aim of finding new gaming experiences that they may not have heard of otherwise. The previously mentioned details of these games can then be found at the click 

> Where information is available a chart will be generated that presents a visual representation of the games popularity.

# Deployment and Demo

Website has been deployed to [GitHub Pages](https://joshhunt1991.github.io/Video-game-API-practice/index.html).

The deployment process is shown below:

[- Log in to github](/readmelinks/login.png) <br/>
[- Open the repo](/readmelinks/selectrepo.png) <br/>
[- Scroll down to github pages](/readmelinks/gitpages.png) <br/>
[- Select master branch](/readmelinks/master.png) <br/>
- This will generate a live page for your repo.



# Wireframe

The wireframe was designed using [Balsamiq](https://balsamiq.com/wireframes/) and links to the final version can be found below:

- [Wireframe Final Version](/readmelinks/VGsearch.bmpr)

# UX

I have opted for a simple retro style design with dark greys and black backgrounds to contrast the bright green logo and text; inspired by old games particularly space invaders.  the site has a loading time of 3.1 seconds.

- Home page: Contains a jumbotron with a search bar inside and an automatic image slider containing gaming images. When a keyword is searched the image slider disappears and the page is populated with the relevant games. The image slider is hidden at this point and next and previous page buttons are generated with a page number in between. Each game has a details button to take the user to a seperate page with the information for that game. Everything resizes accordingly depending on user's viewport size.
- The game page: Contains the game title, an image generated from the api, assorted game details and a chart to display a visual representation of the games popularity. The page also contains a back button to return to the previous page.
- Random page: Contains 6 randomly generated games from the top 2000 rated games on the API.
- About page: Contains a write up about the purpose of the website and an image to convey the theme.

Below are some images demonstrating the responsiveness of the webpage on different viewport sizes.

- Desktop sizes: <br/>
[- image of the homepage](/readmelinks/s1.png) <br/>
[- image of the homepage image slider](/readmelinks/s2.png) <br/>
[- image of random games page](/readmelinks/s3.png) <br/>
[- image of search results](/readmelinks/s6.png) <br/>
[- image of the about page](/readmelinks/s5.png) <br/>
[- image of a selected game](/readmelinks/s20.png) <br/>
[- image of a selected game scrolled down to show chart](/readmelinks/s21.png) <br/>

- Tablet sizes: <br/>
[- image of the homepage](/readmelinks/s7.png) <br/>
[- image of search results](/readmelinks/s11.png) <br/>
[- image of the random games page](/readmelinks/s8.png) <br/>
[- image of the about page](/readmelinks/s9.png) <br/>

- Mobile sizes: <br/>
[- image of the homepage](/readmelinks/s13.png) <br/>
[- image of search results](/readmelinks/s14.png) <br/>
[- image of the random games page](/readmelinks/s15.png) <br/>
[- image of a selected game](/readmelinks/s18.png) <br/>
[- image of a selected game showing the chart](/readmelinks/s19.png) <br/>


# Visual Identity

- [Canva](https://www.canva.com/) for the logo design.

- The color scheme was inspired by the vintage xbox color scheme.

- The general theme was inspired by retro gaming for example games like space invaders. I wanted to create a simple and easy to use design and thought that as old games were naturally simple due to the technological limitations that this would be a good place to get inspiration.

# User Stories

Users:

- (1) As a user, I'd like to find good quality games that are highly rated, to achieve this I only selected the random games from a pool of the top 2000 most highly rated games. I also give the user ratings and a visual guide of quality in the form of a chart for any and all games where the information is avaiable
- (2) As a user, I'd like to get a clear sense of what the website is meant to achieve. This was accomplished by creating an "about" page with information about the purpose of the page and also having clear headers and calls to action where necessary.
- (3) As a user, I'd like to be able to search for game series by keyword. To satisfy this requirement I created a search function that allows users to search by keyword.
- (4) As a user, I'd like to quickly find highly rated and popular games at random. I achieved this by implementing a randon game page that returns 6 random games from the top 2000 rated games each time the random button is clicked.

Site creator:

- (5) I would like my users to find the site easy to use to retain their interest so I focused on creating a simple, straightforward and self explanatory user interface.
- (6) I would like the theme to clearly represent gaming therefore I used a retro style theme inspired by space invaders and the original Xbox color scheme. I used colour contrast to make everything stand out.

# Testing

Website has been tested using [GTmetrix](https://gtmetrix.com/reports/joshhunt1991.github.io/91nKCZjn/) see results below:

[gt metrix test Results](/readmelinks/GTmetrix.pdf)

- The page has a fully loaded time of 0.5 seconds. I put this down to the simple design which was one of the goals I hoped to achieve.
- The GT Metrix grade is A, with performance being 97% and the structure 93%.
- One thing that it recommends to improve is the cumulative layout shift.

I did a simple functionality test to ensure that the website works as intended and evidenced this process below. I was satisfied with the results.

[- First I performed a search using the homepage search bar for the game Super Mario which was the goal of user stories (3)](/readmelinks/smario.png) <br/>
[- Then I tested the next and previous buttons, starting with previous to ensure that as I am starting on page 1 nothing happens. I arrived on page 3](/readmelinks/pagebuttons.png) <br/>
[- Then I clicked on one of these games to bring myself to the game details page](/readmelinks/gamepage.png) <br/>
[- I then used the back button to ensure that I returned to the same page I was previously on](/readmelinks/backbutton.png) <br/>
[- I then performed a second game search to ensure that nothing was broken by performing the previous actions](/readmelinks/secondsearch.png) <br/>

[- Once these initial checks were done I searched for a nonsense string to test my error message](/readmelinks/nonsense.png) <br/>

Next I performed multiple refreshes of the random games page to ensure that I was consistently returning highly rated games as desired in user stories (1) and (4).

[- attempt 1](/readmelinks/attempt1.png) <br/>
[- attempt 2](/readmelinks/attempt2.png) <br/>
[- attempt 3](/readmelinks/attempt3.png) <br/>

Once the site was deployed on github pages I repeated all the previous tests to ensure that everything was still function.

[- I also tested that the about page opened as function as this page is crucial to achieving the goal of user stories (2)](/readmelinks/usabout.png) <br/>

# Validation and code clean up

- I used W3C mark up validation service to validate my code [W3C Markup Validator](https://validator.w3.org/) <br/>
- I used freeformatter.com's HTML formatter to format all my code [freeformatter HTML Formatter](https://www.freeformatter.com/html-formatter.html) <br/>
- I used freeformatter.com's javascript beautifier to beautify all my javascript [freeformatter Javascript Beautifier](https://www.freeformatter.com/javascript-beautifier.html) <br/>
- I used freeformatter.com's CSS beautifier to beautify all my CSS [freeformatter CSS Beautifier](https://www.freeformatter.com/css-beautifier.html) <br/>

# Bugs and issues

- *SOLVED* found a bug where the next page function was registering all previous searches and displaying mixed results. I discovered that the position of the code for the next and previous buttons was causing event listener binding. Issue was solved by moving the code.

- *SOLVED* Originally the random game function was rarely displaying any good quality games. I looked into this and discovered that this was due to the high number of games in the API and my random games functions were searching the entire list of games. Issue was resolved by only searching from the highest rated 2000 games.

- *SOLVED* found a bug where if the API didn't contain sufficient information to populate the chart the whole game page wouldn't display. Bug was fixed by writing an if statement that hides the chart if sufficient data isn't present.

- *SOLVED* When clicking the back button the results shown were always for the first page of results regardless of which page was supposed to be presented, this was due to the session storage value for page number being reset to one when the game information page was opened.

- *SOLVED* Occasionally one of the random games wasn't loading, leaving an empty space, this was due to my randomly generated number for the random game function exceeding the number of games on the API's pages.

# Scalability

- I'd like to have a range of filters on the random games page including genres and release date.
- I would like to to have the option to filter searches.
- I'd also like to expand on the home page and include more sections such as "recommended games" or maybe "game of the month".

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
- [favicon.io](https://favicon.io/favicon-generator/) for the favicon

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