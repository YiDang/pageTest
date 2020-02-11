   alert ("123");

 //  request.open("GET", "https://raw.githack.com/YiDang/pageTest/master/json/story_01.json", false);
function parseUrl(url){
    var a=document.createElement('a');
    a.href=url;
    return {
      protocol:a.protocol.replace(':',''),
      hostname:a.hostname,
      port:a.port,
      path:a.pathname,
      query:(()=>{
        var query=a.search.substr(1);
        var queryArr=query.split('&');
        var queryObj={};
        queryArr.forEach((item,index)=>{
            var item=item.split('=');
            var key=item[0];
            queryObj[key]=item[1];
        })
        return queryObj;
      })(),
       params:(()=>{
        var params=a.hash.substr(1);
        var paramsArr=params.split('#');
        return paramsArr;
        
      })(),

    }
}
var urlObj = parseUrl('https://raw.githack.com/YiDang/pageTest/master/json/story_01.json')
console.log(urlObj)
   //var my_JSON_object = JSON.parse(request.responseText);
  // alert (my_JSON_object);
  // alert (my_JSON_object.result[0]);
