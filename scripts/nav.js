/// <reference path="jquery3.7.1.js" />

var lastScrollTop = $(window).scrollTop();

    var _x = 0;
    var _y = 0;

$(function() {
    if ($(document).scrollTop() >= 10) {
      $('nav').addClass('solid-bg')
      //$('#mountain3').addClass('shiftOne')
    } else {
      $('nav').removeClass('solid-bg')
    }

    $('#myWorkNav').on('click', removeNav);
    $('#contactNav').on('click', removeNav);
    $('a[href^="#').on('click', smoothScroll)

    setTimeout(removeLoader, 500); //wait for page load PLUS two seconds.
    
});
  
  
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();

    _x = windscroll;
    _y = windscroll;

    
    
    if (windscroll >= 10) {
      $('nav').addClass('solid-bg')
      //$('#mountain3').addClass('shiftOne')
    } else {
      $('nav').removeClass('solid-bg')
      //$('#mountain3').removeClass('shiftOne')
    }

     if ((windscroll <= 60)) {
      _x3 = ((Number(windscroll) * 0.2) + 30)
      _y3 = ((Number(windscroll) * 0.1) + 50)
      _x2 = ((Number(windscroll) * 0.1) + 95)
      _x1 = ((Number(windscroll) * -0.1) - 145)
    //   _y2 = ((Number(windscroll) * 0.1) + 13)

    //   var clip2 = 'circle(57% at ' + (((Number(windscroll) * 0.1)) + 110) + 'px 65px)'

      $('#mountain3').css('left', _x3);
      $('#mountain3').css('bottom', _y3);
      $('#mountain2').css('left', _x2);
      $('#mountain1').css('left', _x1);
    //   //$('#mountain2').css('bottom', _y2);
    //   $('#mountain2').css('clip-path', clip2);
    } else {
      
    }
});
  
  
function smoothScroll(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 70
  }, 1000);
}

function removeNav(){
  $('#nav-check').prop('checked', false);
}

function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}