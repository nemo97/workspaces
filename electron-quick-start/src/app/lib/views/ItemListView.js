(function (App) {
    'use strict';

 var ItemListView = Backbone.Marionette.CollectionView.extend({
    childView: App.View.ItemView,
    className : 'itemListView' 
  });

  App.View.ItemListView = ItemListView;

})(window.App);