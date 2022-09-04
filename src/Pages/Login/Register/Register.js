import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='container register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="confirm-password" id="" placeholder='Confirm Password' />
                <input type="submit" value="Register" className='mt-4' />
            </form>
            <p className='m-2'>Already have an account? <Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none'>Please Login</Link> </p>
        </div>
    );
};

export default Register;