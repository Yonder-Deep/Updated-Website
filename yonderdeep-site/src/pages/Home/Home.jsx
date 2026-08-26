import "./Home.css";
import Hero from "../../components/Main Hero/Main Hero";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

import labImage from "../../assets/Home/lab.jpg";
import teamImage from "../../assets/Home/team.jpg";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="homeMission">
        <ScrollReveal>
          <p className="homeEyebrow">Our Mission</p>
        </ScrollReveal>

        <ScrollReveal delay={75}>
          <h2>Building the next generation of ocean engineers.</h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p>
            Yonder Deep inspires lifelong learning through underwater robotics,
            giving students hands-on experience in engineering, research,
            teamwork, and autonomous systems.
          </p>
        </ScrollReveal>
      </section>

      <section className="homeFeature">
        <img src={labImage} alt="Yonder Deep lab space" />

        <div>
          <ScrollReveal>
            <p className="homeEyebrow">Our Lab</p>
          </ScrollReveal>

          <ScrollReveal delay={75}>
            <h2>Our hands-on engineering workspace</h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p>
              Our lab houses our tools, projects, and, machines but most importantly
              serves as a space for our members to collaborate, and learn from one another
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="homeFeature homeFeatureReverse">
        <img src={teamImage} alt="Yonder Deep team working together" />

        <div>
          <ScrollReveal>
            <p className="homeEyebrow">Our Team</p>
          </ScrollReveal>

          <ScrollReveal delay={75}>
            <h2>Student led design </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p>
              Our team brings together students from software, mechanical,
              electrical, & other backgrounds to solve real world climate
              challenges and help keep our planet sustainable!
            </p>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
}