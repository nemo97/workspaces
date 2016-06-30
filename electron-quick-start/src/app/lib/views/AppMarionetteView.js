(function(App){
    'use strict';

    var AppView = Backbone.Marionette.LayoutView.extend({
        template: '#main-window-tpl',

        id: 'main-window',

        regions: {
            TotoList: '#todo-list'         
        },
        initialize : function(){
            App.Model.todoList = new App.Model.TodoList()            
            App.Model.todoList.fetch(); // Loads list from local storage
        },
        onShow: function () {
          if(App.Model.todoList.length > 0){
            var todoView = new App.View.TodoViewList({collection:App.Model.todoList});
            this.TotoList.show(todoView); 
          }          
          
        }

    });

    App.View.AppView = AppView;

})(window.App);