import React from 'react';
import styles from './Main.module.css';
import styleContainer from '../../common/styles/Container.module.css';

const Main = () => {
    return (
        <section className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.content}>
                    <span>Hi there!</span>
                    <h1>I am Ruslan Pershin</h1>
                    <p>Frontend DEVELOPER</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </section>
    );
};

export default Main;