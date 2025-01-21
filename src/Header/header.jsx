import styles from './header.module.css'
import { Link } from 'react-router-dom'


function Header() {
    return (<header className={styles.header}>
    <nav className={styles.nav}>
        <h1>To-Do List</h1>
        <ul className={styles.nav}>
            <li>
                <Link to="/" className={styles.link}>Home</Link>
            </li>
            <li><a href="/" className={styles.link}>Login</a></li>
            <li><a href="/" className={styles.link}>About</a></li>
        </ul>
    </nav>
    </header>);
}

export default Header