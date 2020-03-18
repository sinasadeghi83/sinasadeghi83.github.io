//JS main document!

//Some global variables
var LANG = "en";
var messages;
$(settingUp);

function settingUp(){
  getData('./datas/messages/'+LANG+'/messages.json',
              function(data, status, xhr){
                messages = data;
                //Load navbar setting
                loadScript("./NavBar.js", function(){
                  settingUpNavbar();
                  setDynamicStyles();
                });

                loadScript("./Social.js", function(){
                  settingUpSocial();
                });
              },
            function(jqXhr, textStatus, errorMessage){
              alert("Please refresh the page" + errorMessage);
            });
}

function setTabInfo(){
}

function setDynamicStyles(){
  //$(window).on('load', function(){
    //$(".profile").css('margin-top', $("#nav").height());
    //console.log($("#nav").height() + 'test');
  //});
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = './js/'+url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function getData(url, successFunc, errorFunc){
  $.ajax(url, {
    dataType:'json',
    timeout:3500,
    success:successFunc,
    error:errorFunc,
  });
}
