/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'h5webstorage':               'node_modules/h5webstorage',
    'primeng':                    'node_modules/primeng',
    'ng2-redux':                  'node_modules/ng2-redux/lib',
    'redux':                      'node_modules/redux/dist',
    //'redux-localstorage':         'node_modules/redux-localstorage/lib',
    
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'redux':                        { main: 'redux.js',  defaultExtension: 'js' },
    //'redux-localstorage':         { main: 'persistState.js',  defaultExtension: 'js' },    
    'rxjs':                       { defaultExtension: 'js' },
    'ng2-redux': { main: 'index.js', defaultExtension: 'js' },
    'h5webstorage': { main: 'index.js', defaultExtension: 'js' },    
    'primeng':                    { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'forms',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'    
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  //var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  var setPackageConfig = packIndex;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
