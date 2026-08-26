import "./Join Hero.css";
import heroImage from "../../assets/linkedinED.JPG";

export default function Join_Hero() {
  return (
    <section
      className="join_hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="join_heroOverlay"></div>

      <div className="join_heroContent">
        <h1 className="join_heroTitle ">Join Us!</h1>
        
      </div>
    </section> 
  );
}