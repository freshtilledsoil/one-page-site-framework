$(document).ready(function(){ // load scripts once document is ready

  // assign window height to introduction =================================================================== //
  $(function(){
    $('section#introduction').css({'height':(($(window).height())-190)+'px'});
    $(window).resize(function(){
    $('section#introduction').css({'height':(($(window).height())-190)+'px'});
    });
  });



  // scrollTo behavior ====================================================================================== //
  $("nav").onePageNav();
  // $("a.link-class").localScroll(); //use this for standalone links outside nav




}); // close document.ready function. add any new script before this line
