import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeContext } from '../../App/App';
import ListMenu from '../menu/ListMenu';

// Mock ThemeContext if necessary, or provide a mock value directly in the provider

describe('ListMenu Component', () => {
    const renderWithThemeContext = (ui, { theme, ...options } = {}) => {
        return render(
            <ThemeContext.Provider value={{ theme }}>
                {ui}
            </ThemeContext.Provider>,
            options
        );
    };

    test('renders ListMenu component correctly with default active item', () => {
        renderWithThemeContext(<ListMenu />, { theme: 'dark' });
        const homeLink = screen.getByText(/Home/i);
        expect(homeLink).toHaveClass('list-group-item-action active');
        const friendsLink = screen.getByText(/Friends/i);
        expect(friendsLink).toHaveClass('list-group-item-action');
        const groupsLink = screen.getByText(/groups/i);
        expect(groupsLink).toHaveClass('list-group-item-action');
    });

    test('applies theme context correctly', () => {
        const { container } = renderWithThemeContext(<ListMenu />, { theme: 'dark' });
        expect(container.firstChild).toHaveAttribute('data-bs-toggle', 'dark');
    });

    // You can add more tests here to check for user interactions or other dynamic behaviors
});
