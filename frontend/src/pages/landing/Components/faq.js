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
                    <b>Ask some question?</b> <br/>
                     Also, any geeks can help other geeks by writing articles
                    on the GeeksforGeeks, 
                    <br/>
                    <br/>
                    <FontAwesomeIcon icon={faCheck} className={styles.check}/>
                    <b>Ask some question?</b>  <br/>
                     publishing articles follow few
                    steps that are Articles that need little modification
                    <br/>
                    <br/>
                    <FontAwesomeIcon icon={faCheck} className={styles.check}/>
                    <b>Ask some question?</b>  <br/>
                     improvement from reviewers are published first. To
                    quickly get your articles reviewed, please refer
                    <br/>
                    <br/>
                    <FontAwesomeIcon icon={faCheck} className={styles.check}/>
                    <b>Ask some question?</b>  <br/>
                     existing articles, their formatting style, coding
                    style, and try to make you are close to them.
                    </p>
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
}

export default Faq