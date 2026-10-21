(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Touch screens have no hover: the first tap reveals the linked word, the second follows it
  var link = document.querySelector(".redact-link");
  if (link && window.matchMedia("(hover: none)").matches) {
    link.addEventListener("click", function (e) {
      if (!link.classList.contains("is-revealed")) {
        e.preventDefault();
        link.classList.add("is-revealed");
      }
    });
  }

  // Soft light that follows the cursor (mouse devices only)
  if (!reduce && window.matchMedia("(hover: hover)").matches) {
    var root = document.documentElement;
    window.addEventListener("pointermove", function (e) {
      root.style.setProperty("--x", e.clientX + "px");
      root.style.setProperty("--y", e.clientY + "px");
    }, { passive: true });
  }
})();
