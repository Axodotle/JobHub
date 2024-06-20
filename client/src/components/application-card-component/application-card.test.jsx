/**
 * @jest-environment jsdom
 */

import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ApplicationCard from './application-card.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
// import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';

describe('testing application-card component', () => {
    let app;
    const props = {
        company: 'Apple',
        date_applied: '2024-06-20',
        status: 'First Interview',
        role: 'Product Manager',
        notes: 'Fingers Crossed!'
    }
    beforeAll(async () => {
        app = render(<ApplicationCard {...props}/>)
    })

    it('should display values passed down via props', () => {
        expect(app.getByRole('heading')).toHaveTextContent('Apple');
        expect(app.getByText(/Date Applied:/)).toHaveTextContent('2024-06-20');
        expect(app.getByText(/Application Status:/)).toHaveTextContent('First Interview');
        expect(app.getByText(/Role:/)).toHaveTextContent('Product Manager');
        expect(app.getByText(/Notes:/)).toHaveTextContent('Fingers Crossed!');
    })
})