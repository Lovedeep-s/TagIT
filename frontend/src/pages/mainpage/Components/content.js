import styles from "../Styles/content.module.css"
import React, { useState, useContext,useRef,useEffect } from "react";
import Nav1 from "./navbar";
import img from "../Assets/qr.png"


function Content() {
    const [loading, setLoading] = useState(false);
    
    class myqrcodes {
        constructor(url, status) {
            this.url = url;
            this.status = status;
        }
    }

    // function submitForm(){
    // useEffect(() => {
    //     const fetchData = () => {
    //         return fetch("http://127.0.0.1:8000/check_status/", { method: "GET" })
    //             .then(res => {
    //                 return res.json();
    //             })
    //             .then((data) => {
    //                 setQrcodes([]);
    //                 console.log(data);
    //                 let qr = new myqrcodes(data.url,data.status);
    //                 setQrcodes(classRooms => [...classRooms, qr]);
    //             })
    //     };
    //     fetchData();
    // }, []);
    // }
    const [qrcodes, setQrcodes] = useState([]);
  const [name, setName] = useState("");
  const [qr, setQr] = useState("");
  const [description, setDescription] = useState("");
  const [status,setStatus]=useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://tagit-z7n8.onrender.com/generate/", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          description: description,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      let resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson);
        let qr = { url: resJson.url, status: resJson.status };
        setQrcodes((qrcodes) => [...qrcodes, qr]);
        setName("");
        setDescription("");
        setMessage("QR code generated successfully");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
      setMessage("Some error occurred");
    }
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
                                    background: 'rgb(232,107,121)',
                                    color: 'rgb(232,107,121)',
                                    borderColor: 'rgb(232,107,121)',
                                    height: '0.1px',
                                    width: '80%',
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
                               
                                <div className={styles.btnContainer} >
                                    {
                                        !loading &&
                                        <button type="submit" className={styles.btn}>
                                            <div className={styles.btntext}>Generate QR</div>
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

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Content;