
(function () {

    'use strict';

    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };

    function replaceTag (tag) {
        return tagsToReplace[tag] || tag;
    }

    function safe_tags_replace (str) {
        return str.replace(/[&<>]/g, replaceTag);
    }

    window.onload = function () {
        var targets = document.querySelectorAll('code');

        for (var i = 0; i < targets.length; i += 1) {
            targets[i].innerHTML = safe_tags_replace(targets[i].innerHTML);
        }
    };

}());
