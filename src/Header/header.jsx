import styles from './header.module.css'

function Header() {
    return (<header className={styles.header}>
    <nav className={styles.nav}>
        <h1>To-Do List</h1>
        <ul className={styles.nav}>
            <li><a href="/" className={styles.link}>Home</a></li>
            <li><a href="/" className={styles.link}>About</a></li>
            <li><a href="/" className={styles.link}>Contact</a></li>
        </ul>
    </nav>
    </header>);
}

export default Header