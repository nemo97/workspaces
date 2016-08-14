"use strict";
var BookService = (function () {
    function BookService() {
    }
    BookService.prototype.getBookList = function () {
        return ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"];
    };
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map