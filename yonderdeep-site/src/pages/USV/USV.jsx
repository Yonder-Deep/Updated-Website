import { useState } from "react";
import "./USV.css";

import ModelViewer from "../../components/ModelViewer/ModelViewer";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

/* ---------------- HERO ---------------- */

/*
  Change this path if your actual USV hero image
  has a different filename.
*/
import heroImage from "../../assets/USVDramatic.png";

/* ---------------- TIMELINE IMAGES ---------------- */

/*
  Replace these with your real USV timeline images.

  Example:

  import usv2025A from "../../assets/USV/2025-1.jpg";
  import usv2025B from "../../assets/USV/2025-2.jpg";
*/


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
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1
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
   USV PAGE
   ========================================================= */

export default function USV() {

  /*
    Replace these placeholder timeline entries with your
    actual USV project history when you have the dates/images.
  */

  const timeline = [
    {
      year: "2025-2026",

      description:
        "Continued development of Neptune with a focus on autonomous navigation, field reliability, sensor integration, and Arctic research capabilities.",

      images: [],
    },

    {
      year: "2024-2025",

      description:
        "Development and testing of the USV platform, including mechanical, electrical, and software integration.",

      images: [],
    },

    {
      year: "2023-2024",

      description:
        "Initial design and development of Neptune as an autonomous surface vehicle for environmental and oceanographic research.",

      images: [],
    },
  ];


  return (
    <main className="usvPage">


      {/* ================= HERO ================= */}

      <section
        className="usvHero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >

        <div className="heroOverlay">

          <div className="heroContent">

            <h1>USV</h1>

            <p>
              Nickname: Neptune
              <br />

              An autonomous surface vehicle designed for
              environmental and oceanographic research.
            </p>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="projectIntroSection">

        <ScrollReveal>
          <p>
            Neptune is Yonder Deep&apos;s autonomous surface vehicle designed
            to support environmental and oceanographic research in Arctic
            environments. The platform integrates mechanical, electrical,
            and software systems into a modular surface vehicle capable of
            autonomous navigation, data collection, and field research.
          </p>
        </ScrollReveal>

      </section>


      {/* ================= FEATURE IMAGE ================= */}

      <section className="projectImageSection">

        <img
          src={`$import.meta.env.BASE_URL}Images/USVGroup.jpg`}
          alt="Yonder Deep team with the Neptune USV"
          className="projectFeatureImage"
        />

      </section>


      {/* ================= OVERVIEW ================= */}

      <section className="overviewSection">

        <div className="overviewGrid">


          {/* LEFT SIDE */}

          <div className="overviewText">

            <ScrollReveal>
              <p className="sectionEyebrow">
                Project Overview
              </p>
            </ScrollReveal>

            <ScrollReveal delay={75}>
              <h2>
                USV Specifications
              </h2>
            </ScrollReveal>


            <div className="overviewHighlights">

              <div className="highlightItem">
                <ScrollReveal>
                  <span>Platform</span>
                  <strong>Surface</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={50}>
                  <span>Dimensions</span>
                  <strong>TBD</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={100}>
                  <span>Speed</span>
                  <strong>TBD</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={150}>
                  <span>Cost</span>
                  <strong>TBD</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={200}>
                  <span>Range</span>
                  <strong>TBD</strong>
                </ScrollReveal>
              </div>

              <div className="highlightItem">
                <ScrollReveal delay={250}>
                  <span>Battery Life</span>
                  <strong>TBD</strong>
                </ScrollReveal>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE - 3D MODEL */}

          <div className="overviewViewer">

            <ModelViewer
              src="/Models/USV+Assembly-modified.glb"
              alt="Neptune USV 3D model"
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
          <h2>
            Project Timeline
          </h2>
        </ScrollReveal>


        {timeline.map((yearBlock, index) => (

          <details
            className="timelineCard"
            key={yearBlock.year}
          >

            <summary>

              <div className="timelineDot" />

              <ScrollReveal delay={index * 50}>
                <h3>
                  {yearBlock.year}
                </h3>
              </ScrollReveal>

            </summary>


            <div className="timelineContent">

              <ScrollReveal>
                <p>
                  {yearBlock.description}
                </p>
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