import styles from "../Styles/faq.module.css"
// import myimg from "../Assets/about1.jpg"
import myimg from "../Assets/fag.jpg"
function Faq() {
    return (
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
                            width: '80%',
                        }}
                    />
                    <div className={styles.text}>
                    <p>
                    Also, any geeks can help other geeks by writing articles
                    on the GeeksforGeeks, <br/>publishing articles follow few
                    steps that are Articles that need little modification
                    <br/>
                    <br/>
                    improvement from reviewers are published first. To
                    quickly get your articles reviewed, please refer
                    <br/>
                    <br/>
                    existing articles, their formatting style, coding
                    style, and try to make you are close to them.
                    </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Faq