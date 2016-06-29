(function (App) {
    'use strict';

    var _this;

    var MainWindow = Backbone.Marionette.LayoutView.extend({
        template: '#main-window-tpl',

        id: 'main-window',

        regions: {
            Header: '#header'            
        },

        ui: {
            posterswidth_alert: '.notification_alert'
        },

        events: {
            'dragover': 'preventDefault',
            'drop': 'preventDefault',
            'dragstart': 'preventDefault',
            'click .links': 'links'
        },

        initialize: function () {
            _this = this;

            _.each(_this.regionManager._regions, function (element, index) {

                element.on('show', function (view) {
                    if (view.className && App.ViewStack[0] !== view.className) {
                        App.ViewStack.push(view.className);
                    }
                    App.vent.trigger('viewstack:push', view.className);
                });

                /**
                 * Marionette 2.x changed close to destroy, and doesn't pass along a view anymore.
                 * TODO: Find better solution
                 */
                element.on('destroy', function (view) {
                    if (typeof view === 'undefined' && element.currentView !== null) {
                        view = element.currentView;
                    }
                    var viewName = (typeof view !== 'undefined' ? view.className : 'unknown');
                    App.ViewStack.pop();
                    App.vent.trigger('viewstack:pop', viewName);
                    if (typeof element.currentView !== 'undefined') {
                        element.currentView.destroy();
                    }
                    if (!App.ViewStack[0]) {
                        App.ViewStack = ['main-browser'];
                    }
                });

            });

            this.nativeWindow = require('nw.gui').Window.get();

           
        },

        showSubtitles: function (model) {
            win.debug('Show subtitles', model);
            var s = new App.View.Subtitles({
                model: model
            });
            s.render();
        },

        onShow: function () {
            this.Header.show(new App.View.TitleBar());
            // Set the app title (for Windows mostly)
            this.nativeWindow.title = App.Config.title;

            // Show loading modal on startup
            var that = this;
            this.Content.show(new App.View.InitModal());
            App.db.initialize()
                .then(function () {

                    // Create the System Temp Folder. This is used to store temporary data like movie files.
                    if (!fs.existsSync(Settings.tmpLocation)) {
                        fs.mkdir(Settings.tmpLocation, function (err) {
                            if (!err || err.errno === '-4075') {
                                //success
                            } else {
                                Settings.tmpLocation = path.join(os.tmpDir(), 'Popcorn-Time');
                                fs.mkdir(Settings.tmpLocation);
                            }
                        });
                    }

                    try {
                        require('fs').statSync('src/app/themes/' + Settings.theme + '.css');
                    } catch (e) {
                        Settings.theme = 'Official_-_Dark_theme';
                        AdvSettings.set('theme', 'Official_-_Dark_theme');
                    }

                    $('link#theme').attr('href', 'themes/' + Settings.theme + '.css');
                    // Always on top
                    win.setAlwaysOnTop(App.settings.alwaysOnTop);

                    // we check if the disclaimer is accepted
                    if (!AdvSettings.get('disclaimerAccepted')) {
                        that.showDisclaimer();
                    }

					// we check if the register is accepted
                    if (AdvSettings.get('rememberRegister')) {// || !AdvSettings.get('registerTorrents')
                        that.showRegister();
                    }

                    that.InitModal.destroy();

                    var lastOpen = (Settings.startScreen === 'Last Open') ? true : false;

                    if (Settings.startScreen === 'Watchlist' || (lastOpen && Settings.lastTab === 'Watchlist')) {
                        that.showWatchlist();
                    } else if (Settings.startScreen === 'Favorites' || (lastOpen && Settings.lastTab === 'Favorites')) {
                        that.showFavorites();
                    } else if (Settings.startScreen === 'Torrent-collection' || (lastOpen && Settings.lastTab === 'Torrent-collection')) {
                        that.showMovies(); //needed because Torrentcollection isnt a real collection
                        that.showTorrentCollection();
                    } else if (Settings.startScreen === 'TV Series' || (lastOpen && Settings.lastTab === 'TV Series')) {
                        that.showShows();
                    } else if (Settings.startScreen === 'Anime' || (lastOpen && Settings.lastTab === 'Anime')) {
                        that.showAnime();
                    } else {
                        that.showMovies();
                    }

                    // do we celebrate events?
                    if (AdvSettings.get('events')) {
                        $('.events').css('display', 'block');
                    }

                    // set player from settings
                    var players = App.Device.Collection.models;
                    for (var i in players) {
                        if (players[i].id === AdvSettings.get('chosenPlayer')) {
                            App.Device.Collection.setDevice(AdvSettings.get('chosenPlayer'));
                        }
                    }

                    // Focus the window when the app opens
                    that.nativeWindow.focus();

                });

            // Cancel all new windows (Middle clicks / New Tab)
            this.nativeWindow.on('new-win-policy', function (frame, url, policy) {
                policy.ignore();
            });

            App.vent.trigger('updatePostersSizeStylesheet');
            App.vent.trigger('main:ready');

        },

        showMovies: function (e) {
            this.Settings.destroy();
            this.MovieDetail.destroy();

            this.Content.show(new App.View.MovieBrowser());
        },

        showShows: function (e) {
            this.Settings.destroy();
            this.MovieDetail.destroy();

            this.Content.show(new App.View.ShowBrowser());
        },

        showAnime: function (e) {
            this.Settings.destroy();
            this.MovieDetail.destroy();

            this.Content.show(new App.View.AnimeBrowser());
        },

        updateShows: function (e) {
            var that = this;
            App.vent.trigger('show:closeDetail');
            this.Content.show(new App.View.InitModal());
            App.db.syncDB(function () {
                that.InitModal.destroy();
                that.showShows();
                // Focus the window when the app opens
                that.nativeWindow.focus();

            });
        },

        connectVpn: function (e) {
            App.VPNClient.launch();
        },

        // used in app to re-triger a api resync
        initShows: function (e) {
            var that = this;
            App.vent.trigger('settings:close');
            this.Content.show(new App.View.InitModal());
            App.db.initDB(function (err, data) {
                that.InitModal.destroy();

                if (!err) {
                    // we write our new update time
                    AdvSettings.set('tvshow_last_sync', +new Date());
                }

                App.vent.trigger('shows:list');
                // Focus the window when the app opens
                that.nativeWindow.focus();

            });
        },

        showFavorites: function (e) {
            this.Settings.destroy();
            this.MovieDetail.destroy();

            this.Content.show(new App.View.FavoriteBrowser());
        },

        renderFavorites: function (e) {
            this.Content.show(new App.View.FavoriteBrowser());
            App.currentview = 'Favorites';
            $('.right .search').hide();
            $('.filter-bar').find('.active').removeClass('active');
            $('#filterbar-favorites').addClass('active');
        },

        showWatchlist: function (e) {
            this.Settings.destroy();
            this.MovieDetail.destroy();

            var that = this;
            $('#nav-filters, .search, .items').hide();
            $('.spinner').show();

            function waitForSync() {
                if (!App.Trakt.syncTrakt.isSyncing()) {
                    that.Content.show(new App.View.WatchlistBrowser());
                } else {
                    setTimeout(waitForSync, 500);
                }
            }
            waitForSync();
        },

        showDisclaimer: function (e) {
            this.Disclaimer.show(new App.View.DisclaimerModal());
        },

		showRegister: function (e) {
            this.Register.show(new App.View.RegisterModal());
        },

        showAbout: function (e) {
            this.About.show(new App.View.About());
        },

        showTorrentCollection: function (e) {
            this.TorrentCollection.show(new App.View.TorrentCollection());
        },

        showKeyboard: function (e) {
            this.Keyboard.show(new App.View.Keyboard());
        },

        toggleKeyboard: function (e) {
            if ($('.keyboard-container').length > 0) {
                App.vent.trigger('keyboard:close');
            } else {
                this.showKeyboard();
            }
        },

        showHelp: function (e) {
            this.Help.show(new App.View.Help());
        },

        toggleHelp: function (e) {
            if ($('.help-container').length > 0) {
                App.vent.trigger('help:close');
            } else {
                this.showHelp();
            }
        },

        showIssue: function (e) {
            this.Issue.show(new App.View.Issue());
        },

        preventDefault: function (e) {
            e.preventDefault();
        },

        showMovieDetail: function (movieModel) {
            this.MovieDetail.show(new App.View.MovieDetail({
                model: movieModel
            }));
        },

        closeMovieDetail: function (movieModel) {
            _this.MovieDetail.destroy();
            App.vent.trigger('shortcuts:list');
        },

        showNotification: function (notificationModel) {
            this.Notification.show(new App.View.Notification({
                model: notificationModel
            }));
        },

        closeNotification: function () {
            this.Notification.destroy();
        },

        showShowDetail: function (showModel) {
            this.MovieDetail.show(new App.View.ShowDetail({
                model: showModel
            }));
        },

        closeShowDetail: function (showModel) {
            _this.MovieDetail.destroy();
            App.vent.trigger('shortcuts:list');
        },

        showFileSelector: function (fileModel) {
            App.vent.trigger('about:close');
            App.vent.trigger('stream:stop');
            App.vent.trigger('player:close');
            this.FileSelector.show(new App.View.FileSelector({
                model: fileModel
            }));
        },

        showSettings: function (settingsModel) {
            this.Settings.show(new App.View.Settings({
                model: settingsModel
            }));
        },

        traktAuthenticated: function () {
            win.info('Trakt: authenticated');
            if (Settings.traktSyncOnStart && (Settings.traktLastSync + 1800000 < new Date().valueOf())) { //only refresh every 30min
                App.Trakt.sync.lastActivities()
                    .then(function (activities) { // check if new activities
                        var lastActivities = activities.movies.watched_at > activities.episodes.watched_at ? activities.movies.watched_at : activities.episodes.watched_at;
                        if (lastActivities > Settings.traktLastActivities) {
                            AdvSettings.set('traktLastActivities', lastActivities);
                            Database.deleteWatched();
                            App.Trakt.syncTrakt.all();
                        }
                    });
            }
        },

        tvstAuthenticated: function () {
            win.info('TVShow Time: authenticated');
        },

        streamStarted: function (stateModel) {

            // People wanted to keep the active
            // modal (tvshow/movie) detail open when
            // the streaming start.
            //
            // this.MovieDetail.destroy();
            //
            // uncomment previous line to close it

            this.Player.show(new App.View.Loading({
                model: stateModel
            }));
        },

        streamReady: function (streamModel) {
            App.Device.Collection.startDevice(streamModel);
        },

        showPlayer: function (streamModel) {
            this.Player.show(new App.View.Player({
                model: streamModel
            }));
            this.Content.$el.hide();
            if (this.MovieDetail.$el !== undefined) {
                this.MovieDetail.$el.hide();
            }
        },

        showViews: function (streamModel) {
            this.Content.$el.show();
            try {
                this.MovieDetail.$el.show();

                var detailWin = this.MovieDetail.el.firstElementChild.classList[0];

                if (detailWin === 'shows-container-contain') {
                    App.vent.trigger('shortcuts:shows');
                    App.ViewStack = ['main-browser', 'shows-container-contain', 'app-overlay'];
                } else {
                    App.vent.trigger('shortcuts:movies');
                    App.ViewStack = ['main-browser', 'movie-detail', 'app-overlay'];
                }
            } catch (err) {
                App.ViewStack = ['main-browser', 'app-overlay'];
            }
            $(window).trigger('resize');
        },

        updatePostersSizeStylesheet: function () {

            var that = this;

            App.db.getSetting({
                    key: 'postersWidth'
                })
                .then(function (doc) {
                    var postersWidth = doc.value;
                    var postersHeight = Math.round(postersWidth * Settings.postersSizeRatio);
                    var postersWidthPercentage = (postersWidth - Settings.postersMinWidth) / (Settings.postersMaxWidth - Settings.postersMinWidth) * 100;
                    var fontSize = ((Settings.postersMaxFontSize - Settings.postersMinFontSize) * postersWidthPercentage / 100) + Settings.postersMinFontSize;

                    var stylesheetContents = [
                        '.list .items .item {',
                        'width:', postersWidth, 'px;',
                        '}',

                        '.list .items .item .cover,',
                        '.load-more {',
                        'background-size: cover;',
                        'width: ', postersWidth, 'px;',
                        'height: ', postersHeight, 'px;',
                        '}',

                        '.item {',
                        'font-size: ' + fontSize + 'em;',
                        '}'
                    ].join('');

                    $('#postersSizeStylesheet').remove();

                    $('<style>', {
                        'id': 'postersSizeStylesheet'
                    }).text(stylesheetContents).appendTo('head');

                    // Copy the value to Settings so we can get it from templates
                    Settings.postersWidth = postersWidth;

                    // Display PostersWidth
                    var humanReadableWidth = Number(postersWidthPercentage + 100).toFixed(0) + '%';
                    if (typeof App.currentview !== 'undefined') {
                        that.ui.posterswidth_alert.show().text(i18n.__('Posters Size') + ': ' + humanReadableWidth).delay(3000).fadeOut(400);
                    }
                    $('.cover-image').css('width', Settings.postersWidth);
                });
        },

        links: function (e) {
            e.preventDefault();
            gui.Shell.openExternal($(e.currentTarget).attr('href'));
        },

        restartPopcornTime: function () {
            var spawn = require('child_process').spawn,
                argv = gui.App.fullArgv,
                CWD = process.cwd();

            argv.push(CWD);
            spawn(process.execPath, argv, {
                cwd: CWD,
                detached: true,
                stdio: ['ignore', 'ignore', 'ignore']
            }).unref();
            gui.App.quit();
        }
    });

    App.View.MainWindow = MainWindow = MainWindow;
})(window.App);
