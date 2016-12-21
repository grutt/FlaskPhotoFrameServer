displayDuration = 7; //seconds
fadeDuration = 1; //seconds

fadeIn = true;
function updatePhoto(){
  $.getJSON("/rando", function( data ) {
      if(fadeIn){
        $("#photoTop").css("background-image", "url('"+data['img']+"')").fadeIn(fadeDuration*1000);
      }else{
        $("#photoBot").css("background-image", "url('"+data['img']+"')");
        $("#photoTop").fadeOut(fadeDuration*1000);
      }
      fadeIn=!fadeIn
  });
}

//load every 'duration' seconds
window.setInterval(function(){
  updatePhoto()
}, displayDuration*1000);

//run as soon as the page loads
$(function(){
  updatePhoto()
});
