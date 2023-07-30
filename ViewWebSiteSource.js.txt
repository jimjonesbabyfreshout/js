// ==UserScript==
// @name           view-page-source
// @namespace      view-page-source
// @include        http://*view-page-source*.*/*/*
// ==/UserScript==
var cookHtml,
    _cdiv,
    _divTag,
    _gdprMsg =
        "This website uses cookies to ensure the best possible experience for you. We'll assume you're ok with this, but you can opt-out if you wish.",
    _gdprBtn = "Accept",
    _gdprLink = "https://www.view-page-source.com/privacy/",
    _gdprDays = 30;
function setCookie(t, e, o) {
    var s = new Date(),
        o = (s.setTime(s.getTime() + 24 * o * 60 * 60 * 1e3), "expires=" + s.toUTCString());
    document.cookie = t + "=" + e + ";path=/; " + o;
}
function getCookie(t) {
    for (var e = t + "=", o = document.cookie.split(";"), s = 0; s < o.length; s++) {
        for (var i = o[s]; " " == i.charAt(0); ) i = i.substring(1);
        if (0 == i.indexOf(e)) return i.substring(e.length, i.length);
    }
    return "";
}
getCookie("cookieConsentAccepted") ||
    ((cookHtml =
        '<div id="gdpr-bar" class="gdpr_msg"><span>' +
        _gdprMsg +
        '<hr/><button id="yesCookie">' +
        _gdprBtn +
        '</button>&nbsp;&nbsp;&nbsp;<a target="_blank" href="' +
        _gdprLink +
        '">Privacy Policy</a></span></div>'),
    ((_cdiv = document.createElement("div")).id = "_cookieMessageDiv"),
    document.body.appendChild(_cdiv),
    ((_divTag = document.getElementById("_cookieMessageDiv")).innerHTML += cookHtml)),
    (window.onload = function () {
        var t = document.getElementById("yesCookie");
        t &&
            t.addEventListener("click", function () {
                setCookie("cookieConsentAccepted", "YES", _gdprDays), document.getElementById("gdpr-bar").remove();
            });
    });
