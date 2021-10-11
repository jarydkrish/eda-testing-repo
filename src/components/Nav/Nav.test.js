import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

import store from '../../redux/store';

describe('the navigation component', () => {
  it('should render a specific string, "Prime Solo Project"', () => {
    render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    );
    expect(screen.getByText('Prime Solo Project')).toBeInTheDocument();
  })
})
