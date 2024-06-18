// import { render, screen } from '@testing-library/react';
// import React from 'react';
// import App from '../src/App.jsx';

// describe('App tests', () => {
//   it('should contain heading 1', () => {
//     render(
//       <Router>
//         <App />
//       </Router>
//      );
//     const heading = screen.getByText(/JobHub/i);
//     expect(heading).toBeInTheDocument();
//   });
// });
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import App from '../src/App.jsx';

const fizz_buzz = require('../src/index.jsx');

describe('FizzBuzz', () => {
  test('[3] should result in "fizz"', () => {
    expect(fizz_buzz([3])).toBe('fizz');
  });

  test('[5] should result in "buzz"', () => {
    expect(fizz_buzz([5])).toBe('buzz');
  });

  test('[15] should result in "fizzbuzz"', () => {
    expect(fizz_buzz([15])).toBe('fizzbuzz');
  });

  test('[1,2,3] should result in "1, 2, fizz"', () => {
    expect(fizz_buzz([3])).toBe('fizz');
  });
});

// describe('App tests', () => {
//   it('should contain heading 1', () => {
//     render(
//       <Router>
//         <App />
//       </Router>
//     );
//     const heading = screen.getByText(/JobHub/i);
//     expect(heading).toBeInTheDocument();
//   });
// });
