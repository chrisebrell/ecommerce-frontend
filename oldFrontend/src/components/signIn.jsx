import React, { useState } from 'react';
import CreateAccount from './createAccount';
import '../form.styles.css';


const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showCreateAccount, setShowCreateAccount] = useState(false); // State for showing create account form

    // Function to handle sign-in form submission
    const handleSignInSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        setEmail('');
        setPassword('');
    };

    // Function to handle create account form submission
    const handleCreateAccountSubmit = (name, email, password) => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        // Here you can add logic to create the account using the entered information
        // Reset form fields after submission
        setEmail('');
        setPassword('');
        // Hide create account form after submission
        setShowCreateAccount(false);
    };

    return (
        <div>
            {/* Conditional rendering based on showCreateAccount state */}
            {showCreateAccount ? (
                <CreateAccount onCreateAccount={handleCreateAccountSubmit} />
            ) : (
                <>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSignInSubmit}>
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
                        <button className="sign-in-button" type="submit" style={{ marginTop: '10px' }}>Sign In</button>
                    </form>
                    {/* Create an account link */}
                    <p>New customer? <button className='create-account-button' onClick={() => setShowCreateAccount(true)}>Create your account</button></p>
                </>
            )}
        </div>
    );
};

export default SignInPage;