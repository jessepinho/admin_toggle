<?php

/**
 * @file
 * Provide an admin UI for the Admin Toggle module.
 */

/**
 * Provide a settings form.
 */
function admin_toggle_admin_form($form, &$form_state) {
  $w = 0;

  $form['admin_toggle_key'] = array(
    '#type' => 'textfield',
    '#title' => t('Shortcut key'),
    '#description' => t('Type the key that will be used to toggle the visibility of admin items.'),
    '#maxlength' => 1,
    '#default_value' => variable_get('admin_toggle_key', '`'),
    '#weight' => $w++,
  );

  return system_settings_form($form);
}
