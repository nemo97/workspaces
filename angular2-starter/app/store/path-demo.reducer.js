"use strict";
var counter_actions_1 = require('../actions/counter.actions');
var INITIAL_STATE = {
    foo: {
        bar: [0]
    }
};
function pathDemoReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case counter_actions_1.CounterActions.INCREMENT_COUNTER:
            return { foo: { bar: [state.foo.bar[0] + 1] } };
        case counter_actions_1.CounterActions.DECREMENT_COUNTER:
            return { foo: { bar: [state.foo.bar[0] - 1] } };
        default:
            return state;
    }
}
exports.pathDemoReducer = pathDemoReducer;
//# sourceMappingURL=path-demo.reducer.js.map