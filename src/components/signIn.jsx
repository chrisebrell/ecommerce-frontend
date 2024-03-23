import React, { useState } from 'react';

const SignInPage = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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