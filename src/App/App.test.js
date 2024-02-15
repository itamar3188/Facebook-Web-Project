import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

describe('Login component', () => {
  beforeEach(() => {
    render(
        <Router>
          <Login />
        </Router>
    );
  });

  test('renders username and password input fields', () => {
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders login button', () => {
    const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });

  test('renders register link', () => {
    const registerLink = screen.getByText('Register');
    expect(registerLink).toBeInTheDocument();
  });

  test('shows error message on incorrect login attempt', () => {
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(usernameInput, { target: { value: 'User1' } });
    fireEvent.change(passwordInput, { target: { value: 'WrongPassword' } });
    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Incorrect username or password!')).toBeInTheDocument();
  });

  test('navigates to feed on correct login attempt', () => {
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(usernameInput, { target: { value: 'User1' } });
    fireEvent.change(passwordInput, { target: { value: 'User1' } });
    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Feed')).toBeInTheDocument();
  });
});