(function (App) {
    'use strict';
    
    var HeaderMenuView = Backbone.Marionette.ItemView.extend({
      tagName: 'div',
      className : 'headermenu',          
      template:'#header-menu-tpl'
    });

    App.View.HeaderMenuView = HeaderMenuView;

})(window.App);