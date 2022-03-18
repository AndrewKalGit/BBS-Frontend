import React from 'react';
import styles from './Home.module.css'
import logo from './bbslogo.png'

function Home(props) {
    return (
        <>      
            <h1 className={styles.logo_header}>
                <span className={styles.logo_header_span}> <span className={styles.logo_img_span}><img className={styles.img_logo} src={logo} alt={"logo"}/></span>Brunswick Boxing Stars</span>
            </h1>
        </>
    );
}

export default Home;