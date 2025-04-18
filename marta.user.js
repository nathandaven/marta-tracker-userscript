// ==UserScript==
// @name         MARTA PWA

// @namespace    https://tracker.itsmarta.com/
// @version      0.1
// @author       nathandaven
// @description  add marta tracker as PWA
// @match        https://tracker.itsmarta.com/
// @match        https://tracker.itsmarta.com/*
// @grant        none
// @license      BSD-2-Clause
// @downloadURL  https://raw.githubusercontent.com/nathandaven/marta-tracker-userscript/refs/heads/main/marta.user.js
// @updateURL    https://raw.githubusercontent.com/nathandaven/marta-tracker-userscript/refs/heads/main/marta.user.js
// @homepage     https://github.com/nathandaven/marta-tracker-userscript
// ==/UserScript==

document.head.innerHTML +=
  "<link rel=manifest href=https://api.lowtechguys.com/manif?name=MARTA%20Tracker>";

// document.head.innerHTML +=
//   "<link rel=manifest href=https://api.lowtechguys.com/manif?name=MARTA%20Tracker&icon=https%3A%2F%2Fwww.logotypes101.com%2Flogos%2F834%2FDFE8603B0455997D7A89687B92D3F76E%2Fmarta-bus-train-transportation.png>";
