import { createStore } from 'redux';

// const incrementCount = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            const setTo = typeof action.count === 'number' ? action.count : 0
            return {
                count: setTo
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

// const incrementCount = (payload = {}) => (
//     {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     }
// )

const incrementCount = ({ incrementBy = 1 } = {}) => (
    {
        type: 'INCREMENT',
        incrementBy
    }
);

const decrementCount = ({ decrementBy = 1} = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
)

const setCount = ({ value = 0 } = {}) => (
    {
        type: 'SET',
        count: value
    }
)

const resetCount = () => (
    {
        type: 'RESET'
    }
)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions = an object that gets sent to the store
store.dispatch(
    {
        type: 'INCREMENT', // it is a convention to use uppercase when defining type
        incrementBy: 5
    }
);

store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy: 'hello'
    }
);

store.dispatch(
    decrementCount({ decrementBy: 10000000000 })
);

store.dispatch(
    incrementCount({ incrementBy: 1000000 })
);

store.dispatch(
    setCount({ value: 200200 })
);

store.dispatch(
    resetCount()
);