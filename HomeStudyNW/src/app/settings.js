var Q = require('q'),
    os = require('os'),
    path = require('path'),
    _ = require('underscore'),
    data_path = require('nw.gui').App.dataPath;

/** Default settings **/
var Settings = {};

// User interface
Settings.language = '';


Settings.postersMinWidth = 134;
Settings.postersMaxWidth = 294;
Settings.postersMinFontSize = 0.8;
Settings.postersMaxFontSize = 1.3;
Settings.postersSizeRatio = (196 / 134);
Settings.postersWidth = Settings.postersMinWidth;
Settings.postersJump = [134, 154, 174, 194, 214, 234, 254, 274, 294];

//Playback
Settings.alwaysFullscreen = false;
Settings.playNextEpisodeAuto = true;
Settings.chosenPlayer = 'html5';

// Features
Settings.activateTorrentCollection = true;
Settings.activateFakeSkan = true;
Settings.activateAutoplay = false;
Settings.autoStoreTorrents = true;
Settings.activateWatchlist = false;
//Settings.activateFavorites = true;
//Settings.activateVpn = false;
//Settings.activateRandomize = false;
Settings.onlineSearchEngine = 'KAT';

// Ratio
Settings.totalDownloaded = 0;
Settings.totalUploaded = 0;

// App Settings
Settings.version = false;
Settings.dbversion = '0.1.0';
Settings.font = 'tahoma';
Settings.defaultWidth = Math.round(window.screen.availWidth * 0.8);
Settings.defaultHeight = Math.round(window.screen.availHeight * 0.8);

// Miscellaneous
Settings.playerSubPosition = '0px';
Settings.playerVolume = '1';
Settings.tv_detail_jump_to = 'next';
Settings.rememberRegister = true;


var ScreenResolution = {
    get SD() {
        return window.screen.width < 1280 || window.screen.height < 720;
    },
    get HD() {
        return window.screen.width >= 1280 && window.screen.width < 1920 || window.screen.height >= 720 && window.screen.height < 1080;
    },
    get FullHD() {
        return window.screen.width >= 1920 && window.screen.width < 2000 || window.screen.height >= 1080 && window.screen.height < 1600;
    },
    get UltraHD() {
        return window.screen.width >= 2000 || window.screen.height >= 1600;
    },
    get QuadHD() {
        return window.screen.width >= 3000 || window.screen.height >= 1800;
    },
    get Standard() {
        return window.devicePixelRatio <= 1;
    },
    get Retina() {
        return window.devicePixelRatio > 1;
    }
};
