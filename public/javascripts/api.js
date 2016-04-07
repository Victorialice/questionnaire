$(function(){  

  $.getJSON("http://192.168.0.33:3000/api/users", function(json){  
    alert("JSON Data: " + json.forum.name);  
  });  
});  

