(function (App) {
    'use strict';

    // renders individual todo items list (li)
    var TodoView = Backbone.Marionette.ItemView.extend({  
      tagName: 'li',    
      template:'#item-template'      
    });

    App.View.TodoView = TodoView;



 var TodoViewList = Backbone.Marionette.CollectionView.extend({
    childView: TodoView
  });

  App.View.TodoViewList = TodoViewList;

})(window.App);