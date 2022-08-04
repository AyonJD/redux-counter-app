import { DECREASE_COUNT, INCREASE_COUNT, RESET_COUNT } from "./constant";

const INITIAL_COUNT = { count: 0 };

const counterReducer = (state = INITIAL_COUNT, action) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREASE_COUNT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET_COUNT:
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
}

export default counterReducer;