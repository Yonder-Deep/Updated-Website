import "./Main Hero.css";
import logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Hero() {

  const navigate = useNavigate();

  const handleClick = () => {
    // You can perform actions here before navigating
    navigate('/About');
  };
  
  return (
    <section className="hero">

      <video
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={`${import.meta.env.BASE_URL}Videos/arctic.mp4`}
          type="video/mp4"
        />
      </video>

      <div className="heroOverlay"></div>

      <div className="heroContent">

        <h1 className="heroTitle">
          YONDER DEEP
        </h1>

        <p className="heroSubtitle">
          Inspiring lifelong learning through Underwater Robotics
        </p>

        <button className="heroButton" onClick={handleClick}>
          Learn More
        </button>
        
        

      </div>

    </section>
  );
}

function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    // You can perform actions here before navigating
    navigate('/About');
  };

  return (
    <button type="button" onClick={handleClick}>
      Go to Target Page
    </button>
  );
}