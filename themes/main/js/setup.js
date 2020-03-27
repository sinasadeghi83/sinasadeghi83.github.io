var THEME_DIR = "/themes/"+configData.theme+"/";

function loadNavbar($navData){
  $(".nav_item").html('');
  $("#home").text(messages['Home']);
  for(var i = 0; i < $navData.length; i++){
    var link = $(getPage(THEME_DIR + './templates/navbar.html')).text($navData[i].title);
    link.attr("class", link.attr("class") + ' w3-hide-small');
    link.attr("href", $navData[i].module);
    $("#mobilebutton").before(link);
    if($navData[i].mobileView){
      link = $(getPage(THEME_DIR + './templates/navbar.html')).text($navData[i].title);
      link.attr("href", $navData[i].module);
      $("#mobilemenu").append(link);
    }
  }
}

function loadHeader($headerData){
  //بماند!
}

function loadSideContent(){
  $("#side_content").html('');
  var searchbox = getPage(THEME_DIR + 'templates/searchbox.html');
  var aboutMe = getPage(THEME_DIR + 'templates/about_me.html');
  aboutMe.replace("$$pic", "");
  aboutMe.replace("$$description", "");
  aboutMe.replace("$$heading", "");
  var socialNetworks = getPage(THEME_DIR + 'templates/social_networks.html');
  $("#side_content").load(searchbox + aboutMe + socialNetworks);
}

function loadMainPage(){
  $("#main_content").html('');
}
