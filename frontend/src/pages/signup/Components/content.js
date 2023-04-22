import styles from "../Styles/content.module.css";
import rightimg from "../Assets/key.svg";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";


function Content() {
  
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

const [posts, setPosts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://tagit-z7n8.onrender.com/auth/register/', {
       method: 'POST',
        body: JSON.stringify({
        email: email,
        password: password,
        phone: phone,
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((res) => res.json())
       .then((response) => {
        setPosts((posts) => [response, ...posts]);
        console.log(response);
        setEmail("");
        setPhone("");
        setPassword("");
        // console.log('cnajkfn')
        setMessage("User created successfully");
       })
       .catch((err) => {
          console.log(err.message);
       });
 };

  return (
    <div className={styles.big}>
    <div className={styles.arrow}>
      <Link
        to="/"
        style={{ color: "rgb(72, 64, 86)", textDecoration: "none" }}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowLeftLong} size="3x" beatFade />
      </Link>
    </div>
    <div className={styles.flexCont}>
      <div className={styles.container}>
        <div className={styles.left} id="left">
          <img
            src={rightimg}
            style={{ height: 380, width: 350 }}
            alt="website logo"
          />
        </div>
        <div className={styles.middle} id="middle">
          <h1 className={styles.heading}>Sign Up !</h1>
          <hr
            style={{
              background: "rgb(232,107,121)",
              color: "rgb(232,107,121)",
              borderColor: "rgb(232,107,121)",
              height: "0.1px",
              width: "80%",
            }}
          />
          <form
            action=""
            onSubmit={handleSubmit}
            className={styles.formContainer}
          >
            <div className={styles.inputBoxContainer}>
              <input
                name="email"
                id="email"
                className={styles.inputBox}

                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className={styles.inputBoxContainer}>
              <input
                name="phone"
                id="phone"
                className={styles.inputBox}
                
                type="text"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <br />
            <div className={styles.inputBoxContainer}>
              <input
                name="password"
                id="password"
                className={styles.inputBox}
                
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className={styles.btnContainer}>
                <button type="submit" className={styles.btn}>
                  <div className={styles.btntext}>Submit</div>
                </button>
            </div>
            <div className={styles.heading}>{message ? <p>{message} <a href="/login">Login Now</a></p>    : null}</div>
          </form>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Content;