(function (App) {
    'use strict';

    // renders individual  (li)
    var ItemView = Backbone.Marionette.ItemView.extend({
      tagName: 'div',
      className : 'itemView col-md-12',    
      template:'#item-template-tpl',

      initialize: function(){        
        App.vent.on('play:click', _.bind(this.play, this));
      },
      ui: {
          play: '.playbutton',        
      },        
      events:{
          'click @ui.play' : 'play',        
      },
      play : function(e){
        //e.preventDefault();
        console.log(".."+e.target.value);
        if(e.target.value){
            var arr = e.target.value.split("#");
            var src = App.Config.getFilePath(arr[0],arr[1]);
            App.Model.streamModel = new App.Model.Player({src:src,chapterId:arr[0],fileId:arr[1]});
            App.vent.trigger('stream:local');
        }
        
        //  let child = new BrowserWindow({parent: win, modal: true,
        //       show: true});
          
          //child.webContents.openDevTools() ;   
         //child.loadURL(`file://${__dirname}/src/app/player.html`);
          //child.loadURL('/home/subhas/workspaces/gitplaygrond/electron-quick-start/src/app/player.html');
         
         //child.once('ready-to-show', () => {
           //child.show()
         //});

        //App.vent.tr

      }
      /*,
      let child = new BrowserWindow({parent: top, modal: true, show: false})
child.loadURL('https://github.com')
child.once('ready-to-show', () => {
  child.show()
})


      handleVideoFile : function (file) {

        try {
            App.PlayerView.closePlayer();
        } catch (err) {
            // The player wasn't running
        }

        // streamer model
        var localVideo = new Backbone.Model({
            src: path.join(file.path),
            title: file.name,
            type: 'video/mp4',
            subtitle: {},
            defaultSubtitle: 'local',
            quality: false
        });
        //win.debug('Trying to play local file', localVideo.get('src'), localVideo.attributes);

        var tmpPlayer = App.Device.Collection.selected.attributes.id;
        App.Device.Collection.setDevice('local');
        App.vent.trigger('stream:ready', localVideo);
        App.Device.Collection.setDevice(tmpPlayer);
        $('.eye-info-player').hide();
     }      
      */

    });

    App.View.ItemView = ItemView;

    var TestView = Backbone.Marionette.ItemView.extend({
      tagName: 'div',          
      template:'#modal-view-template',

      initialize: function(){        
        
      },
    });

    App.View.TestView = TestView;


})(window.App);