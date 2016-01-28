
$(function () {
  var server_url = '';
  $("#search").keyup(function(){
  	if (event.keyCode == 13){
  		window.location.href = "search.html";
  	}
  });

  function getBarndList(){
  	$.ajax({
  		'url':'',
  		success:function(data){

  		}
  	});
  }

  $.init();
});