(function(App){
    'use strict';

    var _this;
    
    var AppHomeView = Backbone.Marionette.LayoutView.extend({
        template: '#main-window-tpl',

        id: 'main-window',
        className : 'apphome',
        regions: {
            ContentRegion : '#main',
            Header : '#header'
                     
        },
         
        initialize : function(){
            
            _this = this;

            _.each(_this.regionManager._regions, function (element, index) {

                element.on('show', function (view) {
                    if (view.className && App.ViewStack[0] !== view.className) {
                        App.ViewStack.push(view.className);
                    }
                    App.vent.trigger('viewstack:push', view.className);
                });

                /**
                 * Marionette 2.x changed close to destroy, and doesn't pass along a view anymore.
                 * TODO: Find better solution
                 */
                element.on('destroy', function (view) {
                    
                    if (typeof view === 'undefined' && element.currentView !== null) {
                        view = element.currentView;
                    }
                    var viewName = (typeof view !== 'undefined' ? view.className : 'unknown');
                    App.ViewStack.pop();
                    App.vent.trigger('viewstack:pop', viewName);
                    if (typeof element.currentView !== 'undefined') {
                        element.currentView.destroy();
                    }
                    /*
                    if (!App.ViewStack[0]) {
                        App.ViewStack = ['main-browser'];
                    }*/
                });

            });

            // application event listeners
            App.vent.on('show:home', _.bind(this.showHome, this)); 
            App.vent.on('show:chapter', _.bind(this.showChapter, this));
            App.vent.on('close:chapter', _.bind(this.closeChapter, this));
            App.vent.on('viewstack:pop', _.bind(this.dummy, this));
            App.vent.on('viewstack:push', _.bind(this.dummy, this));
            App.vent.on('go:next', _.bind(this.goNext, this));
            App.vent.on('show:header', _.bind(this.showHeader, this)); 

            App.vent.on('stream:local', _.bind(this.showPlayer, this));
            //App.vent.on('player:close', _.bind(this.showViews, this));
            //App.vent.on('player:close', _.bind(this.Player.destroy, this.Player));
            //App.vent.on('test:dialog', _.bind(this.testPlayer, this));               
        },
        testPlayer: function () {
             console.log("Testing here testPlayer");
             var view = new App.View.TestView();
             view.render();

            var $modalEl = $("#player");
            $modalEl.html(view.el);
            $modalEl.modal();

        },
        showPlayer: function () {
             //var streamModel = new App.Model.Player({src:''});

            //  this.Player.show(new App.View.PlayerView({
            //      model: App.Model.streamModel
            //  }));
            // this.Content.$el.hide();
            // if (this.MovieDetail.$el !== undefined) {
            //     this.MovieDetail.$el.hide();
            // }
            var view = new App.View.PlayerView({
                model: App.Model.streamModel
            });
            view.render();
            
            var $modalEl = $("#player");
            $modalEl.html(view.el);
            $modalEl.dialog({modal: true,height: 600,width:800,buttons : [{text: "Close",icons: {primary: "ui-icon-heart"},
                                    click: function() {
                                        $( this ).dialog( "destroy" );
                                        //$modalEl.html.empty();
                                        view.destroy();
                                    }}]
                                });            
            console.log("Testing here");
        },

        showViews: function (streamModel) {
            this.ContentRegion.$el.show();
            // try {
            //     this.MovieDetail.$el.show();

            //     var detailWin = this.MovieDetail.el.firstElementChild.classList[0];

            //     if (detailWin === 'shows-container-contain') {
            //         App.vent.trigger('shortcuts:shows');
            //         App.ViewStack = ['main-browser', 'shows-container-contain', 'app-overlay'];
            //     } else {
            //         App.vent.trigger('shortcuts:movies');
            //         App.ViewStack = ['main-browser', 'movie-detail', 'app-overlay'];
            //     }
            // } catch (err) {
            //     App.ViewStack = ['main-browser', 'app-overlay'];
            // }
            // $(window).trigger('resize');
        },
        dummy : function(){

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
             this.Header.destroy();
             App.vent.trigger('close:chapter');
             App.vent.trigger('show:home');
        },
        showHeader : function(){
             this.Header.show(new App.View.HeaderMenuView());
        },        
        goNext : function(){
            var that = this;
            App.db.getProgrssRecord({"key":'lastaccess'}).then(function(result){
                //console.log("test "+result);
                
                var lastchapter = result.value;
                
                var nextChapter = null;
                //alert("here "+lastchapter);
                if(typeof lastchapter !== 'undefined'){

                    var id = lastchapter.seq;
                    //alert("here "+id);                    
                    nextChapter = _.find(App.Config.chapters,function(chapter){
                            return chapter.seq == (id+1);
                        });

                    //alert("here "+id);    
                               
                }

                if(!nextChapter){
                    nextChapter = App.Config.chapters[0];
                }
                //alert("here "+nextChapter.seq);
                that.loadChapterContent(nextChapter); 
            });    
        },        
        freshStart: function(){ 
             App.Model.chapter = new App.Model.Chapter();           
             App.Model.itemList = new App.Model.ItemList();
             var firstChapter = App.Config.chapters[0];
             this.loadChapterContent(firstChapter);             
             App.vent.trigger('show:chapter');
             //this.Header.show(new App.View.HeaderMenuView());
             App.vent.trigger('show:header');
        },
        workprogress: function(){
            var that = this;
            App.Model.chapter = new App.Model.Chapter();
            App.Model.itemList = new App.Model.ItemList();

            App.db.getProgrssRecord({"key":'lastaccess'}).then(function(result){

                var lastchapter = result.value;                
                var nextChapter = null;
                
                if(typeof lastchapter !== 'undefined'){
                    var id = lastchapter.seq;                    
                    nextChapter = _.find(App.Config.chapters,function(chapter){
                            return chapter.seq == id;
                        });    
                }

                if(!nextChapter){
                    nextChapter = App.Config.chapters[0];
                }                
                that.loadChapterContent(nextChapter);
                App.vent.trigger('show:chapter'); 
                App.vent.trigger('show:header');
            });

        },
        showHome : function(e) {
            this.ContentRegion.show(new App.View.HomeView());
        },
        showChapter : function(e) {
            //this.ContentRegion.destroy();
            //var item = new App.Model.Chapter(App.workingChapter);
            //this.ContentRegion.show(new App.View.ItemListView({collection : App.Model.itemList}));
            this.ContentRegion.show(new App.View.ItemListView({model:App.Model.chapter , collection : App.Model.itemList}));
        },
        closeChapter : function(e) {

            this.ContentRegion.destroy();
        },
        loadChapterContent : function(chapterObj){

             if(!chapterObj){
                 console.log("chapter param is blank "+chapterName);                 
             }
             else{
                var repoPath = App.Config.getContentPath(chapterObj.name);
                
                App.Model.itemList.reset();
                /*
                App.Utils.getFiles(repoPath).then(function (fileNames){
                    
                    _.each(fileNames, function (file,idx){
                            console.log("file name "+file);
                            var item = new App.Model.Item({title:"fileName "+file,index:(idx+1)});
                            App.Model.itemList.add(item);
                    });
                    App.db.writeProgress({"key":'lastaccess','value':chapterObj });
                    workingChapter = chapterObj;                    
                });
                */            
                
                _.each(chapterObj.items, function (item){
                        console.log("file name "+item.filename);
                        var item = new App.Model.Item({title:item.description,index:item.index,filename:item.filename,chapterId:chapterObj.seq});
                        App.Model.itemList.add(item);
                });
                App.db.writeProgress({"key":'lastaccess','value':chapterObj });
                App.Model.chapter.set({title : chapterObj.name});
                App.Model.chapter.set({ 'description' : chapterObj.description});                    
            
             }
        }
      
    });

    App.View.AppHomeView = AppHomeView;

})(window.App);