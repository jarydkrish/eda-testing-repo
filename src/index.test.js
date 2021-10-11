import React from 'react';
import ReactDOM from 'react-dom';

jest.mock('react-dom');

describe('rendering the app', () => {
  it('renders without crashing', () => {
    require('./index');
    expect(ReactDOM.render.mock.calls.length).toEqual(1);
  });
});
