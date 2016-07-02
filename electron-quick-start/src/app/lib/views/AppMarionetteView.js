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
        ui: {
          todo: '#new-todo',
          clear: '#clear-all'          
       },
        // triggers: {
        //   'keypress @ui.todo': 'add:todo:item'
        // },
        events:{
            'keypress @ui.todo' : 'onAddTodoItem',
            'click @ui.clear' : 'clearTodoItem'
            //'keypress #new-todo' : 'onAddTodoItem'
        },
        onShow: function () {
          if(App.Model.todoList.length > 0){
            var todoView = new App.View.TodoViewList({collection:App.Model.todoList});
            this.TotoList.show(todoView); 
          }          
          
        },
        clearTodoItem: function(){
            var length = App.Model.todoList.length;
            for (var i = 0; i < length; i++) {
                App.Model.todoList.at(0).destroy();
            }
        },
        onAddTodoItem: function(e){
          //console.log("Key Pressed  "+e.which+" .."+this.ui.todo.val());
          if ( e.which !== 13 || !this.ui.todo.val().trim() ) { // ENTER_KEY = 13
            return;
          }
          console.log("Press enter ");
          console.log("is exists "+App.Model.todoList.where(this.newAttributes()));
          App.Model.todoList.create(this.newAttributes());
          this.ui.todo.val('');          
      },
      newAttributes: function(){
        return {
          title: this.ui.todo.val().trim(),
          completed: false
        }
      }

    });

    App.View.AppView = AppView;

})(window.App);