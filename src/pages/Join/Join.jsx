import "./Join.css";
import Join_Hero from "../../components/Join Hero/Join Hero";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function Join() {
  return (
    <main className="joinPage">
      <Join_Hero />

      <section className="joinContent">
        <section className="joinIntro">

          <ScrollReveal>
            <h2>Applications for FALL 2026 are OPEN!!!</h2>
          </ScrollReveal>

          <ScrollReveal delay={75}>
            <p>
              At Yonder Deep, we value personal development and hands-on
              engineering experience. Members have opportunities to work across
              software, mechanical, electrical, and business subteams while
              developing multidisciplinary engineering skills.
            </p>
          </ScrollReveal>

        </section>

        <div className="joinDivider" />

        <section className="recruitmentGrid">

          <div className="recruitmentProcess">

            <ScrollReveal>
              <h3>Open Subteams</h3>
            </ScrollReveal>

            <ScrollReveal delay={75}>
              <p>
                We're currently looking for students interested in robotics,
                engineering, research, autonomous systems, and environmental
                exploration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <ul>
                <li>Software</li>
                <li>Mechanical</li>
                <li>Electrical</li>
                <li>Business</li>
              </ul>
            </ScrollReveal>

          </div>

          <div className="recruitmentTimeline">

            <ScrollReveal>
              <h3>Fall Application Timeline</h3>
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <div className="timelineRow">
                <strong>Week 1:</strong>
                <span>Applications open.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="timelineRow">
                <strong>Week 3:</strong>
                <span>Applications close.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="timelineRow">
                <strong>Week 4:</strong>
                <span>Interview emails sent.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="timelineRow">
                <strong>Week 5:</strong>
                <span>Interviews.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="timelineRow">
                <strong>Week 6:</strong>
                <span>Decisions sent.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <a
                className="joinButton"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe9fxNYY4M7qPwHecjtkKvbY_8v_Vpzo_i5n09VOc4QqaU24g/viewform?usp=header"
              >
                Apply Now
              </a>
            </ScrollReveal>

          </div>

        </section>

        <section className="faqSection">

          <ScrollReveal>
            <h2>Frequently Asked Questions</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="faqItem">
              <h3>Do I need prior engineering experience to join?</h3>
              <p>
                <strong>No.</strong> We welcome students with a wide range of experience
                levels. New members have the opportunity to learn through workshops, mentorship,
                and hands-on project work.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={75}>
            <div className="faqItem">
              <h3>Do I need to be an engineering major?</h3>
              <p>
                <strong>Not at all.</strong> Students from any major are welcome to apply!
                We value curiosity, willingness to learn, teamwork, and interest in our
                projects and research.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="faqItem">
              <h3>Which subteams are currently recruiting?</h3>
              <p>
                Recruitment availability may vary by quarter, but our primary subteams
                include Software, Mechanical, Electrical, and Business who routinely recruit
                in the Fall.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={225}>
            <div className="faqItem">
              <h3>How are new members selected?</h3>
              <p>
                Each persons' applications are reviewed and selected individuals move on to the
                interview process where you will be asked about your experiences and skills as
                well as general technical and team compatibility questions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="faqItem">
              <h3>What is the expected time commitment?</h3>
              <p>
                Members should expect to attend regular team & subteam meetings and
                contribute time outside of meetings depending on their current project responsibilities.
              </p>
            </div>
          </ScrollReveal>

        </section>
      </section>
    </main>
  );
}