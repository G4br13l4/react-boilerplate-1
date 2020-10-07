import * as types from './actionTypes';

export function incrementCount() {
    return { type: types.INCREMENT_COUNT_SUCCESS }
}

export function decrementCount() {
    return { type: types.DECREMENT_COUNT_SUCCESS }
}


