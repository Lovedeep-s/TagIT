import styles from "../Styles/content.module.css"
import myimg from "../Assets/persons3.svg"
import React, { useState, useContext } from "react";
import Nav1 from "./navbar";

function Content() {
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = React.useState(false);
    return (
        <section id="home">
            <div className={styles.big}>
                <Nav1 />
                <div className={styles.flexCont}>
                    <div className={styles.container}>
                        <h1 className={styles.heading}> My Profile</h1>
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
                                <label className={styles.inputlabel}>Name: </label>
                                <br />
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    autoComplete="off"
                                    placeholder="Your Name "
                                    className={styles.inputBox}
                                />
                            </div>
                            <br />
                            <div className={styles.inputBoxContainer}>
                                <label className={styles.inputlabel}>Age: </label>
                                <br />
                                <input
                                    type="number"
                                    name="number"
                                    id="number"
                                    autoComplete="off"
                                    placeholder="Your Age"
                                    className={styles.inputBox}
                                />
                            </div>
                            <br />
                            <div className={styles.inputBoxContainer}>
                                <label className={styles.inputlabel}>Gender: </label>
                                <br />
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    autoComplete="off"
                                    placeholder="Your Gender"
                                    className={styles.inputBox}
                                />
                            </div>
                            <br />
                            <div className={styles.inputBoxContainer}>
                                <label className={styles.inputlabel}>Your Email: </label>
                                <br />
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email "
                                    className={styles.inputBox}
                                />
                            </div>
                            <br />
                            <div className={styles.inputBoxContainer}>
                                <label className={styles.inputlabel}>Contact Details: </label>
                                <br />
                                <input
                                    type="number"
                                    name="number"
                                    id="number"
                                    autoComplete="off"
                                    placeholder="Your Number "
                                    className={styles.inputBox}
                                />
                            </div>
                            <br />
                            <div className={styles.inputBoxContainer}>
                                <label className={styles.inputlabel}>Address: </label>
                                <br />
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    autoComplete="off"
                                    placeholder="Your Address "
                                    className={styles.inputBox}
                                />
                            </div>
                            <br />
                            <div className={styles.btnContainer} >
                                {
                                    !loading &&
                                    <button type="submit" disabled={true} className={styles.btn}>
                                        <div className={styles.btntext}>Submit</div>
                                    </button>
                                }
                                {
                                    !loading &&
                                    <button type="update" className={styles.btn}>
                                        <div className={styles.btntext}>Update</div>
                                    </button>
                                }

                                {/* {
                                loading &&
                                <button type="update" className={styles.btn}>
                                    <div className={"fa-solid fa-pen-nib styles.btntext"}>Update</div>
                                </button>
                            } */}
                            </div>
                        </form>
                        <img
                            src={myimg}
                            style={{ height: 200, width: 300 }}
                            alt="website logo"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;