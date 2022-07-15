import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <section className={styles.skillsBlock}>
            <div className={styleContainer.container + ' ' + styles.skillsContainer}>
                <h2 className={styles.title}>My skills</h2>
                <div className={styles.skills}>
                    <Skill title={'Js'} description={'dasdasdasdasdasdas'}/>
                    <Skill title={'CSS'} description={'dasdasdasdasdasdas'}/>
                    <Skill title={'React'} description={'dasdasdasdasdasdas'}/>
                </div>
            </div>
        </section>
    )
}

export default Skills;