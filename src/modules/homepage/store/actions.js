import * as types from './action-types';

export const exploreMode = () => ({
    type: types.EXPLORE_MODE
});

export const challengeMode = () => ({
    type: types.CHALLENGE_MODE
});

export const todayExampleMode = () => ({
    type: types.TODAY_EXAMPLE_MODE
});

export const resetMode = () => ({
    type: types.OTHER_MODES
});
