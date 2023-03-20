/**
 * @file
 * Attaches behaviors for Event Livestreams.
 */
(function (Drupal, drupalSettings) {
  /**
   * Shows related description and link when livestream is active.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the Livestream behaviors.
   */
  Drupal.behaviors.liveStreamDiscloser = {
    attach: function attach(context) {
      setTimeout(function () {
        Array.prototype.forEach.call(document.querySelectorAll('[data-livestream-element]'), function (element) {
          element.classList.remove('ecl-u-d-none');
        });
      }, drupalSettings.oe_theme_content_event.livestream_start_timestamp - Date.now())
    },
  };
})(Drupal, drupalSettings);
