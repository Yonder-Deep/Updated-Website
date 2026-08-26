import { useState } from "react";
import "./AUV.css";

import ModelViewer from "../../components/ModelViewer/ModelViewer";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

/* ---------------- HERO ---------------- */

import heroImage from "../../assets/AUV/Nautilus-AUV-Render-2.png";

/* ---------------- TIMELINE IMAGES ---------------- */

import firstMeeting from "../../assets/AUV/2017.png";
import poolTest from "../../assets/AUV/2018.png";

import auvCad from "../../assets/AUV/AUVcad.png";
import auvBuilt from "../../assets/AUV/AUVbuilt.png";
import auvPoolTest from "../../assets/AUV/AUVpooltest.png";

import presentation from "../../assets/AUV/DIB-group-photo-1-1.png";
import auvPoolTest2 from "../../assets/AUV/20-21-leads-assembly-1-1.png";
import auvPoolTest3 from "../../assets/AUV/Diving-AUV-1.png";

import auvPoolTest4 from "../../assets/AUV/2023p2.jpg";
import auvPoolTest4Group from "../../assets/AUV/2023p1.jpg"

import arctic1 from "../../assets/AUV/Arctic1.JPG";
import arctic2 from "../../assets/AUV/Arctic2.jpg";


/* =========================================================
   TIMELINE GALLERY
   ========================================================= */

function TimelineGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const previousImage = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="timelineGallery">
      <div className="galleryImageContainer">
        <img
          src={currentImage.src}
          alt={currentImage.caption}
          className="galleryMainImage"
          loading="lazy"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="galleryArrow galleryArrowLeft"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              className="galleryArrow galleryArrowRight"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="galleryInfo">
        <ScrollReveal>
          <p>{currentImage.caption}</p>
        </ScrollReveal>

        {images.length > 1 && (
          <ScrollReveal>
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}


/* =========================================================
   AUV PAGE
   ========================================================= */

export default function AUV() {
  const timeline = [
    {
      year: "2025",
      description:
        "Yonder Deep's First Ever Arctic trip, In collaboration with Grant Deane of Scripps Institute of Oceanography, we made subsurface measurements of glaciers and analyzed the sounds produced by the melting ice.",
      images: [
        {src:arctic2,
          caption:"Mounting Acoustic Transducer Starboard."
        },
        {src:arctic1,
          caption:"Deploying Microstructure Sensor."
        }
      ],
    },
    {
      year: "2023-2024",
      description:
        "",
      images: [
         {src:auvPoolTest4Group,
          caption:"Team photo after Pool Test!"
        },
        {src:auvPoolTest4,
          caption:"November 2023: AUV Pool Test"
        }
      ],
    },

    {
      year: "2021-2022",
      description:
        "Focused on autonomy improvements, sensor integration, and extensive pool testing.",
      images: [
        {
          src: presentation,
          caption:
            "November 2021: Presented our work at the grand opening of UCSD's Design and Innovation Building!",
        },
        {
          src: auvPoolTest2,
          caption:
            "December 2021: Second ever AUV pool test! Tested water tightness of the improved design and justified assembly and design decisions.",
        },
        {
          src: auvPoolTest3,
          caption:
            "February 2022: Third pool test and another major milestone! First time feeding live control commands to the AUV and first time testing full-scale dive commands.",
        },
      ],
    },

    {
      year: "2020-2021",
      description:
        "Major redesign of vehicle architecture and subsystem integration.",
      images: [
        {
          src: auvCad,
          caption:
            "November 2020: Second CAD iteration finished.",
        },
        {
          src: auvBuilt,
          caption:
            "April 2021: Over the course of three in-person meetings nearing the end of the year, our first full-scale AUV was fully manufactured and assembled!",
        },
        {
          src: auvPoolTest,
          caption:
            "May 2021: First ever AUV pool test! Tested pre-programmed movement commands, watertightness, and ease of assembly. A huge milestone for Yonder Deep that legitimized our mission!",
        },
      ],
    },

    {
      year: "2018-2019",
      description:
        "Proof-of-concept AUV successfully tested! Transitioned from this point to full-scale development.",
      images: [
        {
          src: poolTest,
          caption:
            "September 2018 - January 2019: The AUV's first steps.",
        },
      ],
    },

    {
      year: "2017",
      description:
        "Conception of Yonder Deep! We were founded to address issues of climate change by creating a fully autonomous, 3D-printed AUV.",
      images: [
        {
          src: firstMeeting,
          caption:
            "September 2017: One of our very first meetings!",
        },
      ],
    },
  ];

  return (
    <main className="auvPage">

      {/* ================= HERO ================= */}

      <section
        className="auvHero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="heroOverlay">
          <div className="heroContent">

            <ScrollReveal>
              <h1>AUV</h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                Nickname: Nautilus
                <br />
                A low-cost AUV designed primarily to gather acoustic data from glaciers.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section className="projectIntroSection">

        <ScrollReveal>
          <p>
            Nautilus is Yonder Deep&apos;s autonomous underwater vehicle designed
            for environmental and oceanographic research. The platform utilizes affordable
            parts including a 3d printed frame to navigate glaciers and collect crucial climate
            data without disturbing the environment.
          </p>
        </ScrollReveal>

      </section>


      {/* ================= FEATURE IMAGE ================= */}

      <section className="projectImageSection">
        <img
          src={`${import.meta.env.BASE_URL}Images/USVGroup.jpg`}
          alt="Yonder Deep team with the Nautilus AUV"
          className="projectFeatureImage"
        />
      </section>


      {/* ================= OVERVIEW ================= */}

      <section className="overviewSection">
        <div className="overviewGrid">

          <div className="overviewText">

            <ScrollReveal>
              <p className="sectionEyebrow">Project Overview</p>
            </ScrollReveal>

            <ScrollReveal delay={75}>
              <h2>AUV Specifications</h2>
            </ScrollReveal>

            <div className="overviewHighlights">

              <div className="highlightItem">
                <ScrollReveal>
                  <span>Platform</span>
                  <strong>Underwater</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={50}>
                  <span>Dimensions</span>
                  <strong>2" x 4" x 3"</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={100}>
                  <span>Speed</span>
                  <strong>1 mph</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={150}>
                  <span>Cost</span>
                  <strong>3 million</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={200}>
                  <span>Range</span>
                  <strong>3 feet</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={250}>
                  <span>Battery life</span>
                  <strong>1 sec</strong>
                </ScrollReveal>
              </div>

            </div>
          </div>

          <div className="overviewViewer">
            <ModelViewer
              src="Models/USV+Assembly-modified.glb"
              alt="AUV 3D model"
              camera-controls
              auto-rotate
              camera-orbit="0deg 75deg 70%"
              shadow-intensity="1"
              exposure="1"
            />
          </div>

        </div>
      </section>


      {/* ================= TIMELINE ================= */}

      <section className="timelineSection">

        <ScrollReveal>
          <h2>Project Timeline</h2>
        </ScrollReveal>

        {timeline.map((yearBlock, index) => (
          <details
            className="timelineCard"
            key={yearBlock.year}
          >
            <summary>
              <div className="timelineDot" />

              <ScrollReveal delay={index * 50}>
                <h3>{yearBlock.year}</h3>
              </ScrollReveal>

            </summary>

            <div className="timelineContent">

              <ScrollReveal>
                <p>{yearBlock.description}</p>
              </ScrollReveal>

              <TimelineGallery
                images={yearBlock.images}
              />
            </div>
          </details>
        ))}

      </section>

    </main>
  );
}