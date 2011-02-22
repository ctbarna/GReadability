// ==UserScript==
// @name GReadability
// @namespace http://www.github.com/ctbarna
// @description Retrieve the full text of a specific Google Reader article.
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @include http://www.google.com/reader/*
// ==/UserScript==
var $;

// Add jQuery
(function(){
  if (typeof unsafeWindow.jQuery == 'undefined') {
    var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
        GM_JQ = document.createElement('script');

    GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    GM_JQ.type = 'text/javascript';
    GM_JQ.async = true;

    GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
  }
  GM_wait();
})();

// Check if jQuery's loaded
function GM_wait() {
  if (typeof unsafeWindow.jQuery == 'undefined') {
    window.setTimeout(GM_wait, 100);
  } else {
    $ = unsafeWindow.jQuery.noConflict(true);
    letsJQuery();
  }
}

// All your GM code must be inside this function
function letsJQuery() {
  var API_URL = "http://plateboiler.lazyreadr.com/";

  $(document).keydown(function (event) {
    if (event.keyCode == '48') {
      var link = $(".entry-container .entry-title-link").attr("href");
      alert(link);
    }
  });
}
