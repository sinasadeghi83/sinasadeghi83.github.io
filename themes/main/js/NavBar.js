function settingUpNavbar(){
  $("#mobilebutton").click(function(){$("#mobilemenu").fadeToggle();});
  $("#navtitle").text(messages["navbarTitle"]);
  getData('./datas/basic/navbar.json', function(data, status, xhr){
    for(i = 0; i < data.links.length; i++){
      var link = $('<a href="'+data.links[i].url+'" class="w3-bar-item w3-button w3-medium'+(data.links[i].mobileView ? ' w3-hide-small' : '')+'"></a>').text(messages[data.links[i].title]);
      $("#mobilebutton").before(link);
      if(data.links[i].mobileView){
        link = $('<a href="'+data.links[i].url+'" class="w3-bar-item w3-button w3-medium"></a>').text(messages[data.links[i].title]);
        $('#mobilemenu').append(link);
      }
    }
  },function(jqXhr, textStatus, errorMessage){
    $("#mobilebutton").before("Error: " + errorMessage);
  });
}
