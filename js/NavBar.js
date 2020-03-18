function settingUpNavbar(){
  $("#mobilebutton").click(function(){$("#mobilemenu").fadeToggle();});
  $("#navtitle").text(messages["navbarTitle"]);
  getData('./datas/basic/navbar.json', function(data, status, xhr){
    for(i = 0; i < data.links.length; i++){
      var link = $('<a href="'+data.links[i].url+'" class="w3-bar-item w3-button w3-medium"></a>').text(messages[data.links[i].title]);
      if(data.links[i].mobileView){
        $('#mobilemenu').append(link);
        link.className += ' w3-hide-small';
      }
      $("#mobilebutton").before(link);
    }
  },function(jqXhr, textStatus, errorMessage){
    $("#mobilebutton").before("Error: " + errorMessage);
  });
}
