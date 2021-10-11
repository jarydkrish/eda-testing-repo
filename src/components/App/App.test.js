import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

import store from '../../redux/store';

describe('the App component', () => {
  it('should render a div', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
  });
});
