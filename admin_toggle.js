(function ($) {

Drupal.behaviors.adminToggle = {
  attach: function(context, settings) {
    // If the admin toggle is set to 0 (hidden) by default, then toggle all
    // admin items off.
    if (Drupal.settings.adminToggle.default == 0) {
      adminToggle(true);
    }

    // Bind toggling functionality to the keypress set the in admin area.
    $(document).keypress(function(e) {
      var unicode = e.keyCode ? e.keyCode : e.charCode;
      if (String.fromCharCode(unicode) == Drupal.settings.adminToggle.key) {
        adminToggle();
      }
    });
  }
};

function adminToggle(skipAnimation) {
  // Set a flag, so that we know which way to toggle.
  if (typeof adminToggle.flag == 'undefined' ) {
    adminToggle.flag = true;
  }

  if (adminToggle.flag) {
    if (skipAnimation) {
      $(Drupal.settings.adminToggle.selector).hide();
    }
    else {
      $(Drupal.settings.adminToggle.selector).fadeOut('fast');
    }
  }
  else {
    if (skipAnimation) {
      $(Drupal.settings.adminToggle.selector).show();
    }
    else {
      $(Drupal.settings.adminToggle.selector).fadeIn('fast');
    }
  }

  // Toggle the flag.
  adminToggle.flag = !adminToggle.flag;

  // Set a session toggle variable. This is done via POST for security reasons.
  var toggle = adminToggle.flag ? 1 : 0;
  $.post(
    Drupal.settings.basePath + 'admin_toggle/toggle',
    {admin_toggle: toggle}
  );
}

})(jQuery);
