/*ハンバーガーメニュー
----------------------
*/
$(function(){
    $('.el_humburger').on('click',function(){
      spNavInout();
    });
  });
   
  //spナビ開く処理
  function spNavIn(){
    $('body').removeClass('js_humburgerClose');
    $('body').addClass('js_humburgerOpen');
    $(".navigation").addClass("js_appear");
    $(".navigation").css({opacity:0});
    $(".navigation").animate({
      opacity: 1
    },200);
    scrollBlocker(true);
  }
   
  //spナビ閉じる処理
  function spNavOut(){
    $(".navigation").animate({
      opacity: 0
    },200)
    $('body').removeClass('js_humburgerOpen');
    $('body').addClass('js_humburgerClose');
    setTimeout(function(){
      $(".navigation").removeClass("js_appear");
    },200);
    scrollBlocker(false);
  }
   
  //spナビ開閉処理
  function spNavInout(){
    if($('body.spNavFreez').length){
      return false;
    }
    if($('body').hasClass('js_humburgerOpen')){
     spNavOut();
    } else {
     spNavIn();
    }
  }
  

 /*スクロール動き
----------------------
*/
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });


  $(function(){
    $('.js-menu__item__link').each(function(){
        $(this).on('click',function(){
            $("+.submenu",this).slideToggle();
            return false;
        });
    });
});


 /*ローディング
----------------------
*/

$(function() {
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});
  
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
  
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
