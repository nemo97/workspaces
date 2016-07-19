// Global App skeleton for backbone
// 
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
        chapters : [
                    {
                     name:'chapter01',
                     seq:1,
                     description: "Test chapter 1",
                     path:'chapter01',
                     items: [
                         { index:1,description:'Introduction',filename:'Welcome.mp4'},
                         { index:2,description:'Welcome',filename:'Welcome1.mp4'}                         
                        ]
                    },
                    {
                        name:'chapter02',
                        seq:2,
                        description: "Test chapter 3",
                        path:'chapter02',
                        items: [
                         { index:1,description:'Greetings',filename:'Greetings.mp4'},
                         { index:2,description:'Greetings2',filename:'Greetings2.mp4'}                         
                        ] 
                    },
                    {
                        name:'chapter03',
                        seq:3,
                        description: "Test chapter 3",
                        path:'chapter03',
                        items: [
                         { index:1,description:'Testing',filename:'MoreUsefulExpressions.mp4'}
                        ]  
                    }
                ],

        getContentPath : function(chapter) {
            var isValid = false;
            var path = '';
            for(var i=0;i<this.chapters.length;i++){
                if(this.chapters[i].name && this.chapters[i].name == chapter){
                    isValid = true;
                    path = this.chapters[i].path;
                    break;
                }
            }
            if(isValid){
                if(!path){
                    path = chapter;
                }
                return this.basepath +"/"+ path;
            }
            return '';
        }  
    };

    App.Config = Config;
})(window.App);
