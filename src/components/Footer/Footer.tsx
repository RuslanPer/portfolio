import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerBlock}>
            <p className={styles.title}>Ruslan</p>
            <div className={styles.social}>
                <a href="#" className={styles.link}></a>
                <a href="#" className={styles.link}></a>
                <a href="#" className={styles.link}></a>
            </div>
            <p className={styles.copy}>&#169; 2022. All rights reserved</p>
        </footer>
    )
}

export default Footer;