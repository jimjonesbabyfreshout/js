// ==UserScript==
// @name           extensionApi
// @namespace      extensionApi
// @include        http://*virtonomic*.*/*/*
// ==/UserScript==

const extensionApi =
    typeof browser === "object" &&
    typeof browser.runtime === "object" &&
    typeof browser.runtime.getManifest === "function"
        ? browser
        : typeof safari === "object" &&
          typeof safari.runtime === "object" &&
          typeof chrome.runtime.getManifest === "function"
        ? safari
        : console.log('Cannot find extensionApi under namespace "browser" or "safari"');
