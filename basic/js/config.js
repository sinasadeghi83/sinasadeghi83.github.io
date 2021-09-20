//Global variables
var messages;
var configData;

$(function(){
  getData('/basic/datas/config.json',
          function(data, status, xhr){
            configData = data;
            getData('/basic/datas/messages/'+configData.lang+'/messages.json'
                    , settingUp,
                    handleDataError);
          }, handleDataError);
});

function settingUp(data, status, xhr){
  messages = data;
  //Load theme
  loadScript("../../themes/" + configData.theme + "/js/setup.js", startMain);
}

function setupBasicTheme(){
  $("head").append('<link rel="stylesheet" href="/themes/'+configData.theme+'/css/style.css" />');
  $("body").load('/themes/'+configData.theme+'/index.html');
}

function handleDataError(jqXhr, textStatus, errorMessage){
  alert("Please refresh the page" + errorMessage);
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

function getPage(href)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}
