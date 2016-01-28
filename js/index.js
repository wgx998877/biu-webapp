
$(function () {
  var server_url = '';
  $("#search").keyup(function(){
  	if (event.keyCode == 13){
  		window.location.href = "search.html";
  	}
  });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        //effect: 'fade',//add
        loop: true,
    });
  //getBrandList();
  function getBarndList(){
  	$.ajax({
  		'url':'',
  		success:function(data){

  		}
  	});
  }

  $.init();
});