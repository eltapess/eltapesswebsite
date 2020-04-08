 var $nav = $(".fixed-top");
 if ((window.innerHeight + window.scrollY) >= $nav.height()) {
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
}

$(function () {
  $(document).scroll(function () {
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  $('.img-link').magnificPopup({type:'image'});

});

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});


nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height+1
  }, 0);
  
  return false;
});
