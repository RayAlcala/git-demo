import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// with a slicer (which are now moved into their own files under the store foler), 
// we do not need the reducer function below anymore
// slicer avoids redundant code 

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }

//     // why return state, why override the existing state?
//     // bc we do not want to mutate the existing state since objects and arrays are
//     // reference values in JavaScript 
//     // avoid state.counter++ bc it can lead to bugs

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }


//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }

//     return state;
// };

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

// you can only call configureStore once and the store only has one root reducer
// fortunately, reducer not only accepts an argument but also an object which 
// acts as a map of reducers 
// key names (ie like counter and auth) are up to you 
// each reducer automatically gets merged together into one main reducer which is exposed to the store 

export default store;