(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-QHS7ZWBH3V');

  var button = document.getElementById('theme-toggle');
  if (button) {
    function isDark() {
      var explicit = document.documentElement.getAttribute('data-theme');
      if (explicit === 'dark') return true;
      if (explicit === 'light') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function paint() {
      button.setAttribute('aria-pressed', isDark() ? 'true' : 'false');
    }

    button.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      paint();
    });
    paint();
  }

  document.addEventListener('click', function (event) {
    if (event.target.closest('a[href^="mailto:"]')) {
      window.gtag('event', 'contact_email_click');
    }
  });
})();
