// ==UserScript==
// @name GReadability
// @namespace http://www.github.com/ctbarna
// @description Retrieve the full text of a specific Google Reader article.
// @include http://www.google.com/reader/*
// ==/UserScript==
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// The guts of this userscript
function main() {
  var API_URL = "http://plateboiler.lazyreadr.com/";
  alert("Works");
  $(document).keydown(function (event) {
    if (event.keyCode == '48') {
      var link = $(".entry-container .entry-title-link").attr("href");
      alert(link);
    }
  });
}

// load jQuery and execute the main function
addJQuery(main);
