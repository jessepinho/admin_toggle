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
  if (typeof adminToggle.flag == 'undefined' ) {
    adminToggle.flag = true;
  }

  if (adminToggle.flag) {
    $(Drupal.settings.adminToggle.selector).hide();
  }
  else {
    $(Drupal.settings.adminToggle.selector).show();
  }

  adminToggle.flag = !adminToggle.flag;

  // Set a persistent toggle variable.
  var toggle = adminToggle.flag ? 1 : 0;
  $.post(
    Drupal.settings.basePath + 'admin_toggle/toggle',
    {admin_toggle: toggle}
  );
}

})(jQuery);

