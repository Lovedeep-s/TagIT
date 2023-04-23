import styles from "../Styles/about.module.css"
// import myimg from "../Assets/about1.jpg"
function About() {
    return (
        <section id="about">
      <div className={styles.container}>
         <h1 className={styles.heading}>About Us</h1> 
         <hr
          style={{
            background: 'rgb(232,107,121)',
            color: 'rgb(232,107,121)',
            borderColor: 'rgb(232,107,121)',
            height: '0.1px',
            width: '80%',
          }}
        />
        <div >
        Our solution addresses the stress and privacy concerns of adventure seekers who often worry about misplaced or lost luggage. To protect customer privacy, we have created a unique QR code for every customer that can be scanned to locate lost luggage.
          <br/><br/>
          The customer will receive an email with the location details once the QR code is scanned. The live chat feature in our software enables the finder to contact the user and share their respective location to retrieve the luggage. With our solution, adventure seekers can travel with peace of mind, knowing that their privacy is protected, and they can easily locate their lost luggage.
        </div>       
      </div>
      </section>
    );
  }
  
  export default About