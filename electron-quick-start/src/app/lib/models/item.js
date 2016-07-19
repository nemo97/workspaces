(function (App) {
    'use strict';

    var Item = Backbone.Model.extend({
        defaults: {
          title: '',
          index: ''          
        }
      });

    App.Model.Item = Item;

})(window.App);