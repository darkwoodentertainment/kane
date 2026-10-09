(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // The labels this person refuses. Edit freely.
  var words = [
    "director", "creator", "brand", "persona", "genre",
    "writer", "artist", "trend", "category", "producer"
  ];
  var el = document.getElementById("word");
  if (el && !reduce) {
    var i = 0;
    setInterval(function () {
      el.classList.add("out");
      setTimeout(function () {
        i = (i + 1) % words.length;
        el.textContent = words[i];
        el.classList.remove("out");
      }, 350);
    }, 2400);
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
