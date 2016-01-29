
$(function () {

$(document).on("pageInit", function(e, pageId, $page) {
  console.log(pageId);
  var server_url = '';
  if(pageId == "page-index") {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        //effect: 'fade',//add
        loop: true,
    });

    function getBarndList(){
      $.ajax({
        'url':'',
        success:function(data){

        }
      });
    }
  }
  else if (pageId == "page-detial"){
      $("#showActionSheet").on('click', function () {
          var mask = $('#mask');
          var weuiActionsheet = $('#weui_actionsheet');
          weuiActionsheet.addClass('weui_actionsheet_toggle');
          mask.show().addClass('weui_fade_toggle').click(function () {
              hideActionSheet(weuiActionsheet, mask);
          });
          var bartab = $('.bar-tab');
          bartab.hide();
          $('#actionsheet_confirm').click(function () {
              hideActionSheet(weuiActionsheet, mask);
          });
          weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

          function hideActionSheet(weuiActionsheet, mask) {
              weuiActionsheet.removeClass('weui_actionsheet_toggle');
              mask.removeClass('weui_fade_toggle');
              bartab.show()
              weuiActionsheet.on('transitionend', function () {
                  mask.hide();
              }).on('webkitTransitionEnd', function () {
                  mask.hide();
              })
          }
      });
      $("#showActionSheet2").on('click', function () {
          var mask = $('#mask');
          var weuiActionsheet = $('#weui_actionsheet');
          weuiActionsheet.addClass('weui_actionsheet_toggle');
          mask.show().addClass('weui_fade_toggle').click(function () {
              hideActionSheet(weuiActionsheet, mask);
          });
          var bartab = $('.bar-tab');
          bartab.hide();
          $('#actionsheet_confirm').click(function () {
              hideActionSheet(weuiActionsheet, mask);
          });
          weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

          function hideActionSheet(weuiActionsheet, mask) {
              weuiActionsheet.removeClass('weui_actionsheet_toggle');
              mask.removeClass('weui_fade_toggle');
              bartab.show()
              weuiActionsheet.on('transitionend', function () {
                  mask.hide();
              }).on('webkitTransitionEnd', function () {
                  mask.hide();
              })
          }
      });
  }
  else if (pageId == 'page-search' || pageId == 'page-search-full' || pageId == 'page-search-empty'){

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
  }
  else if (pageId == 'page-cart'){
    
  }
  else if (pageId == 'page-detail'){
    
  }

  else if (pageId == 'page-order' || pageId == 'page-order-noadd'){
    //location.reload();
  }
  else if (pageId == 'page-order-newadd'){
    
  }
  else if (pageId == 'page-mine'){
    
  }
});
  $.init();
});