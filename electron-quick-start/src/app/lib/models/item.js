(function (App) {
    'use strict';

    var Item = Backbone.Model.extend({
        defaults: {
          title: ''          
        }
      });

    App.Model.Item = Item;

})(window.App);