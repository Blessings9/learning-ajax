var request = new XMLHttpRequest();
var bio = document.getElementById('bio');

request.open('GET', 'data/ziks.txt');
request.onreadystatechange = function () {
  if ((request.status == 200) &&(request.readyState==4)) {
    console.log(request.responseText);
  }
}
request.send();