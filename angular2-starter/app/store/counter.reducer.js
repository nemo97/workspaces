"use strict";
var counter_actions_1 = require('../actions/counter.actions');
var INITIAL_STATE = 0;
function counterReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case counter_actions_1.CounterActions.INCREMENT_COUNTER:
            return state + 1;
        case counter_actions_1.CounterActions.DECREMENT_COUNTER:
            return state - 1;
        case counter_actions_1.CounterActions.RANDOMIZE_COUNTER:
            return action.payload;
        default:
            return state;
    }
}
exports.counterReducer = counterReducer;
//# sourceMappingURL=counter.reducer.js.map