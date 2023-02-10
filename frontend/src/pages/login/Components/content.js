import styles from "../Styles/content.module.css"
import myimg from "../Assets/persons3.svg"
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from "react-router-dom";
import { api_url } from "../../../config";
import AuthContext from "../../../store/auth-context";
import axios from "axios";
const url = api_url + "auth/login/";

function Content() {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();

        if (email && password) {
            setLoading(true);

            try {
                axios.post(url, {
                    email: email.trim(),
                    password: password.trim(),
                })
                    .then((response) => {
                        if (!response.data.error) {
                            // console.log(response.data)
                            authCtx.login(response.data.key)
                            
                            navigate('/mainpage', { replace: true })

                            setPassword("");
                            setEmail("");

                            setLoading(false)
                        }
                    })
                    .catch((error) => {
                        setLoading(false)

                        alert("Incorrect Credentials");
                    });
            } catch (error) {
                setLoading(false)

                alert("An error occurred");
            }
        } else {
            alert("Please fill in all the data");
        }
    };
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
                        onSubmit={submitForm}
                        className={styles.formContainer}
                    >
                        {" "}
                        <div className={styles.inputBoxContainer}>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                            {
                                loading &&
                                <button type="submit" className={styles.btn} disabled>
                                    <FontAwesomeIcon icon={faSpinner} className={styles.btntext} />
                                </button>
                            }
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