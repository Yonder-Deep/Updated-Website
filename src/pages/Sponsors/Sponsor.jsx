import "./Sponsor.css";
import Sponsors from "../../components/Sponsors/Sponsors";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function Sponsor() {
  return (
    <main className="sponsorPage">

      <section className="sponsorHero">
        <div className="sponsorHeroOverlay">
          <ScrollReveal>
            <h1>
              THANK YOU 
              <br />
              TO OUR SPONSORS!!!
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="sponsorInfoSection">
        <div className="sponsorInfoGrid">

          <div className="sponsorText">
            <ScrollReveal>
              <p>
                With the support of our sponsors, our projects can be brought to life.
                We are incredibly grateful for the organizations that give
                our students the resources to pursue our ambitious goals,
                research, and ocean exploration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={75}>
              <p>
                Our sponsorship packet provides additional information about
                partnership opportunities, sponsorship levels, and how your
                support directly contributes to Yonder Deep&apos;s mission.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p>
                We are always looking to connect with companies and organizations
                interested in supporting our research. If you are interested in 
                partnering with Yonder Deep, view our sponsorship packet or reach 
                out to us directly. Thank you!
              </p>
            </ScrollReveal>
          </div>

          <div className="sponsorAction">
            <ScrollReveal>
              <a
                href="/Yonder-Deep-Sponsorship-Packet.pdf"
                className="sponsorPacketButton"
                target="_blank"
                rel="noreferrer"
              >
                VIEW OUR
                <br />
                SPONSORSHIP
                <br />
                PACKET
              </a>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <Sponsors />

    </main>
  );
}