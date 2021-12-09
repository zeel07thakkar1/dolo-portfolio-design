$(document).ready(function () {
    $('.menu-btn').click(function (e) { 
       $('.side-nav').toggleClass('right_0');
        
    });

    $(".img_gallery_link").click(function(){

      event.preventDefault();
  	  var my_class=$(this).addClass('current');
  	  $('.img_gallery_link').not(my_class).removeClass('current');
      
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          $('.gallery_img_div').fadeTo('slow',1);
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".gallery_img_div").not('.'+value).fadeOut('1000');
          $('.gallery_img_div').filter('.'+value).fadeIn('1000');
          
      }
  });
	
    $('.progress-circle1').circleProgress({
        value: 0.80,
        size: 100.0,
        thickness: 5,
        lineCap:'round',
        fill: {
          gradient: ['#3aeabb', '#fdd250'] 
        },
    });

        $('.progress-circle2').circleProgress({
            value: 0.60,
            size: 100.0,
            thickness: 5,
            lineCap:'round',
            fill: {
              gradient: ['#3aeabb', '#fdd250'] 
            },
        });

        $('.progress-circle3').circleProgress({
            value: 0.70,
            size: 100.0,
            thickness: 5,
            lineCap:'round',
            fill: {
              gradient: ['#3aeabb', '#fdd250'] 
            },
        });

        $('.progress-circle4').circleProgress({
            value: 0.75,
            size: 100.0,
            thickness: 5,
            lineCap:'round',
            fill: {
              gradient: ['#3aeabb', '#fdd250'] 
            },
        });

        $('.progress-circle5').circleProgress({
            value: 0.80,
            size: 100.0,
            thickness: 5,
            lineCap:'round',
            fill: {
              gradient: ['#3aeabb', '#fdd250'] 
            },
        });

});