(function (App) {
    'use strict';

    var TodoList = Backbone.Collection.extend({
      model: App.Model.Todo,
      //url : '#'
      localStorage: new Store("backbone-todo")
    });

    App.Model.TodoList = TodoList;    

})(window.App);