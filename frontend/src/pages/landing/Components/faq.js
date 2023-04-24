import styles from "../Styles/faq.module.css"
// import myimg from "../Assets/about1.jpg"
import myimg from "../Assets/fag.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faCheckDouble, faCheckToSlot, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
function Faq() {
    return (
        <section id="faq">
        <div className={styles.container}>

            <div class={styles.box}>
                <div class={styles.boxRow1}>
                    <img
                        src={myimg}/>
                </div>
                <div class={styles.boxRow2}>
                    <h2 className={styles.heading}>FAQs</h2>
                    <hr
                        style={{
                            background: 'rgb(232,107,121)',
                            color: 'rgb(232,107,121)',
                            borderColor: 'rgb(232,107,121)',
                            height: '0.1px',
                            width: '90%',
                        }}
                    />
                    <div className={styles.text}>
                    <p>
                    <FontAwesomeIcon icon={faCheck} className={styles.check} />
                    <b>How do I register for this luggage protection service?</b> <br/>
                    To register for our service, simply visit our website and 
                    click on the "Sign Up" button. You'll be prompted to provide some 
                    basic information, such as your name and contact details. 
                    Once you've completed the registration process, 
                    you will be able to Generate a unique QR code that you 
                    can use to identify your luggage. 
                    <br/>
                    <br/>
                    <FontAwesomeIcon icon={faCheck} className={styles.check}/>
                    <b>What if I lose my phone or the QR code becomes unreadable?</b>  <br/>
                    Don't worry you can always generate a new QR code or Download the QR Again.
                    <br/>
                    <br/>
                    <FontAwesomeIcon icon={faCheck} className={styles.check}/>
                    <b>What happens if my luggage goes missing?</b>  <br/>
                    Someone will scan your QR code and will be able 
                    to contact you.
                    <br/>
                    <br/>
                    <FontAwesomeIcon icon={faCheck} className={styles.check}/>
                    <b>Is my personal information secure with your service?</b>  <br/>
                    Yes, we take the privacy and security of our customers very seriously. 
                    All personal information provided during registration is encrypted and stored securely. 
                        <br></br><br></br>
                    <div className={styles.big}>
        <div className={styles.inputBoxContainer}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    
                    // onChange={(e) => setName(e.target.value)}
                    placeholder=" Send Feedback "
                    className={styles.askq}
                  />
                </div>
                </div>
                    </p>
                    </div>
                </div>
                

            </div>
        </div>
        
        </section>
        
    );
}

export default Faq