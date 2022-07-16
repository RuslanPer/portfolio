import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import sectionTitle from '../../common/styles/SectionTitle.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <section className={styles.skillsBlock}>
            <div className={styleContainer.container}>
                <h2 className={sectionTitle.title}>Skills</h2>

                <div className={styles.content}>
                    <div className={styles.item}>
                        <div className={styles.icon}></div>

                        <div>
                            <h3 className={styles.name}>HTML</h3>
                            <span className={styles.description}>
                                Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                            </span>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon}></div>

                        <div>
                            <h3 className={styles.name}>CSS</h3>
                            <span className={styles.description}>
                                Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                            </span>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon}></div>

                        <div>
                            <h3 className={styles.name}>JavaScript</h3>
                            <span className={styles.description}>
                                Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;