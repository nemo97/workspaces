(function (App) {
    'use strict';

    // renders individual todo items list (li)
    var ItemView = Backbone.Marionette.ItemView.extend({
      tagName: 'li',    
      template:'#item-template'
    });

    App.View.ItemView = ItemView;

})(window.App);