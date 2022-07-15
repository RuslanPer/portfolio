import React from 'react';
import styles from './Header.module.css';
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <section className={styles.header}>
            <Navbar/>
        </section>
    );
};

export default Header;