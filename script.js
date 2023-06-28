// ==UserScript==
// @name        TFOFastSearchBar
// @namespace   TFO
// @version     1.0
// @description -
// @author      Saymonn
// @match       https://sklep.telforceone.pl/pl-pl/*
// @icon        https://sklep.telforceone.pl/favicon.ico
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  var searchElements = document.getElementsByClassName('search');
  for (var i = 0; i < searchElements.length; i++) {
    searchElements[i].addEventListener('click', function(event) {
      event.stopPropagation();
      if (this.classList.contains('search--open')) {
        this.classList.remove('search--open');
      }
    });
  }

  var bodyElement = document.querySelector('body');
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (bodyElement.classList.contains('bluSea')) {
        bodyElement.classList.remove('bluSea');
      }
    });
  });

  var config = { attributes: true, attributeFilter: ['class'] };

  observer.observe(bodyElement, config);
})();
