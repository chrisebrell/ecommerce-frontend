import React, { useState } from 'react';

const SignInPage = () => {
// State variables to hold user input
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to authenticate the user using the entered email and password
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields after submission
    setEmail('');
    setPassword('');
};

    return (
        <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit">Sign In</button>
        </form>
        </div>
    );
};

export default SignInPage;