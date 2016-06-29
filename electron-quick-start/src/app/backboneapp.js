// Global App skeleton for backbone
var App = {};
_.extend(App, {
    Controller: {},
    View: {},
    Model: {},
    Page: {},
    Scrapers: {},
    Providers: {},
    Localization: {}
});


App.Todo = Backbone.Model.extend({
        defaults: {
          title: '',
          completed: false
        }
      });

   App.TodoList = Backbone.Collection.extend({
      model: App.Todo,
      //url : '#'
      localStorage: new Store("backbone-todo")
    });

    // instance of the Collection
    App.todoList = new App.TodoList();

    // renders individual todo items list (li)
    App.TodoView = Backbone.View.extend({
      tagName: 'li',
      template: _.template($('#item-template').html()),
      render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this; // enable chained calls
      }
    });

    // renders the full list of todo items calling TodoView for each one.
    App.AppView = Backbone.View.extend({
      el: '#todoapp',
      initialize: function () {
        this.input = this.$('#new-todo');
        //this.clear = this.$('#clear-all');
        // when new elements are added to the collection render then with addOne
        App.todoList.on('add', this.addOne, this);
        App.todoList.on('reset', this.addAll, this);
        App.todoList.on('destroy', this.addAll, this);
        App.todoList.fetch(); // Loads list from local storage
      },
      events: {
        'keypress #new-todo': 'createTodoOnEnter',
        'click #clear-all': 'clearall'
      },
      clearall: function(){

        var length = App.todoList.length;
        for (var i = 0; i < length; i++) {
            App.todoList.at(0).destroy();
        }

      },
      createTodoOnEnter: function(e){
        if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
          return;
        }
        console.log("is exists "+App.todoList.where(this.newAttributes()));

        App.todoList.create(this.newAttributes());
        //app.todoList.add(this.newAttributes());
        this.input.val(''); // clean input box
      },
      addOne: function(todo){
        var view = new App.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
      },
      addAll: function(){
        this.$('#todo-list').html(''); // clean the todo list
        App.todoList.each(this.addOne, this);
      },
      newAttributes: function(){
        return {
          title: this.input.val().trim(),
          completed: false
        }
      }
    });