// counterReducer.js

const initialState = {
    counters: [],
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                ...state,
                counters: [...state.counters, action.payload],
            };
        case 'REMOVE_COUNTER':
            return {
                ...state,
                counters: state.counters.filter(
                    (counter) => counter.id !== action.payload
                ),
            };
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counters: state.counters.map((counter) =>
                    counter.id === action.payload
                        ? { ...counter, value: counter.value + 1 }
                        : counter
                ),
            };
        case 'DECREMENT_COUNTER':
            return {
                ...state,
                counters: state.counters.map((counter) =>
                    counter.id === action.payload
                        ? { ...counter, value: counter.value - 1 }
                        : counter
                ),
            };
        case 'RESET_COUNTER':
            return {
                ...state,
                counters: state.counters.map((counter) =>
                    counter.id === action.payload ? { ...counter, value: 0 } : counter
                ),
            };
        case 'UPDATE_COUNTER_LABEL':
            return {
                ...state,
                counters: state.counters.map((counter) =>
                    counter.id === action.payload.id
                        ? { ...counter, label: action.payload.label }
                        : counter
                ),
            };
        case 'SET_COUNTER_VALUE':
            return {
                ...state,
                counters: state.counters.map((counter) =>
                    counter.id === action.payload.id
                        ? { ...counter, value: parseInt(action.payload.value, 10) }
                        : counter
                ),
            };
        default:
            return state;
    }
};

export default counterReducer;
