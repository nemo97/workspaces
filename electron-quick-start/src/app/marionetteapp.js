// Global App skeleton for backbone
var App = new Backbone.Marionette.Application();
_.extend(App, {
    Controller: {},
    View: {},
    Model: {},
    Page: {},
    Scrapers: {},
    Providers: {},
    Localization: {}
});   

App.addRegions({
    Window: '.main-window-region'
});

// instance of the Collection
//App.todoList = new App.TodoList();

var initApp = function () {
    var mainWindow = new App.View.AppView();  

    try {
        App.Window.show(mainWindow);
    } catch (e) {
        console.error('Couldn\'t start app: ', e, e.stack);
    }
};

App.addInitializer(function (options) {
    initApp();
        
});
    

    