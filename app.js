
$(function () {
  $.init();
  $("#search").keyup(function(){
  	if (event.keyCode == 13){
  		window.location.href = "search.html";
  	}
  });
});