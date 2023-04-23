import styles from "../Styles/previous.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import axios from"axios";

function Previous() {
  const url = "https://tagit-z7n8.onrender.com/getQRs/";
  const [qrs, setQrs] = useState([])

  const fetchData = () => {
    fetch("https://tagit-z7n8.onrender.com/getQRs/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setQrs(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  var i = 1 ;
  return (
    <section id="previous">
      <div className={styles.arrow}>
        <Link
          to="/mainpage"
          style={{ color: "rgb(72, 64, 86)", textDecoration: "none" }}
        >
          {" "}
          <FontAwesomeIcon icon={faArrowLeftLong} size="3x" beatFade />
        </Link>
      </div>
      <div className={styles.flexCont}>
        <div className={styles.heading}>Previously Generated QRs</div>
        <center>
        <div>
        {qrs.length > 0 && (
        <div className={styles.flexContainer}>
          {qrs.map(qr => (
            <div className={styles.container}>
            <div>
            <p className={styles.qrName}>{i++}:  {qr.name} </p>
            <p className={styles.qrName1}>{qr.description} </p>
            <a className={styles.btn} href={qr.qr}>Open On Separate Tab?</a>
            </div>
            {/* <a>{qr.qr}</a> */}
            <img src={qr.qr}  width="170" height="170"/>
            </div>
          ))}
        </div>
      )}</div>
      </center>
      </div>
    </section>
  );
}
export default Previous;
