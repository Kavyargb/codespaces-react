import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style.module.css';

function Header(props) { // Accepting props even if we are not using them is best practice.
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.logo}>Neuron IQ</div>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/subjects">Subjects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default React.memo(Header);