const redux = require('redux');
// importing redux 

const counterReducer = (state = { counter: 0 }, action) => {
// when code is ran, redux wil execute this reducer for the first time
// bc of that, there is no existing state
// we need to initialize a value to state so there is an existing state

if (action.type === 'increment') {
    return {
        counter: state.counter + 1
    };
}
    if (action.type === 'decrement') {
        return {
            counter: state.counter -1
        };
    }
    return state;
};


const store = redux.createStore(counterReducer);
// counterReducer is passed to create the store function 
// bc the store needs to know which reducer is responsible for changing that store 

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};
// subscription function will be triggered whenever the state changes 

store.subscribe(counterSubscriber);
// notice that counterReducer and counterSubscriber are pointed at, not being executed 
// the functions are simply passed

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' }); 

// to see code run, type the following in VS Code's terminal
// node redux-demo.js
// be sure to save before running if changes were made