(function ($) {

Drupal.behaviors.adminToggle = {
  attach: function(context, settings) {
    $(document).keypress(function(e) {
      var unicode = e.keyCode ? e.keyCode : e.charCode;
      if (String.fromCharCode(unicode) == Drupal.settings.adminToggle.key) {
        adminToggle();
      }
    });
  }
};

function adminToggle() {
  $(Drupal.settings.adminToggle.selector).toggle();
}

})(jQuery);

