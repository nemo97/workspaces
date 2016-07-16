(function(App){
    'use strict';

    var AppHomeView = Backbone.Marionette.LayoutView.extend({
        template: '#main-window-tpl',

        id: 'main-window',

        regions: {
            ContentRegion : '#main'         
        },
        initialize : function(){
            // application event listeners
            App.vent.on('show:home', _.bind(this.showHome, this)); 
            App.vent.on('show:chapter', _.bind(this.showChapter, this));
            //this.ContentRegion.show(new App.View.HomeView());    
        },
        onShow: function () {
            App.vent.trigger('show:home');
        },
        ui: {
          freshstart: '#freshstart',
          workprogress: '#workprogress',
          homebtn: '#homebtn',
          nextbtn: '#nextbtn'          
        },
        
        events:{
            'click @ui.freshstart' : 'freshStart',
            'click @ui.workprogress' : 'workprogress',
            'click @ui.homebtn' : 'goHome',
            'click @ui.nextbtn' : 'goNext'            
        },
        goHome : function(){
             App.vent.trigger('show:home');
        },
        goNext : function(){

        },        
        freshStart: function(){            
             var firstChapter = App.Config.chapters[0];
             this.loadChapterContent(firstChapter);

        },
        workprogress: function(){
            
        },
        showHome : function(e) {
            this.ContentRegion.show(new App.View.HomeView());
        },
        showChapter : function(e) {

            this.ContentRegion.show(new App.View.ItemListView({collection : App.Model.itemList}));
        },

        loadChapterContent : function(chapterObj){

             if(!chapterObj){
                 console.log("chapter param is blank "+chapterName);                 
             }
             else{
                var repoPath = App.Config.getContentPath(chapterObj.name);
                
                App.Model.itemList = new App.Model.ItemList();
                App.Utils.getFiles(repoPath).then(function (fileNames){
                    
                    _.each(fileNames, function (file){
                            console.log("file name "+file);
                            var item = new App.Model.Item({title:"fileName "+file});
                            App.Model.itemList.add(item);
                    });
                    
                    App.vent.trigger('show:chapter');
                });
             }
        }
      
    });

    App.View.AppHomeView = AppHomeView;

})(window.App);