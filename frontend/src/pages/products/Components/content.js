import styles from "../Styles/content.module.css"
import React, { useState, useContext } from "react";
import Nav1 from "./navbar";
import img from "../Assets/qr.png";
import img2 from "../Assets/key.png";
import img3 from "../Assets/card3.png";
import img4 from "../Assets/sticker2.png";   

function Content() {
    return (
        <section id="home">
            <div className={styles.big}>
                <Nav1 />
                <div className={styles.picturegrid}>
                    <div className={styles.picturegriditem}>
                        <img src={img} alt="QR CODES" />
                        <div className={styles.picturetitle}>QR CODES</div>
                    </div>
                    <div className={styles.picturegriditem}>
                        <img src={img2} alt="KEY CHAINS" />
                        <div className={styles.picturetitle}>KEY CHAINS</div>
                    </div>
                    <div className={styles.picturegriditem}>
                        <img src={img3} alt="CARDS" />
                        <div className={styles.picturetitle}>CARDS</div>
                    </div>
                    <div className={styles.picturegriditem}>
                        <img src={img4} alt="STICKERS" />
                        <div className={styles.picturetitle}>STICKERS</div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Content;

// export default Content;