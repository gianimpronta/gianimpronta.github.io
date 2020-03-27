!(function($) {
  "use strict";

  $(document).on('click', '.mobile-nav-toggle', function () {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('fa-bars fa-times');
  });

  $(document).click(function(e) {
    let container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      let body = $('body');
      if (body.hasClass('mobile-nav-active')) {
        body.removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      }
    }
  });
})(jQuery);