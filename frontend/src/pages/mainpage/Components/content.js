import styles from "../Styles/content.module.css"
import React, { useState, useContext } from "react";

// import Navbar from "./navbar";
function Content() {
    const [loading, setLoading] = useState(false);
    return (
        <div className={styles.flexCont}>
            <div className={styles.container}>
                {/* <div className={styles.left} id="left">
                    <img
                        src={rightimg}
                        style={{ height: 350, width: 170 }}
                        alt="website logo"
                    />
                </div> */}
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
                        <br/>
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
                {/* <div className={styles.right} id="right">
                    <img
                        src={leftimg}
                        style={{ height: 350, width: 170 }}
                        alt="website logo"
                    />
                </div> */}
                
            </div>

        </div>
    );
}

export default Content;