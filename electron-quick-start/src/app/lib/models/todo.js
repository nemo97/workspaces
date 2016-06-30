(function (App) {
    'use strict';

    var Todo = Backbone.Model.extend({
        defaults: {
          title: 'test',
          completed: false
        }
      });

    App.Model.Todo = Todo;

})(window.App);