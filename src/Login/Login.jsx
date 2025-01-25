import styles from './Login.module.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
    <div className={styles.wrapper}>
        <div className={styles.login}>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register!</Link>
            </p>
        </div>
    </div>
    );
}

export default Login