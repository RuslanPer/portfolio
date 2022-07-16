import React from 'react';
import photo from '../../common/images/photo.jpg'
import styles from './Main.module.css';
import styleContainer from '../../common/styles/Container.module.css';

const Main = () => {
    return (
        <section className={styles.mainBlock}>
            <div className={styleContainer.container}>

                <div className={styles.main}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>
                            Hi,<br/>
                            I'am
                            <span className={styles.titleColor}> Ruslan</span><br/>
                            Frontend Developer</h1>
                        <a className={styles.button}>Download CV</a>
                    </div>

                    <div className={styles.img}>
                        <img src={photo} alt="photo"/>
                    </div>
                </div>
            </div>
        </section>
);
};

export default Main;