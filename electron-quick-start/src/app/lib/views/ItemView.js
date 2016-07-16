(function (App) {
    'use strict';

    // renders individual  (li)
    var ItemView = Backbone.Marionette.ItemView.extend({
      tagName: 'li',    
      template:'#item-template'
    });

    App.View.ItemView = ItemView;

})(window.App);