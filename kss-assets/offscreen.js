(function () {

  // Define variables.
  var $toggleLink = $('.kss-offscreen__toggle');
  var $offscreen = $('.kss-offscreen');

  // Open the menu on page load.
  var toggleOpen = true;
  $offscreen.addClass('is-moved');
  $toggleLink.addClass('is-active').attr('aria-expanded', 'true');

  // Do the toggle.
  var toggleMenu = function () {
    if (toggleOpen) {
      $offscreen.removeClass('is-moved');
      $toggleLink.removeClass('is-active').attr('aria-expanded', 'false');
    }
    else {
      $offscreen.addClass('is-moved');
      $toggleLink.addClass('is-active').attr('aria-expanded', 'true');
    }
    toggleOpen = !toggleOpen;
  };

  $toggleLink.click(function () {
    toggleMenu();
    return false;
  });

  // Close the menu on on the templates section.
  var sectionTitle = $offscreen.find('h1.kss-title').text();
  if (sectionTitle.indexOf('Templates') >= 0) {
    toggleMenu();
  }

})();
