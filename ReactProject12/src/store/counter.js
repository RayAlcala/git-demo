import { createSlice } from '@reduxjs/toolkit';
 
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    // initialState (yes, by itself as its own line but the above is now changed)
    // means the same thing as initialState: initialState
    reducers: {
        increment(state) {
            state.counter++
            // when using Redux toolkit and its functions like createSlice, you can call 
            // state.counter++ bc you cannot accidentally manipulate the existing state 
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;