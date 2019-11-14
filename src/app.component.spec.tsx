import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './app.component';

test('Only home router loaded', () => {
  const { baseElement } = render(
    <Router>
      <App />
    </Router>
  );
  expect(baseElement.querySelector('.Home')).toBeInTheDocument();
  expect(baseElement.querySelector('.Contact')).toEqual(null);
  expect(baseElement.querySelector('.About')).toEqual(null);
});
