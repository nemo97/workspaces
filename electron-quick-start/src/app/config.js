// Global App skeleton for backbone
var App = new Backbone.Marionette.Application();
_.extend(App, {
    Controller: {},
    View: {},
    Model: {},
    Page: {},
    Scrapers: {},
    Providers: {},
    Localization: {}
});


(function (App) {
    'use strict';

    var Config = {
        title: 'Test Apps',
        platform: process.platform,        
        basepath : '/home/subhas/dev_tools/VideoRepo',
        chapters : ['chapter01','chapter02','chapter03']
    };


    App.Config = Config;
})(window.App);
