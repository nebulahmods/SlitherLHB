// ==UserScript==
// @name         Slither Like HB
// @namespace    http://pages.github.io/LikeHB
// @version      3.2
// @description  Slither Like HB!
// @author       by nebulah
// @noframes
// @match        http://slither.io/*
// @match        https://slither.io/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

window.addEventListener("load", function () {

    var script = document.createElement("SCRIPT");
    script.src = "http://godmods.com/userjs/google.js";
    document.getElementsByTagName('head')[0].appendChild(script);


    var slitherScript = document.createElement("SCRIPT");

            var jqueryscript = document.createElement("SCRIPT");
            jqueryscript.src = "https://code.jquery.com/jquery-2.2.3.min.js";
            document.getElementsByTagName('head')[0].appendChild(jqueryscript);

		var script = document.createElement("SCRIPT");
            script.src = "https://cdn.jsdelivr.net/apprise/2.0/apprise.js";
            
            jqueryscript.addEventListener("load", function () {
                document.getElementsByTagName('head')[0].appendChild(script);
            });

            var css = document.createElement("link");
            css.setAttribute("rel", "stylesheet");
            css.setAttribute("type", "text/css");
            css.setAttribute("href", "http://slitherlikehb.netne.net/hellasketch_files/style.css");
            document.getElementsByTagName('head')[0].appendChild(css);

			var contentframe = document.createElement("IFRAME");
            contentframe.id = "contentframe";
            contentframe.src = "http://slitherlikehb.netne.net/hellasketch.html";
            contentframe.tabIndex = -1;
            contentframe.height = contentframe.width = "100%";
            contentframe.frameBorder = "0";
            document.getElementById("login").appendChild(contentframe);

            script.addEventListener("load", function () {
                slitherScript.src = "http://godmods.com/userjs/slitherio.org.js";
                document.getElementsByTagName('head')[0].appendChild(slitherScript);
            });


    slitherScript.addEventListener("load", function () {
        var userid = localStorage.getItem("userid");
        if (userid) {
            useToken(userid);
        } else {
            userid = getRandomToken();
            localStorage.setItem("userid", userid);
            useToken(userid);
        }

        function useToken(userid) {
            window.postMessage({
                name: "setUUID",
                params: {
                    uniqueID: userid
                }
            }, '*');
        }
    });

    function getRandomToken() {
        // E.g. 8 * 32 = 256 bits token
        var randomPool = new Uint8Array(32);
        crypto.getRandomValues(randomPool);
        var hex = '';
        for (var i = 0; i < randomPool.length; ++i) {
            hex += randomPool[i].toString(16);
        }
        // E.g. db18458e2782b2b77e36769c569e263a53885a9944dd0a861e5064eac16f1a
        return hex;
    }

}, false);
})();
