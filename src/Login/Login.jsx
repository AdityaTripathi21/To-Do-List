import styles from './Login.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password})
            });
            const data = await response.json();
            if (response.ok) {
                setError('');
                setIsSuccess(true);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }
            else {
                setError(data.message);
                setIsSuccess(false);
            }

        } catch {
            console.error('Error during login:', error);
            setIsSuccess(false);
            setError('Something went wrong. Please try again later.');
        }
    };

    return (
    <div className={styles.wrapper}>
        <div className={styles.login}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"  onChange={(e) => setUser(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register!</Link>
            </p>

            {error && <p className={styles.error}>{error}</p>} 
            {isSuccess && (
                <p className={styles.success}>
                    Login successful! Redirecting to the homepage...
                </p>
            )}

        </div>
    </div>
    );
}

export default Login