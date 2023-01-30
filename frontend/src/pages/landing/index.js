import image from "./Assets/suitcase_bg.jpg"
function Landing() {
  return (
    <div style={{
      backgroundImage: `url(${image})`, backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
    }}>



    </div>
  );
}

export default Landing;