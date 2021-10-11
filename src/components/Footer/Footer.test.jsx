import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('the Footer component', () => {
  it('should render the "Prime" text', () => {
    render(
      <Footer />
    );
    expect(screen.getByText(/Prime/)).toBeInTheDocument();
  });
});
