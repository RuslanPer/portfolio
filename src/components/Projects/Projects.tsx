import React from 'react';
import styles from './Projects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import sectionTitle from "../../common/styles/SectionTitle.module.css";

const Projects = () => {
    return (
        <section className={styles.projectsBlock}>
            <div className={styleContainer.container}>
                <h2 className={sectionTitle.title}>Projects</h2>

                <div className={styles.projects}>
                    <div className={styles.item}>
                        <div className={styles.img}></div>

                        <div>
                            <h3 className={styles.name}>Payment Site</h3>
                            <span className={styles.description}>
                                Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                            </span>
                            <button className={styles.button}>Demo</button>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.img}></div>

                        <div>
                            <h3 className={styles.name}>Portfolio website</h3>
                            <span className={styles.description}>
                                Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                            </span>
                            <button className={styles.button}>Demo</button>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.img}></div>

                        <div>
                            <h3 className={styles.name}>Fast food app</h3>
                            <span className={styles.description}>
                                Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                            </span>
                            <button className={styles.button}>Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;