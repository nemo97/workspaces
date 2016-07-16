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
            App.vent.on('show:chapter', _.bind(this.showChapter, this));    
        },
        ui: {
          freshstart: '#freshstart',
          workprogress: '#workprogress'          
       },
        // triggers: {
        //   'keypress @ui.todo': 'add:todo:item'
        // },
        events:{
            'click @ui.freshstart' : 'freshStart',
            'click @ui.workprogress' : 'workprogress'            
        },        
        freshStart: function(){
            
            var firstChapter = App.Config.chapters[0];
            var repoPath = App.Config.getContentPath(firstChapter.name);
            /*
            App.Utils.getFiles(repoPath).then(function (fileNames){                
                App.Model.itemList = new App.Model.ItemList();
                for(var i=0;i<fileNames.length;i++){
                    var item = new App.Model.Item({title:"test "+i});
                    App.Model.itemList.add(item);
                }
                //alert("Here "+fileNames+" .."+fileNames.length);                
            });
            */
            /*
            var fileNames = App.Utils.getNormalFiles(repoPath);
            App.Model.itemList = new App.Model.ItemList();
            for(file in fileNames){
                var item = new App.Model.Item({title:file});
                App.Model.itemList.add(item);
                App.Model.itemList.add(item);
            }
            */
            /*
            App.Model.itemList = new App.Model.ItemList();
            var fs = require('fs'); 
            fs.readdir(repoPath, function(err,files){
                    if (err){
                        console.log("Error "+err);                        
                    }
                    else{
                        files.forEach( function (file,idx){
                            console.log("file name "+file);
                            var item = new App.Model.Item({title:"fileName "+file});
                            App.Model.itemList.add(item);
                        });
                        App.vent.trigger('show:chapter');    
                       //App.View.AppHomeView.showContentRegion(new App.View.ItemListView({collection : App.Model.itemList}));                         
                    }                    
            });
            */
            //this.ContentRegion.show(new App.View.ItemListView({collection : App.Model.itemList}));

             App.Model.itemList = new App.Model.ItemList();
             App.Utils.getFiles(repoPath).then(function (fileNames){
                
                fileNames.forEach( function (file,idx){
                        console.log("file name "+file);
                        var item = new App.Model.Item({title:"fileName "+file});
                        App.Model.itemList.add(item);
                  });
                
                App.vent.trigger('show:chapter');

                //alert("Here "+fileNames+" .."+fileNames.length);
                //this.ContentRegion.show(new App.View.ItemListView({collection : App.Model.itemList}));                
            }); 
            /*            
            for(var i=0;i<10;i++){
                var item = new App.Model.Item({title:"test" });
                App.Model.itemList.add(item);
            }*/
               
        },
        workprogress: function(){
            
        },
        showChapter : function(e) {

            this.ContentRegion.show(new App.View.ItemListView({collection : App.Model.itemList}));
        }
      
    });

    App.View.AppHomeView = AppHomeView;

})(window.App);