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
    'rxjs':                       'node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    // 'common': { main: 'index.js', defaultExtension: 'js' },
    // 'compiler': { main: 'index.js', defaultExtension: 'js' },
    // 'core': { main: 'index.js', defaultExtension: 'js' },
    // 'http': { main: 'index.js', defaultExtension: 'js' },
    // 'platform-browser': { main: 'index.js', defaultExtension: 'js' },
    // 'platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
    // 'router': { main: 'index.js', defaultExtension: 'js' },
    // 'router-deprecated': { main: 'index.js', defaultExtension: 'js' },    
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    //packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
