(function (App) {
    'use strict';

    var ItemList = Backbone.Collection.extend({
      model: App.Model.Item,
      //url : '#'
      localStorage: new Store("backbone-todo")
    });

    App.Model.ItemList = ItemList;    

})(window.App);