
   // alert ("123");

 //  request.open("GET", "https://raw.githack.com/YiDang/pageTest/master/json/story_01.json", false);

// var urlObj = parseUrl('https://raw.githack.com/YiDang/pageTest/master/json/story_01.json')
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githack.com/YiDang/pageTest/master/json/story_01.json", false);
request.send(null);

alert(request.responseText);

var my_JSON_object = JSON.parse(request.responseText);
console.log(my_JSON_object);


   //var my_JSON_object = JSON.parse(request.responseText);
  // alert (my_JSON_object);
  // alert (my_JSON_object.result[0]);
