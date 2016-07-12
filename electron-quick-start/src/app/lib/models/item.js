(function (App) {
    'use strict';

    var Item = Backbone.Model.extend({
        defaults: {
          title: 'test',
          completed: false
        }
      });

    App.Model.Item = Item;

})(window.App);