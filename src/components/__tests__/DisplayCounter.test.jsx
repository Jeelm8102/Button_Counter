// components/DisplayCounter.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DisplayCounter from '../DisplayCounter';

const renderWithRedux = (
  component,
  { initialState, store = createStore(() => initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('displays the current counter value', () => {
  renderWithRedux(<DisplayCounter />, { initialState: { counter: 5 } });
  expect(screen.getByText('Current Count value: 5')).toBeInTheDocument();
});
