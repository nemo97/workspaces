"use strict";
var router_1 = require('@angular/router');
var book_component_1 = require('./book.component');
var book_list_component_1 = require('./book-list.component');
var bookmain_component_1 = require('./bookmain.component');
var storybook_component_1 = require('./storybook.component');
var childrenbook_component_1 = require('./childrenbook.component');
var bookRoutes = [
    { path: '',
        redirectTo: "/book-center",
        pathMatch: 'full'
    },
    {
        path: 'book-center',
        component: bookmain_component_1.BookMainComponent,
        children: [
            { path: 'book', component: book_component_1.BookComponent },
            { path: 'storybook', component: storybook_component_1.StoryBookComponent },
            { path: 'childrenbook', component: childrenbook_component_1.ChildrenBookComponent },
            { path: '', component: book_list_component_1.BookListComponent }
        ]
    }
];
exports.bookRoutingProviders = [];
exports.bookRouting = router_1.RouterModule.forChild(bookRoutes);
//# sourceMappingURL=book.routing.js.map