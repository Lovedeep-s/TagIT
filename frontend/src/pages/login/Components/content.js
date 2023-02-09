import styles from "../Styles/content.module.css"
import myimg from "../Assets/persons3.svg"
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
// import Navbar from "./navbar";
function Content() {
    const [loading, setLoading] = useState(false);
    return (
        <div className={styles.big}>
                <div className={styles.arrow}>
                <Link to="/" style={{ color: "rgb(72, 64, 86)", textDecoration: "none" }}> <FontAwesomeIcon icon={faArrowLeftLong} size="3x" beatFade /></Link>
                
                </div>
        <div className={styles.flexCont}>
            <div className={styles.container}>
                    <h1 className={styles.heading}>Login</h1>
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
                    <img
                        src={myimg}
                        style={{ height: 250, width: 350 }}
                        alt="website logo"
                     />
                
            </div>
        </div>
        </div>
    );
}

export default Content;