import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style.module.css';

function Footer(props) { // Accepting props even if we are not using them is best practice.
    return (
        <footer>
            <p>© 2025 Neuron IQ. All rights reserved.</p>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
            </ul>
        </footer>
    );
}

export default React.memo(Footer);