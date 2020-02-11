var request = new XMLHttpRequest();
request.open("GET", "https://raw.githack.com/YiDang/pageTest/master/json/story_01.json", false);
request.send(null);

alert(request.responseText);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);
  }
}
