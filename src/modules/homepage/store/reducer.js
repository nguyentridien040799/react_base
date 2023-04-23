import * as types from './action-types';

const initialState = {
    modes: [
        {path:"/explore-mode", label:"Explore Mode"},
        {path:"/challenge-mode", label:"Challenge Mode"},
        {path:"/today-example-mode", label:"Today Example Mode"}
    ],
    exploreMode: false,
    challengeMode: false,
    todayExampleMode: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EXPLORE_MODE:
            return Object.assign({}, state, {
                exploreMode: true,
                challengeMode: false,
                todayExampleMode: false
            });

        case types.CHALLENGE_MODE:
            return Object.assign({}, state, {
                exploreMode: false,
                challengeMode: true,
                todayExampleMode: false
            });

        case types.TODAY_EXAMPLE_MODE:
            return Object.assign({}, state, {
                exploreMode: false,
                challengeMode: false,
                todayExampleMode: true
            });

        case types.OTHER_MODES:
            return Object.assign({}, state, {
                exploreMode: false,
                challengeMode: false,
                todayExampleMode: false
            });

        default:
            return state;
    }
}

export default reducer;
