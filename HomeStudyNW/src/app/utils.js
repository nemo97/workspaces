(function (App) {
    'use strict';
    var path = require('path'),
        fs = require('fs'),
         Q = require('q');
            
    var Utils = {

        getFiles : function(path) {
                var deferred = Q.defer();
                fs.readdir(path, function(err,files){
                    if (err){
                        deferred.reject(new Error(err));
                    }
                    else{
                        
                        deferred.resolve(files);  
                    }                    
                });
                return deferred.promise;
        }
    }
    App.Utils = Utils;

})(window.App);
