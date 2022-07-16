import React from 'react';
import styles from './Projects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import sectionTitle from "../../common/styles/SectionTitle.module.css";
import Project from "./Project/Project";

const Projects = () => {
    const projects = [
        {id: 1, title: "Payment Site", description: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"},
        {id: 2, title: "Portfolio website", description: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"},
        {id: 3, title: "Fast food app", description: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"},
    ]

    return (
        <section className={styles.projectsBlock}>
            <div className={styleContainer.container}>
                <h2 className={sectionTitle.title}>Projects</h2>

                <div className={styles.projects}>
                    {
                        projects.map(el => <Project key={el.id} title={el.title} description={el.description}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;