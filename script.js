var objectShow = false;
var digitalShow = false;
var archiShow = false;


//jquery
$(document).ready(function(){

  // change type
  $('#objectButton').hover(function(){
    $(this).css({'cursor': 'pointer'});
    if(!objectShow){
    $('#objectText').toggleClass('invisible');
    }
  })

  $('#objectButton').click(function(){
    console.log('clicked');
    objectShow = true;
    digitalShow = false;
    archiShow = false;

    $('#objectText').removeClass('invisible');
    $('#archiText').addClass('invisible');
    $('#digitalText').addClass('invisible');
    $('#objectBgs').fadeIn(2000);
    $('#digitalBgs').fadeOut(2000);
    $('#archiBgs').fadeOut(2000);
  })

  $('#digitalButton').hover(function(){
    $(this).css({'cursor': 'pointer'});
    if(!digitalShow){
      $('#digitalText').toggleClass('invisible');
    }
  })

  $('#digitalButton').click(function(){
    objectShow = false;
    digitalShow = true;
    archiShow = false;
    $('#objectText').addClass('invisible');
    $('#archiText').addClass('invisible');
    $('#digitalText').removeClass('invisible');
    $('#objectBgs').fadeOut(2000);
    $('#digitalBgs').fadeIn(2000);
    $('#archiBgs').fadeOut(2000);
  })

  $('#archiButton').hover(function(){
    $(this).css({'cursor': 'pointer'});
    if(!archiShow){
      $('#archiText').toggleClass('invisible');
    }
  })

  $('#archiButton').click(function(){
    objectShow = false;
    digitalShow = false;
    archiShow = true;
    $('#objectText').addClass('invisible');
    $('#archiText').removeClass('invisible');
    $('#digitalText').addClass('invisible');
    $('#objectBgs').fadeOut(2000);
    $('#digitalBgs').fadeOut(2000);
    $('#archiBgs').fadeIn(2000);
  })

  // object change background
  $(document).scroll(function(){
    var windowHeight = $(window).height();
    var currScrollHeight = $(document).scrollTop();

    if(currScrollHeight >= windowHeight && currScrollHeight < windowHeight*2 && objectShow ){
       $('#object1').fadeOut(1000);
       $('#object2').fadeIn(1000);
    }else if(currScrollHeight < windowHeight){
      $('#object1').fadeIn(1000);
      $('#object2').fadeOut(1000);
    }

    if(currScrollHeight >= windowHeight*2 && objectShow){
       $('#object2').fadeOut(1000);
       $('#object3').fadeIn(1000);
    }else if(currScrollHeight > windowHeight){
      $('#object2').fadeIn(1000);
      $('#object3').fadeOut(1000);
    }
  })


  // Archi change background
  $(document).scroll(function(){
    var windowHeight = $(window).height();
    var currScrollHeight = $(document).scrollTop();

    if(currScrollHeight >= windowHeight/5 && archiShow){
       $('#archi1').fadeOut(1000);
       $('#archi2').fadeIn(1000);
    }else {
      $('#archi1').fadeIn(1000);
      $('#archi2').fadeOut(1000);
    }
  })




});
