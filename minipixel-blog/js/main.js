(function () {
  var root = document.documentElement;
  var THEME_KEY = "minipixel-theme";

  function setTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {}
  }

  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (_) {}
    if (saved === "dark") {
      setTheme("dark");
    }
  }

  function ensureToggle() {
    var toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      setTheme(isDark ? "light" : "dark");
      toggle.textContent = isDark ? "Tema" : "Tema";
    });
  }

  initTheme();
  document.addEventListener("DOMContentLoaded", ensureToggle);
})();

