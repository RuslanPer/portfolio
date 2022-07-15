import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <a href="#" className={styles.logo}>Ruslan</a>
            </div>

            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}><a href="#home" className={styles.link}>Home</a></li>
                    <li className={styles.item}><a href="#about" className={styles.link}>About</a></li>
                    <li className={styles.item}><a href="#skills" className={styles.link}>Skills</a></li>
                    <li className={styles.item}><a href="#work" className={styles.link}>Work</a></li>
                    <li className={styles.item}><a href="#contact" className={styles.link}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;