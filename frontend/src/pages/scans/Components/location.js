import styles from "../Styles/previous.module.css";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function Location(props) {
  const [locations, setLocations] = useState([]);
  const [key, setKey] = useState("");
  const params = useParams();

  useEffect(() => {
    setKey(params.id);
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://tagit.ccstiet.com/history/", {
      method: "POST",
      body: JSON.stringify({
        key: key,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <section id="previous">
      <div className={styles.arrow}>
        <Link
          to="/mainpage"
          style={{ color: "rgb(72, 64, 86)", textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} size="3x" beatFade />
        </Link>
      </div>
      <div className={styles.flexCont}>
        <div className={styles.heading}>
          Scanned at the following locations
        </div>
        <center>
          <div>
            {locations.length > 0 && (
              <div className={styles.flexContainer}>
                {locations.map((location) => (
                  <div className={styles.container}>
                    
                      <p className={styles.qrName}> Location : {location.location} </p>
                      <p className={styles.qrName1}> Date & Time : {location.time} </p>
                    
                  </div>
                ))}
              </div>
            )}
          </div>
        </center>
      </div>
    </section>
  );
}

export default Location;
