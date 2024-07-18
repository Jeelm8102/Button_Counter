// store/__tests__/index.test.js

import { createStore } from 'redux';
import { counterReducer } from '../index'; // Import the counterReducer as a named export

describe('counterStore', () => {
  let store;

  beforeEach(() => {
    store = createStore(counterReducer);
  });

  it('should initialize with a counter of 0', () => {
    expect(store.getState()).toEqual({ counter: 0 });
  });

  it('should increment counter', () => {
    store.dispatch({ type: 'INCREMENT' });
    expect(store.getState()).toEqual({ counter: 1 });
  });

  it('should decrement counter', () => {
    store.dispatch({ type: 'INCREMENT' }); // Set to 1
    store.dispatch({ type: 'DECREMENT' });
    expect(store.getState()).toEqual({ counter: 0 });
  });
});
