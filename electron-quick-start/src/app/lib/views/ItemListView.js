/*(function (App) {
    'use strict';

 var ItemListView = Backbone.Marionette.CollectionView.extend({
    tagName: 'div',
    childView: App.View.ItemView,
    className : 'itemListView row' 
  });

  App.View.ItemListView = ItemListView;

})(window.App);
*/

(function (App) {
    'use strict';

 var ItemListView = Backbone.Marionette.CompositeView.extend({
    tagName: 'div',
    template:'#chapter-template-tpl',
    childView: App.View.ItemView,
    className : 'itemListView',
    modelEvents: {
      "change": "modelChanged"
    },
    childViewContainer: function(){
      return "#items"
    }, 
    modelChanged: function() {
      console.log("model changed ");
      this.render();
    }
  });

  App.View.ItemListView = ItemListView;

})(window.App);