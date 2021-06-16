window.onload = function(){

       
  const $window = $(window),
        $body = $('body'),
        $nav = $('#globalNav'),
        $gnavBtn = $('#gnavBtn'),
        windowSm = 767,
        topBtn = $('#pageTop , .pagetopBtn');


// $window.on('scroll',function(){
//   adjustMenu();
// });

let scrollpos;



// ハンバーガーメニューの動作
//gnavの表示

$('.hamburger').on('click',function(){


   $(this).toggleClass('is-active');

  if($(this).hasClass('is-active')){
    $('.gnav').addClass('is-active');
  }else{
    $('.gnav').removeClass('is-active');
  }

});

//gnavを隠す
$('.gnav__lists .link').click(function () {
  $('.gnav').removeClass("is-active");
  $('.gnav-toggle').removeClass('is-active');
});

//gnavのリストの開閉

$('.gnav__lists .lineup').on('click',function(){
  $(this).next().slideToggle();
  $(this).toggleClass('is-active');
});




//移動アニメーション

$('a[href^="#"]').click(function(){

  const speed = 500;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;

  if($(window).width() >= 768){
    position = position - $('header').outerHeight();
  }

  $('html,body').animate({
    scrollTop: position
  }, speed, "swing");



  return false;

}); 

//pageTopボタンの表示

const $pageTop = $('#pageTop');

if($(window).width() >= 768){
  
  $(window).scroll(function(){

    if ($(this).scrollTop() > 100) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }

  });
}



// mvのスライダー
$('.mv__slider').slick({
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 1000,
  arrows: true,
  dots: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [{
      breakpoint: 768,
      //767px以下のサイズに適用
      settings: {
          dots: false
      }
  }]
});


//content2のスライダー

$('.content2__slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  responsive: [{
    breakpoint: 768, //767px以下のサイズに適用
    settings: {
      centerMode: false,
      variableWidth: false,
    }
   }
 ]
});


// inview
$('.read__box').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    $(this).addClass('is-active');
  }
});


$('.title02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    $(this).addClass('is-active');
  }
});

$('.content1__lists li').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    $(this).addClass('is-active');
  }
});

$('.content1__text').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    $(this).addClass('is-active');
  }
});

$('.lineup__list li').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    $(this).addClass('is-active');
  }
});

$('.content2__slider').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    $(this).addClass('is-active');
  }
});


}
