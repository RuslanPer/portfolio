import React from 'react';
import styles from './Skill.module.css'

type SkillsPropsType = {
    title: string
    description: string
}

const Skill: React.FC<SkillsPropsType> = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}></div>
            <div>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Skill;