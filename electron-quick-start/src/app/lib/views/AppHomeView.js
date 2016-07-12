(function(App){
    'use strict';

    var AppHomeView = Backbone.Marionette.LayoutView.extend({
        template: '#main-window-tpl',

        id: 'main-window',

        regions: {
            ContentRegion : '#main'         
        },
        initialize : function(){     
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
            //alert("Here");
            App.Model.itemList = new App.Model.ItemList();
            for(var i=0;i<10;i++){
                var item = new App.Model.Item({title:"test "+i});
                App.Model.itemList.add(item);
            }
            this.ContentRegion.show(new App.View.ItemListView({collection : App.Model.itemList}));
        },
        workprogress: function(){
            
        }
      
    });

    App.View.AppHomeView = AppHomeView;

})(window.App);