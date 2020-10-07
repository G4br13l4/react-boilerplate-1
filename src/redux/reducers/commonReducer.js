const initialState = {
    count: 0
};

export default function instagramReducer(state = initialState, action) {
    switch(action.type) {
        case "INCREMENT_COUNT_SUCCESS":
            return {
                count: state.count + 1
            }
        case "DECREMENT_COUNT_SUCCESS":
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}