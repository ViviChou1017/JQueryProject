$(document).ready(function(){
    $('.catalog').click(function(e){
        e.preventDefault();
        $('.list').slideToggle();
    })
    //網頁右上方固定式選單
    $(document).ready(function(){
        $('.box>.button').click(function(){
          $('.open').stop().slideToggle();
        })
        $('.open-one').click(function(){
          $(this).parent().parent().find('.language').stop().slideToggle();
        })
       $('.open-two').click(function(){
          $(this).parent().parent().find('.coin').stop().slideToggle();
        })
      })
      //輪播效果
      const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed:200,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
})