var request = new XMLHttpRequest();
var button = document.getElementById('button');
var to_print = document.getElementById('printed');

request.open('GET','https://restcountries.eu/rest/v1/all');
request.onreadystatechange = function () {
	if ((request.status = 200) && (request.readyState == 4)) {
		button.addEventListener(click, true)
	}
}
request.send();