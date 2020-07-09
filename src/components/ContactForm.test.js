import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('ContactForm registers new users', () => {
    render(<ContactForm />);
    // inputs: firstName, lastName, email, message
    // const firstNameInput = screen.getByLabelText(/First Name*/i);
    // const lastNameInput = screen.getByLabelText(/Last Name*/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);

    // events with RTL 
    // fireEvent.change(firstNameInput, { target: { value: 'Lauren' } });
    // fireEvent.change(lastNameInput, { target: { value: 'Emick' } });
    fireEvent.change(emailInput, { target: { value: 'lauren@lauren.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello World' } });

});
