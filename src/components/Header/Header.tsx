import React from 'react';
import styles from './Header.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <section className={styles.header}>
            <div className={styleContainer.container}>
                <Navbar/>
            </div>
        </section>
    );
};

export default Header;