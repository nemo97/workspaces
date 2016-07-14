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
        chapters : ['chapter01','chapter02','chapter03'],

        getContentPath : function(chapter) {
            var isValid = false;
            for(var i=0;i<this.chapters.length;i++){
                if(this.chapters[i] == chapter){
                    isValid = true;
                    break;
                }
            }
            if(isValid){
                return this.basepath +"/"+ chapter;
            }
            return '';
        }  
    };

    App.Config = Config;
})(window.App);
