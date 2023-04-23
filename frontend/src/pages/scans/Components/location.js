import styles from "../Styles/previous.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import axios from"axios";

function Location() {
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
        <div className={styles.heading}>Scanned at the following locations</div>
        
      </div>
    </section>
  );
}
export default Location;
