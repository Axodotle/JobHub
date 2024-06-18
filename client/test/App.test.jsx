import { render, screen } from '@testing-library/react';
// import React from 'react';
import App from '../src/App.jsx';
import renderer from 'react-test-renderer';

describe('App tests', () => {
  it('should contain heading 1', () => {
    render(<App />);
    const heading = screen.getByText(/JobHub/i);
    expect(heading).toBeInTheDocument();
  });
});
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import React from 'react';
// import App from '../src/App.jsx';

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
