import styles from './Register.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    return(
        <div className={styles.register}>
            <h1>Register</h1>
            <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username"/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"/>
            <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login!</Link>
            </p>
        </div>
    );
}

export default Register