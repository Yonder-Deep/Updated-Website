import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGithub
} from "react-icons/fa";

import ScrollReveal from "./ScrollReveal/ScrollReveal";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",

        background:
          "linear-gradient(to top, #061824, #0A1C2B)",

        borderTop:
          "1px solid rgba(158,221,238,.15)",

        backdropFilter: "blur(10px)",

        color: "#F7FBFF"
      }}
    >

      {/* accent line */}

      <div
        style={{
          width: "100%",
          height: "2px",

          background:
            "linear-gradient(to right, transparent, #9eddee, transparent)"
        }}
      />

      <div
        style={{
          maxWidth: "1300px",

          margin: "0 auto",

          padding: "3rem 2rem 2rem",

          display: "flex",

          flexWrap: "wrap",

          justifyContent: "space-between",

          gap: "3rem"
        }}
      >

        {/* left */}

        <ScrollReveal>
          <div
            style={{
              flex: "1 1 320px"
            }}
          >

            <h2
              style={{
                color: "#9eddee",

                marginBottom: "1rem",

                letterSpacing: "2px",

                fontSize: "1.6rem"
              }}
            >
              YONDER DEEP
            </h2>

            <p
              style={{
                color: "#c1ccde",

                lineHeight: "1.8",

                maxWidth: "420px"
              }}
            >
              Student-led robotics organization
              focused on autonomous marine systems,
              Arctic exploration, and engineering
              innovation.
            </p>

          </div>
        </ScrollReveal>


        {/* middle */}

        <ScrollReveal delay={75}>
          <div
            style={{
              flex: "1 1 220px"
            }}
          >

            <h3
              style={{
                marginBottom: "1rem"
              }}
            >
              Contact
            </h3>

            <div
              style={{
                color: "#d5d6e1",

                lineHeight: "1.8"
              }}
            >
              3180 Voigt Dr
              <br />
              La Jolla, CA 92093
            </div>

            <a
              href="mailto:yonderdeep@ucsd.edu"
              style={{
                display: "inline-block",

                marginTop: "1rem",

                color: "#9eddee",

                textDecoration: "none"
              }}
            >
              yonderdeep@ucsd.edu
            </a>

          </div>
        </ScrollReveal>


        {/* right */}

        <ScrollReveal delay={150}>
          <div
            style={{
              flex: "1 1 220px"
            }}
          >

            <h3
              style={{
                marginBottom: "1rem"
              }}
            >
              Connect
            </h3>

            <div
              style={{
                display: "flex",

                gap: "1rem"
              }}
            >

              <a
                href="https://www.instagram.com/yonderdeep/"
                target="_blank"
                rel="noreferrer"
                style={iconStyle}
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/yonderdeep/"
                target="_blank"
                rel="noreferrer"
                style={iconStyle}
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:yonderdeep@ucsd.edu"
                style={iconStyle}
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/Yonder-Deep/"
                target="_blank"
                rel="noreferrer"
                style={iconStyle}
              >
                <FaGithub />
              </a>

            </div>

          </div>
        </ScrollReveal>

      </div>


      {/* copyright */}

      <ScrollReveal delay={225}>
        <div
          style={{
            borderTop:
              "1px solid rgba(255,255,255,.06)",

            padding: "1.25rem",

            textAlign: "center",

            color: "#98a6be",

            fontSize: ".9rem"
          }}
        >
          © {new Date().getFullYear()} Yonder Deep.
          All rights reserved.
        </div>
      </ScrollReveal>

    </footer>
  );
};

const iconStyle = {

  width: "46px",

  height: "46px",

  borderRadius: "14px",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  textDecoration: "none",

  color: "#f7fbff",

  background:
    "rgba(255,255,255,.05)",

  border:
    "1px solid rgba(158,221,238,.12)",

  transition:
    "all .25s ease"
};

export default Footer;