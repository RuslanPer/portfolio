import React from 'react';
import styles from './Main.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import sectionTitle from '../../common/styles/SectionTitle.module.css'

const Main = () => {
    return (
        <section className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <h2 className={sectionTitle.title}>About</h2>

                <div className={styles.main}>
                    <div className={styles.img}>
                        <img src="http://localhost:63342/portfolio-responsive-complete-master/assets/img/about.jpg" alt="photo"/>
                    </div>

                    <div>
                        <h2 className={styles.subtitle}>I'am Marlon</h2>
                        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum
                            expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo
                            recusandae cumque perferendis! Recusandae alias accusamus atque.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;