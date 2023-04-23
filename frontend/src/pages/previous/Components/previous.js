import styles from "../Styles/previous.module.css";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import axios from"axios";

function Previous() {
  const url = "https://tagit.ccstiet.com/getQRs/";
  const [qrs, setQrs] = useState([])
  const fetchData = () => {
    fetch("https://tagit.ccstiet.com/getQRs/")
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


  const navigate = useNavigate();

  const openprofile =(id)=>{
    navigate("/scans/"+id );
  }

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
            <div className={styles.container} key={qr.key}>
            <div>
            <p className={styles.qrName}>{i++}:  {qr.name} </p>
            <p className={styles.qrName1}>{qr.description} </p>
            <p><a className={styles.btn} href={qr.qr} target="_blank"  >Download Qr</a><br></br></p>
            <button className={styles.btn} onClick={() => openprofile(qr.key)}>See Scanning History</button><br/><br/>
            </div>
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
