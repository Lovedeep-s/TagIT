import styles from "../Style/content.module.css"
import rightimg from "../Assets/money.svg"
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
// import Navbar from "./navbar";
function Content() {
    const [loading, setLoading] = useState(false);
    return (
        <div className={styles.big}>
                <div className={styles.arrow}>
                <Link to="/mainpage" style={{ color: "rgb(72, 64, 86)", textDecoration: "none" }}> <FontAwesomeIcon icon={faArrowLeftLong} size="3x" beatFade /></Link>
                
                </div>
            <div className={styles.flexCont}>
                <div className={styles.container}>
                    
                    <div className={styles.middle} id="middle">
                        <h1 className={styles.heading}>Pay Now!</h1>
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
                                    placeholder="Name "
                                    className={styles.inputBox}
                                />
                            </div>
                            <br />
                            <div className={styles.inputBoxContainer}>
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
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="off"
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className={styles.inputBox}
                                />
                            </div>
                            <br />
                            <div className={styles.inputBoxContainer}>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="off"
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className={styles.inputBox}
                                />
                            </div>
                            <div className={styles.btnContainer} >
                                {
                                    !loading &&
                                    <button type="submit" className={styles.btn}>
                                        <div className={styles.btntext}>Submit</div>
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
                    <div className={styles.left} id="left">
                        <img
                            src={rightimg}
                            style={{ height: 420, width: 300 }}
                            alt="website logo"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Content;