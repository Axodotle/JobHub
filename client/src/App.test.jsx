/**
 * @jest-environment jsdom
 */

import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';

describe('testing homepage', () => {
  //see https://react.dev/reference/react/act
  // https://testing-library.com/docs/queries/about/
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

  beforeAll(async () => {
    // ARRANGE
    const container = document.createElement('div');
    act(() => {
      document.body.appendChild(container);
      const root = createRoot(container);

      root.render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
    });
  });

  it('loads and displays main heading', async () => {
    // ACT
    await screen.findByRole('heading');
    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('JobHub');
  });

  //should probably be in login.test.jsx
  it('loads and displays login form correctly', async () => {
    // ACT
    await screen.findByRole('form');
    // ASSERT
    expect(screen.getByRole('form')).toHaveTextContent('username');
    expect(screen.getByRole('form')).toHaveTextContent('password');
  });
});
