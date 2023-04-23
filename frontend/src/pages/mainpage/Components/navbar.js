import React from 'react';
import styles from "../Styles/navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt, faPencil, faPencilSquare, faUserCircle, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
function Products() {
    return (
        <div className={styles.big}>
            <div className={styles.topnav}>
                <a className={styles.active} href="/landing"> <FontAwesomeIcon icon={faHome} /> </a>
                <a href="/products">Products</a>
                <a href="/myqrs">My QRs</a>
                <div className={styles.topnavright}>
                    {/* <a href="#search">Profile  <FontAwesomeIcon icon={faUserEdit} /></a>
                    <a href="#about" className={styles.logout}>Log-out</a> */}
                    <div className={styles.dropdown} >
                    <button class={styles.dropbtn}> <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    </button>
                    <div class={styles.dropdowncontent} style={{right:0}}>
                        <a href="#">Edit  <FontAwesomeIcon icon={faPencil}/></a>
                        <button href="#" className={styles.logout}>Logout</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products;