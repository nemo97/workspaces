(function (App) {
    'use strict';

    var Player = Backbone.Model.extend({
        defaults: {
          src: '',
          type: '',
          chapterId:'',
          fileId:''           
        }
      });

    App.Model.Player = Player;

})(window.App);