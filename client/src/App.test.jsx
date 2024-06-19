/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // ACT
  await screen.findByRole('heading');

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('JobHub');
});
