(function (App) {
    'use strict';

    var Chapter = Backbone.Model.extend({
        defaults: {
          title: '',
          description:''          
        }
      });

    App.Model.Chapter = Chapter;

})(window.App);