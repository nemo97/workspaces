
const remote = require('electron').remote;
const app = remote.app;

var
async = require('async'),
    zlib = require('zlib'),
    Datastore = require('nedb'),
    path = require('path'),
    Q = require('q'),

    db = {},
    data_path = app.getPath('userData'),
    TTL = 1000 * 60 * 60 * 24;

//var startupTime = window.performance.now();
console.debug('Database path: ' + data_path);

process.env.TZ = 'America/New_York'; // set same api tz

db.progress = new Datastore({
    filename: path.join(data_path, 'data/progress.db'),
    autoload: true
});
db.settings = new Datastore({
    filename: path.join(data_path, 'data/settings.db'),
    autoload: true
});

function promisifyDatastore(datastore) {
    datastore.insert = Q.denodeify(datastore.insert, datastore);
    datastore.update = Q.denodeify(datastore.update, datastore);
    datastore.remove = Q.denodeify(datastore.remove, datastore);
}

promisifyDatastore(db.progress);
promisifyDatastore(db.settings);


// Create unique indexes for the various id's for shows and movies

db.progress.ensureIndex({
    fieldName: 'key',
    unique: true
});

// settings key uniqueness
db.settings.ensureIndex({
    fieldName: 'key',
    unique: true
});

var extractIds = function (items) {
    return _.pluck(items, 'imdb_id');
};

var extractMovieIds = function (items) {
    return _.pluck(items, 'movie_id');
};

// This utilizes the exec function on nedb to turn function calls into promises
var promisifyDb = function (obj) {
    return Q.Promise(function (resolve, reject) {
        obj.exec(function (error, result) {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
};

var Database = {
    
    getProgrssRecord: function (data) {
        return promisifyDb(db.progress.findOne({
            key: data.key
        }));
    },

    getProgress: function () {
        return promisifyDb(db.progress.find({}));
    },    

    // format: {key: key_name, value: settings_value}
    writeProgress: function (data) {
        return Database.getProgrssRecord({
                key: data.key
            })
            .then(function (result) {
                if (result) {
                    return db.progress.update({
                        'key': data.key
                    }, {
                        $set: {
                            'value': data.value
                        }
                    }, {});
                } else {
                    return db.progress.insert(data);
                }
            });
    },

    resetProgress: function () {
        return db.progress.remove({}, {
            multi: true
        });
    },

    getSetting: function (data) {
        return promisifyDb(db.settings.findOne({
            key: data.key
        }));
    },

    getSettings: function () {
        return promisifyDb(db.settings.find({}));
    },    

    // format: {key: key_name, value: settings_value}
    writeSetting: function (data) {
        return Database.getSetting({
                key: data.key
            })
            .then(function (result) {
                if (result) {
                    return db.settings.update({
                        'key': data.key
                    }, {
                        $set: {
                            'value': data.value
                        }
                    }, {});
                } else {
                    return db.settings.insert(data);
                }
            });
    },

    resetSettings: function () {
        return db.settings.remove({}, {
            multi: true
        });
    },

    deleteDatabases: function () {

        fs.unlinkSync(path.join(data_path, 'data/progress.db'));       

        fs.unlinkSync(path.join(data_path, 'data/settings.db'));

        // return Q.Promise(function (resolve, reject) {
        //     var req = indexedDB.deleteDatabase(App.Config.cache.name);
        //     req.onsuccess = function () {
        //         resolve();
        //     };
        //     req.onerror = function () {
        //         resolve();
        //     };
        // });
        return Q.Promise.resolve();
    },

    initialize: function () {
        // App.vent.on('show:watched', _.bind(this.markEpisodeAsWatched, this));
        // App.vent.on('show:unwatched', _.bind(this.markEpisodeAsNotWatched, this));
        // App.vent.on('movie:watched', _.bind(this.markMovieAsWatched, this));
        // App.vent.on('movie:unwatched', _.bind(this.markMovieAsNotWatched, this));

        // we'll intiatlize our settings and our API SSL Validation
        // we build our settings array
        return Database.getSettings
            .then(function (data) {
                if (data != null) {
                    
                } else {
                    win.warn('is it possible to get here');
                }

            })
            .then(function () {
                // set app language
                //window.setLanguage(Settings.language);
                // set hardware settings and usefull stuff                
            })            
            .catch(function (err) {
                win.error('Error starting up', err);
            });
    }    
};
