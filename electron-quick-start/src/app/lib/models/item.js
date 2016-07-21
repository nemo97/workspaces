(function (App) {
    'use strict';

    var Item = Backbone.Model.extend({
        defaults: {
          title: '',
          index: '',
          filename:'',
          chapterId:''           
        }
      });

    App.Model.Item = Item;

})(window.App);