import "./Triton RoboSub.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function TritonRoboSub() {
  return (
    <main className="robosubPage">

      <section className="comingSoonSection">

        <ScrollReveal>
          <p className="comingSoonEyebrow">
            Triton RoboSub
          </p>
        </ScrollReveal>

        <ScrollReveal delay={75}>
          <h1>
            Coming Soon
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="comingSoonText">
            We&apos;re currently developing this page to showcase
            Triton RoboSub's future and current projects. Stay Tuned!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={225}>
          <div className="comingSoonLine" />
        </ScrollReveal>

      </section>

    </main>
  );
}