import "./Sponsors.css";

import AltiumLogo from "../../assets/Sponsors/Altium_Logo.png";
import BlueRoboticsLogo from "../../assets/Sponsors/BlueRobotics_Logo.png";
import TGIFLogo from "../../assets/Sponsors/TGIF_Logo.png";
const sponsors = [
  {
    name: "Altium",
    logo: AltiumLogo,
    link: "https://www.altium.com/?srsltid=AfmBOopDLv5gc9AF20JHMjD2IG8zZyvHWupYLoJv2-2PiY7FKUszemtN"
  },
  {
    name: "BlueRobotics",
    logo: BlueRoboticsLogo,
    link: "https://bluerobotics.com"
  },
  {
    name: "The Green Initiative Fund",
    logo: TGIFLogo,
    link: "https://studentsustainability.ucsd.edu"
  }
];

export default function Sponsors() {
  return (
    <section className="sponsorsSection">
      <div className="sponsorsHeader">
        <h2>Thanks to Our Sponsors</h2>
        <p>
        </p>
      </div>

      <div className="sponsorsGrid">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.link}
            className="sponsorCard"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
          </a>
        ))}
      </div>
    </section>
  );
}