import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import sectionTitle from '../../common/styles/SectionTitle.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    const skills = [
        {title: "HTML" , description: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"},
        {title: "CSS" , description: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"},
        {title: "JS" , description: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"},
    ]


    return (
        <section className={styles.skillsBlock}>
            <div className={styleContainer.container}>
                <h2 className={sectionTitle.title}>Skills</h2>

                <div className={styles.content}>

                    {
                        skills.map(el => <Skill title={el.title} description={el.description}/>)
                    }

                </div>
            </div>
        </section>
    )
}

export default Skills;