 var 
    // browser window object
    win = remote.BrowserWindow ,

    // os object
    os = require('os'),

    // path object
    path = require('path'),

    // fs object
    fs = require('fs'),

    // url object
    url = require('url'),

    // i18n module (translations)
    i18n = require('i18n'),

    //moment = require('moment'),

    Q = require('q');


// for electron  ~/.{app name}
App.dataPath = app.getPath('userData');

// Special Debug Console Calls!
win.log = console.log.bind(console);

win.debug = function () {
    var params = Array.prototype.slice.call(arguments, 1);
    params.unshift('%c[%cDEBUG%c] %c' + arguments[0], 'color: black;', 'color: green;', 'color: black;', 'color: blue;');
    console.debug.apply(console, params);
};
win.info = function () {
    var params = Array.prototype.slice.call(arguments, 1);
    params.unshift('[%cINFO%c] ' + arguments[0], 'color: blue;', 'color: black;');
    console.info.apply(console, params);
};
win.warn = function () {
    var params = Array.prototype.slice.call(arguments, 1);
    params.unshift('[%cWARNING%c] ' + arguments[0], 'color: orange;', 'color: black;');
    console.warn.apply(console, params);
};
win.error = function () {
    var params = Array.prototype.slice.call(arguments, 1);
    params.unshift('%c[%cERROR%c] ' + arguments[0], 'color: black;', 'color: red;', 'color: black;');
    console.error.apply(console, params);
    fs.appendFileSync(path.join(App.dataPath, 'logs.txt'), '\n\n' + (arguments[0].stack || arguments[0])); // log errors;
};

/*
if (gui.App.fullArgv.indexOf('--reset') !== -1) {

    var data_path = require('nw.gui').App.dataPath;

    localStorage.clear();

    fs.unlinkSync(path.join(data_path, 'data/watched.db'), function (err) {
        if (err) {
            throw err;
        }
    });
    fs.unlinkSync(path.join(data_path, 'data/movies.db'), function (err) {
        if (err) {
            throw err;
        }
    });
    fs.unlinkSync(path.join(data_path, 'data/bookmarks.db'), function (err) {
        if (err) {
            throw err;
        }
    });
    fs.unlinkSync(path.join(data_path, 'data/shows.db'), function (err) {
        if (err) {
            throw err;
        }
    });
    fs.unlinkSync(path.join(data_path, 'data/settings.db'), function (err) {
        if (err) {
            throw err;
        }
    });

}
*/


// set database
App.db = Database;

App.addRegions({
    Window: '.main-window-region'
});

var initTemplates = function () {
    // Load in external templates
    var ts = [];

    _.each(document.querySelectorAll('[type="text/x-template"]'), function (el) {
        var d = Q.defer();
        $.get(el.src, function (res) {
            el.innerHTML = res;
            d.resolve(true);
        });
        ts.push(d.promise);
    });

    return Q.all(ts);
};

var initApp = function () {
    var mainWindow = new App.View.AppHomeView();
    //win.show();

    try {
        App.Window.show(mainWindow);
    } catch (e) {
        console.error('Couldn\'t start app: ', e, e.stack);
    }
};

App.addInitializer(function (options) {
    initTemplates()
        .then(initApp);
});





