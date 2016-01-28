$(function () {
  var server_url = '';
  //getBrandList();

  function getBarndList(){
  	$.ajax({
  		'url':server_url,
  		success:function(data){
  			
  		}
  	});
  }
  $.init();
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
});