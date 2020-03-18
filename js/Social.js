function settingUpSocial(){
  getData('./datas/basic/socialnetworks.json',
            function(data, status, xhr){
              $("#scoialtitle").text(data.title);
              for(i = 0; i<data.socials.length; i++){
                $("#imgnetworks").append('<a href="'+data.socials[i].url+'"><i class="'+data.socials[i].class+'"></i></a><br>');
              }
            }, function(jqXhr, textStatus, errorMessage){
              alert("Error: "+errorMessage);
            });
}
