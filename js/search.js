
$(function () {
  var server_url = '';
  var key = '';
  $("#search").keyup(function (){
      if (event.keyCode == 13){
        search();
      }
  });
  $('#search-btn').on('click', search);
  $('.goods-hot .button-light').on('click', function(){
    var key = $(this).eq(0).html().trim();
    $('#search').val(key);
  });
  $('.goods-history .button-light').on('click', function(){
    var key = $(this).eq(0).html().trim();
    $('#search').val(key);
  });
  function search(){
    var key = $('#search').val();
    //alert(key);
    window.location.href = "search_full.html?key="+key;
  } 

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