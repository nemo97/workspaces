(function (App) {
    'use strict';

    // renders individual todo items list (li)
    var TodoView = Backbone.View.extend({
      tagName: 'li',
      template: _.template($('#item-template').html()),
      render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this; // enable chained calls
      }
    });

    App.View.TodoView = TodoView;

})(window.App);