"use strict";
var search_actions_1 = require('../actions/search.actions');
var INIT_STATE = {
    onSearch: false,
    keyword: '',
    total: 0
};
function searchReducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    switch (action.type) {
        case search_actions_1.SEARCH_ACTIONS.SEARCH:
            return Object.assign({}, state, {
                onSearch: true,
                keyword: action.payload,
                total: state.total
            });
        case search_actions_1.SEARCH_ACTIONS.SEARCH_RESULT:
            var total = action.payload.total;
            return Object.assign({}, state, {
                onSearch: state.onSearch,
                keyword: state.keyword,
                total: total
            });
        default:
            return state;
    }
}
exports.searchReducer = searchReducer;
//# sourceMappingURL=search.reducer.js.map