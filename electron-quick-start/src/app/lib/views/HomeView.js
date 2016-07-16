(function (App) {
    'use strict';
    
    var HomeView = Backbone.Marionette.ItemView.extend({
      tagName: 'div',          
      template:'#home-template-tpl'
    });

    App.View.HomeView = HomeView;

})(window.App);