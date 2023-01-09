$(document).ready(function(){
    $('.box1>a').hover(function(){
          $('.add1').css('display', 'block');
  }, function(){
          $('.add1').css('display', 'none'); 
      });
    $('.box2>a').hover(function(){
      $('.add2').css('display','block');
    },function(){
      $('.add2').css('display','none');
    });
     $('.open').click(function(e){
        e.preventDefault();
       $('.list').slideToggle();
     });
    $('.open2').click(function(e){
      e.preventDefault();
      $('.list2').toggleClass('list3');
    });
    $('.close').click(function(e){
      e.preventDefault();
      $('.ad').fadeOut();
    })
  });