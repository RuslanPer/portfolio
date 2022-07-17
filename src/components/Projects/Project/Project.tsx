import React from 'react';
import styles from "./Project.module.css";

type ProjectPropsType = {
    title: string
    description: string
}

const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <button className={styles.button}>Demo</button>
            </div>
            <div>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Project;