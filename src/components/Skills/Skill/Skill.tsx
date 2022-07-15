import React from 'react';
import styles from './Skill.module.css'

type SkillsPropsType = {
    title: string
    description: string
}

const Skill: React.FC<SkillsPropsType> = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <p className={styles.description}>
                {props.description}
            </p>
        </div>
    )
}

export default Skill;