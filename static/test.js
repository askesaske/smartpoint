(function (d, w, c) {
  (w[c] = w[c] || []).push(function () {
    try {
      w.SpaceinWidget = Spacein.init(1);
    } catch (e) {
    }
  });
  var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
    n.parentNode.insertBefore(s, n)
  };
  (w.opera === "[object Opera]") ? d.addEventListener("DOMContentLoaded", f, false) : f();
})(document, window, "spacein_cb");

