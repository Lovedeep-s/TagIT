import styles from "../Styles/heading.module.css"
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Heading() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.subContainer}>
                <div className={styles.headingcontainer}>
                    <div className={styles.heading}>
                        Tag-It Find-It
                    </div>
                    <div className={styles.subheading}>
                        Find your missing luggage<br /> Anytime! Anywhere!
                    </div>
                </div>
                <div className={styles.hero}>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn}>
                            <Link to="/login" style={{ color: "white", textDecoration: "none" }}> Login</Link> </button>
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn1}>
                            <Link to="/signup" style={{ color: "rgb(205, 88, 102)", textDecoration: "none" }}> SignUp</Link>  </button>
                    </div>
                </div>
                <div className={styles.arrow}>
                    <a href="#about" className={styles.hero}>
                        <FontAwesomeIcon icon={faChevronDown} size="3x" beatFade />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Heading;