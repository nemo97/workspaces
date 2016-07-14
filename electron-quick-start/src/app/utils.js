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
                        /*
                        files.forEach( function (file,idx){
                            console.log("file name "+file);
                        });
                        */
                        deferred.resolve(files);  
                    }                    
                });
                return deferred.promise;
            },
        getNormalFiles : function(path) {
                
                fs.readdir(path, function(err,files){
                    if (err){
                        console.log("Error "+err);
                    }
                    else{
                        files.forEach( function (file,idx){
                            console.log("file name "+file);
                        });
                    }                    
                });                
            }            

    }
    App.Utils = Utils;

})(window.App);
