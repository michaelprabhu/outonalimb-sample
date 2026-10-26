/* Progressive enhancement only.
   Every link, section and contact detail works without this file. */

(function () {
  "use strict";

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      var id = link.getAttribute("href").slice(1);
      if (!id) return;

      var target = document.getElementById(id);
      if (!target) return;

      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }
      try {
        target.focus({ preventScroll: true });
      } catch (err) {
        target.focus();
      }
    });
  });
})();
