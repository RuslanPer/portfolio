import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <a href="src/components/Header/Navbar/Navbar#" className={styles.logo}>Ruslan</a>
            </div>

            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}><a href="src/components/Header/Navbar/Navbar#home" className={styles.link}>Home</a></li>
                    <li className={styles.item}><a href="src/components/Header/Navbar/Navbar#skills" className={styles.link}>Skills</a></li>
                    <li className={styles.item}><a href="src/components/Header/Navbar/Navbar#work" className={styles.link}>Work</a></li>
                    <li className={styles.item}><a href="src/components/Header/Navbar/Navbar#contact" className={styles.link}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;