import { createStore } from 'redux';

const INITIAL_VALUE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
export { counterReducer }; // Ensure the reducer is exported as named export
