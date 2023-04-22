import styles from "../Styles/content.module.css"
import React, { useState, useContext } from "react";
import Nav1 from "./navbar";
import img from "../Assets/qr.png";

function Content() {
    return (
        <section id="home">
            <div className={styles.big}>
                <Nav1 />
                <div className={styles.picturegrid}>
                    <div className={styles.picturegriditem}>
                        <img src={img} alt="Picture 1" />
                        <div className={styles.picturetitle}>Product 1</div>
                    </div>
                    <div className={styles.picturegriditem}>
                        <img src={img} alt="Picture 2" />
                        <div className={styles.picturetitle}>Product 2</div>
                    </div>
                    <div className={styles.picturegriditem}>
                        <img src={img} alt="Picture 3" />
                        <div className={styles.picturetitle}>Product 3</div>
                    </div>
                    <div className={styles.picturegriditem}>
                        <img src={img} alt="Picture 4" />
                        <div className={styles.picturetitle}>Product 4</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;

// export default Content;