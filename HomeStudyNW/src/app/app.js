
 var
    // browser window object
    gui = require('nw.gui'),
    // browser window object
    win = gui.Window.get(),
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
//App.dataPath = app.getPath('userData');

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

i18n.configure({
    locales: ['en', 'bn'],
    register: global,
    directory: './src/app/language'
});

// set database
App.db = Database;

App.settings = Settings;
//Keeps a list of stacked views
App.ViewStack = [];

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.capitalizeEach = function () {
    return this.replace(/\w*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};


App.addRegions({
    Window: '.main-window-region'
});

App.addInitializer(function (options) {
    // this is the 'do things with resolutions and size initializer
    var zoom = 0;

    var screen = window.screen;

    if (ScreenResolution.QuadHD) {
        zoom = 2;
    }
    /*
	if (ScreenResolution.UltraHD) {
		zoom = 4;
	}
	*/

    var width = parseInt(localStorage.width ? localStorage.width : Settings.defaultWidth);
    var height = parseInt(localStorage.height ? localStorage.height : Settings.defaultHeight);
    var x = parseInt(localStorage.posX ? localStorage.posX : -1);
    var y = parseInt(localStorage.posY ? localStorage.posY : -1);

    // reset app width when the width is bigger than the available width
    if (screen.availWidth < width) {
        win.info('Window too big, resetting width');
        width = screen.availWidth;
    }

    // reset app height when the width is bigger than the available height
    if (screen.availHeight < height) {
        win.info('Window too big, resetting height');
        height = screen.availHeight;
    }

    // reset x when the screen width is smaller than the window x-position + the window width
    if (x < 0 || (x + width) > screen.width) {
        win.info('Window out of view, recentering x-pos');
        x = Math.round((screen.availWidth - width) / 2);
    }

    // reset y when the screen height is smaller than the window y-position + the window height
    if (y < 0 || (y + height) > screen.height) {
        win.info('Window out of view, recentering y-pos');
        y = Math.round((screen.availHeight - height) / 2);
    }

    win.zoomLevel = zoom;
    win.resizeTo(width, height);
    win.moveTo(x, y);
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
    try {
        i18n.setLocale('bn');
        App.Window.show(mainWindow);
    } catch (e) {
        console.error('Couldn\'t start app: ', e, e.stack);
    }
};

App.addInitializer(function (options) {
    initTemplates()
        .then(initApp);
});

win.on('resize', function (width, height) {
    if(width){
        localStorage.width = Math.round(width);
    }
    if(height){
        localStorage.height = Math.round(height);
    }
    
});

win.on('move', function (x, y) {
    if(x){
        localStorage.posX = Math.round(x);
    }
    if(y){
        localStorage.posY = Math.round(y);
    }
    
});
