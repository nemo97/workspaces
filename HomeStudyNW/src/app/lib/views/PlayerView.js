(function (App) {
    'use strict';

    // renders individual  (li)
    var PlayerView = Backbone.Marionette.ItemView.extend({
      tagName: 'div',          
      template:'#player-tpl',

      initialize: function(){        
        
      },
      ui: {
                
      },        
      events:{
                
      },
      play : function(e){       
        //App.vent.trigger('stream:local');       
      }     

    });

    App.View.PlayerView = PlayerView;

})(window.App);