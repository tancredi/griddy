
var version = require('./package.json').version;

var plugin = function () {
    return function (style) {
        style.include(__dirname);
    };
};

plugin.version = version;
plugin.path = __dirname;

module.exports = plugin;
