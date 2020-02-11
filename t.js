   alert ("123");
   var request = new XMLHttpRequest();
   request.open("GET", "https://raw.githack.com/YiDang/pageTest/master/json/story_01.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   alert (my_JSON_object);
   alert (my_JSON_object.result[0]);
