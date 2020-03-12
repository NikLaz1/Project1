# Coronavirus (COVID-19) Dashboard 

# Synopsis
The Novel Coronavirus (CODIV-19) outbreak is now spreading around the world, with more than 100,000 cases and >3,000 deaths. This live-updating dashboard provides a way for us to track the virus, which has now been classified as a pandemic. Our main purpose to build this project was to build something relevant and useful to people. 

# Functionality
The dashboard has a simple UI as this is our first MVP. There is a menubar with buttons with helpful links to the latest news on Twitter, the Government of Canada advisory and the the official CDC website. Following that are three main numbers: total confirmed cases, total deaths and total recovered. Each of these is actually a button and clicking on them will reveal more data in a tabular format. 


# Technicalities 
This dasboard is built using HTML, CSS, Javascript and Jquery in the front-end. We also used Bulma as an alternaitive to Bootsrap (https://bulma.io). We also used server side APIs and a third-party API to pull data. Data was pulled from two sources: RapidAPI (https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php) and https://covid19.mathdro.id/api.  

# Team 
Nikola Lazovic (front-end)
Runj Viring (front-end)
Manjinder Gill (back-end)
Natasha Gilani (back-end)


# Project Requirements

- Must use at least two server-side APIs
- Must use a CSS framework other than Bootstrap
- Must be interactive (i.e: accept and respond to user input)
- Use at least one new third-party API
- Must have a polished UI
- Must meet good quality coding standards
- Does not use alerts, confirms or prompts (look into modals)
- Must be deployed to GitHub Pages

# Screenshot
<img width="1434" alt="Screen Shot 2020-03-12 at 10 17 05 AM" src="https://user-images.githubusercontent.com/56641651/76530795-a2359700-644a-11ea-825d-5ff33938df66.png">


# Sample Code

$(document).ready(function(){
    var cases_by_country = {
        "async": true,
        "crossDomain": true,
        "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",   // Cases by country
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "aef9ada445mshd572571b505136ep1ba534jsne86e024b9f53" // API public key 
        }
    }
    
    $.ajax(cases_by_country).done(function (response) {
        console.log(response);
    });

})
var affectedCountries = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "aef9ada445mshd572571b505136ep1ba534jsne86e024b9f53"
	}
}

$.ajax(affectedCountries).done(function (response) {
    console.log(response);
    $(".content article-body").html("<h1>" + response.confirmed.value + " Confirmed Deaths</h1>")
});

 # Installation
To use this portfolio, log into your GitHub account (if you don’t have a GitHub user profile, create one at https://github.com/join) and open this link in your browser: . Then click on the "Fork" button at the top right corner and wait until the repo is forked. 
