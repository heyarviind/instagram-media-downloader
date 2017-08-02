function getMedia(){
  let link = $("#link").val();
  $.ajax({
    url : 'https://api.instagram.com/oembed/?url=' + link,
    type : 'get',
    dataType: 'jsonp',
    crossDomain: true,
    beforeSend : function(){
      console.log('fetching data');
    },
    success : function(response){
      console.log(response);
      $("#image").attr('src',response.thumbnail_url);
      if(response.thumbnail_url != undefined){
        $("#downloadBtn").removeClass("disabled");
      } else {
        $("#downloadBtn").addClass("disabled");
      }
    },
    error : function(error){
      console.log(error);
    }
  })
}
//function to clear the textbox
function clearTextBox(){
  $("#link").val("");
}
