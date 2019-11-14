import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';

import Navigation from './navigation.component';

test('Home, Contact and About text', () => {
  const { getByText } = render(
    <Router>
      <Navigation />
    </Router>
  );
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
  expect(getByText('About')).toBeInTheDocument();
});
