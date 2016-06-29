(function(App){
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#todoapp',
        initialize: function () {
            this.input = this.$('#new-todo');
            //this.clear = this.$('#clear-all');
            // when new elements are added to the collection render then with addOne
            App.Model.todoList = new App.Model.TodoList()
            App.Model.todoList.on('add', this.addOne, this);
            App.Model.todoList.on('reset', this.addAll, this);
            App.Model.todoList.on('destroy', this.addAll, this);
            App.Model.todoList.fetch(); // Loads list from local storage
       },
      events: {
        'keypress #new-todo': 'createTodoOnEnter',
        'click #clear-all': 'clearall'
      },
      clearall: function(){

        var length = App.Model.todoList.length;
        for (var i = 0; i < length; i++) {
            App.Model.todoList.at(0).destroy();
        }

      },
      createTodoOnEnter: function(e){
        if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
          return;
        }
        console.log("is exists "+App.Model.todoList.where(this.newAttributes()));

        App.Model.todoList.create(this.newAttributes());
        //app.todoList.add(this.newAttributes());
        this.input.val(''); // clean input box
      },
      addOne: function(todo){
        var view = new App.View.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
      },
      addAll: function(){
        this.$('#todo-list').html(''); // clean the todo list
        App.Model.todoList.each(this.addOne, this);
      },
      newAttributes: function(){
        return {
          title: this.input.val().trim(),
          completed: false
        }
      }
    });

    App.View.AppView = AppView;

})(window.App);