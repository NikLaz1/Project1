console.log("hello")
// JUST TO CHECK IF JS FILE LINKED OR NOT 

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

    //  TO APHEND WE NEED TO KNOW WHERE EXCATLY THIS FUNCTION WILL BE PLACED




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
});


//the below API highlights just the confirmed cases, recovered a deaths. This can be used for the main dashboard. 
fetch('https://covid19.mathdro.id/api')
     .then((response)=>{
         return response.json();
         })
        .then((data) => {
            console.log(data);
        });
