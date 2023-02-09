import styles from "../Styles/content.module.css"
import React, { useState, useContext } from "react";
import Nav1 from "./navbar";
import img from "../Assets/qr.png"

// import Navbar from "./navbar";
function Content() {
    const [loading, setLoading] = useState(false);
    return (
        <section id="home">
            <div className={styles.big}>
                <div className={styles.sticky}>
                <Nav1 />
                </div>
                <div className={styles.flexCont}>
                    <div className={styles.container}>
                        <div className={styles.left} id="left">
                            <img
                                src={img}
                                style={{ height: 250, width: 250 }}
                                alt="website logo"
                            />
                        </div>
                        <div className={styles.middle} id="middle">
                            <h1 className={styles.heading}>Enter QR Details !</h1>
                            <hr
                                style={{
                                    background: 'rgb(232,107,121)',
                                    color: 'rgb(232,107,121)',
                                    borderColor: 'rgb(232,107,121)',
                                    height: '0.1px',
                                    width: '80%',
                                }}
                            />
                            <form
                                action=""
                                // onSubmit={submitForm}
                                className={styles.formContainer}
                            >
                                <div className={styles.inputBoxContainer}>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="off"
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        placeholder=" QR Name "
                                        className={styles.inputBox}
                                    />
                                </div>
                                <br />
                                <div className={styles.inputBoxContainer}>
                                    <input
                                        type="text"
                                        name="desc"
                                        id="desc"
                                        autoComplete="off"
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Description "
                                        className={styles.inputBox}
                                    />
                                </div>
                               
                                <div className={styles.btnContainer} >
                                    {
                                        !loading &&
                                        <button type="submit" className={styles.btn}>
                                            <div className={styles.btntext}>Generate QR</div>
                                        </button>
                                    }

                                    {/* {
                                loading &&
                                <button type="submit" className={styles.btn} disabled>
                                    <FontAwesomeIcon icon={faSpinner} className={styles.btntext} />
                                </button>
                            } */}
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Content;