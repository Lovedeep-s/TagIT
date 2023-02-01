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
        <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus sequi quibusdam commodi, 
          <br/>deserunt natus odio ipsum sunt adipisci, consequuntur non aliquid! Iusto nobis obcaecati harum voluptate fugit ducimus magni. 
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus sequi quibusdam commodi, 
          <br/>deserunt natus odio ipsum sunt adipisci, consequuntur non aliquid! Iusto nobis obcaecati harum voluptate fugit ducimus magni.  
        </div>
        
      </div>
      </section>
    );
  }
  
  export default About