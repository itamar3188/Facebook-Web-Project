import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from '../../App/App';
import Feed from '../feed/Feed';

// Mocking the useNavigate hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
    useLocation: () => ({
        state: { username: 'testUser' },
    }),
}));

// Wrapping component to include necessary context and router
const renderWithThemeContext = (ui, { theme, ...options } = {}) => {
    return render(
        <ThemeContext.Provider value={{ theme }}>
            <BrowserRouter>
                {ui}
            </BrowserRouter>
        </ThemeContext.Provider>,
        options
    );
};

describe('Feed Component', () => {
    test('renders Feed component with child components', () => {
        renderWithThemeContext(<Feed />);
        expect(screen.getByText(/user1/i)).toBeInTheDocument();
        expect(screen.getByText(/share/i)).toBeInTheDocument(); // Example assertion, adjust based on actual UI
    });

    // Add more tests here following the same pattern
    // You may need to mock functions and state changes depending on your component's complexity
});