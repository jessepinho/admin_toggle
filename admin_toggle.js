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

  // Define elements that may contain only toggle-able items, so that they can
  // also be hidden when all their children are hidden.
  var elements = [
    '.action-links',
    '.block.block-system.block-menu'
  ];

  if (adminToggle.flag) {
    $(Drupal.settings.adminToggle.selector).hide(0, function() {
      for (i in elements) {
        if ($(elements[i]).not(':has(a:visible)').length) {
          $(elements[i]).hide();
        }
      }
    });
  }
  else {
    $(Drupal.settings.adminToggle.selector).show(0, function() {
      for (i in elements) {
        if ($(elements[i]).filter(':not(:has(a:visible))').length) {
          console.log($(elements[i]).filter(':not(:has(a:visible))'));
          $(elements[i]).show();
        }
      }
    });
  }

  adminToggle.flag = !adminToggle.flag;
}

})(jQuery);

