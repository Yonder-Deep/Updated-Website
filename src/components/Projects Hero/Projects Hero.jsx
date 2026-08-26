import "./Projects Hero.css";
import logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Projects_Hero() {
  return (
    <section className="projects_hero">

      <video
        className="projects_heroVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/Videos/Underwater.mp4"
          type="video/mp4"
        />
      </video>

      <div className="projects_heroOverlay"></div>

      <div className="projects_heroContent">

        <h1 className="projects_heroTitle">
          Our Projects
        </h1>

        <p className="projects_heroSubtitle">
          Look at our work over the years!
        </p>

      </div>

    </section>
  );
}
