import React from 'react';
import styles from './Contact.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import sectionTitle from "../../common/styles/SectionTitle.module.css";

const Contact = () => {
    return (
        <section className={styles.contactBlock}>
            <div className={styleContainer.container}>
                <h2 className={sectionTitle.title}>Contact</h2>

                <div className={styles.contact}>
                    <form action="" className={styles.form}>
                        <input type="text" placeholder="Name" className={styles.input}/>
                            <input type="mail" placeholder="Email" className={styles.input}/>
                                <textarea className={styles.input}></textarea>
                                <input type="button" value="Enviar"className={styles.button}/>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact;