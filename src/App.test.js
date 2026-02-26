// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MachineLearnCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MachineLearnCore/i);
    expect(titleElement).toBeInTheDocument();
});
