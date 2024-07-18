// src/components/__tests__/Controls.test.jsx

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Controls from '../Controls'; // Import the Controls component
import DisplayCounter from '../DisplayCounter'; // Import the DisplayCounter component
import { counterReducer } from '../../store/index'; // Import the counterReducer as a named export

const renderWithRedux = (component, { store = createStore(counterReducer) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('increments counter on button click', () => {
  renderWithRedux(
    <>
      <Controls />
      <DisplayCounter />
    </>
  );

  const incrementButton = screen.getByText('+1');
  fireEvent.click(incrementButton);

  const counterDisplay = screen.getByText('Current Count value: 1');
  expect(counterDisplay).toBeInTheDocument();
});

test('decrements counter on button click', () => {
  const { store } = renderWithRedux(
    <>
      <Controls />
      <DisplayCounter />
    </>
  );

  // Set initial state to 1 so that decrementing shows a different value than -1
  store.dispatch({ type: 'INCREMENT' });

  const decrementButton = screen.getByText('-1');
  fireEvent.click(decrementButton);

  const counterDisplay = screen.getByText('Current Count value: 0');
  expect(counterDisplay).toBeInTheDocument(); 
});
