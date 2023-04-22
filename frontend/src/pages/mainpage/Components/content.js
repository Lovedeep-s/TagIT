import styles from "../Styles/content.module.css";
import React, { useState, useContext, useRef, useEffect } from "react";
import Nav1 from "./navbar";
import img from "../Assets/qr.png";

function Content() {
  class myqrcodes {
    constructor(url, status) {
      this.url = url;
      this.status = status;
    }
  }
  const [qrcodes, setQrcodes] = useState([]);
  const [name, setName] = useState("");
  const [qr, setQr] = useState("");
  const [description, setDescription] = useState("");
  const [status,setStatus]=useState("");
  const [message, setMessage] = useState("");

  const [qrs, setQrs] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://tagit-z7n8.onrender.com/auth/generate/", {
      method: "POST",
      body: JSON.stringify({
        name:name,
        description:description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setQrs((qrs) => [response, ...qrs]);
        console.log(response);
        setDescription("");
        setName("");
        console.log('cnajkfn')
        setMessage("QR generated successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


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
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description "
                    className={styles.inputBox}
                  />
                </div>
                <div className={styles.btnContainer}>
                    <button type="submit" className={styles.btn}>
                      <div className={styles.btntext}>Generate QR</div>
                    </button>
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
