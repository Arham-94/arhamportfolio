"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

/* =========================================================
   CERTIFICATE DATA
========================================================= */

export const certificates = [
  {
    title: "Prompt Engineering",
    path: "/certificates/promptengineering.png",
  },
  {
    title: "Claude AI fluency",
    path: "/certificates/anthropicai.png",
  },
  {
    title: "React JS",
    path: "/certificates/reactjs.png",
  },
  {
    title: "Web Development with AI",
    path: "/certificates/aiforwebdev.png",
  },
  {
    title: "Python",
    path: "/certificates/pythondeveloper.png",
  },
  {
    title: "Django",
    path: "/certificates/pythondjango.png",
  },
];

/* =========================================================
   LOADING STATE
========================================================= */

function CertificateLoader() {
  return (
    <div className="certificate-loader">
      <div className="certificate-loader-paper">
        <div className="certificate-loader-line certificate-loader-line-lg" />
        <div className="certificate-loader-line certificate-loader-line-md" />
        <div className="certificate-loader-seal" />

        <div className="certificate-loader-content">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <span className="certificate-loading-text">Loading certificate...</span>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function CertificatesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Store the path of the image currently being loaded.
   *
   * This fixes the first-image loading problem because
   * loading is directly connected to the active image.
   */
  const [loadedImages, setLoadedImages] = useState<Set<string>>(
    () => new Set(),
  );

  const activeCertificate = certificates[activeIndex];

  const isLoading = !loadedImages.has(activeCertificate.path);

  /* =======================================================
     PRELOAD ALL CERTIFICATES
     This also makes switching between certificates smoother.
  ======================================================= */

  useEffect(() => {
    certificates.forEach((certificate) => {
      const image = new Image();

      image.src = certificate.path;

      image.onload = () => {
        setLoadedImages((previous) => {
          const next = new Set(previous);
          next.add(certificate.path);
          return next;
        });
      };

      image.onerror = () => {
        /*
         * Remove the image from loading state even if
         * the image fails to load.
         */
        setLoadedImages((previous) => {
          const next = new Set(previous);
          next.add(certificate.path);
          return next;
        });
      };
    });
  }, []);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const previousCertificate = () => {
    setActiveIndex((current) =>
      current === 0 ? certificates.length - 1 : current - 1,
    );
  };

  const nextCertificate = () => {
    setActiveIndex((current) =>
      current === certificates.length - 1 ? 0 : current + 1,
    );
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section id="certificates" className="certificates-section">
      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="certificates-header">
        <div>
          <span className="certificates-eyebrow">CERTIFICATIONS</span>

          <h2 className="certificates-title">
            Proof of
            <br />
            <span>continuous learning.</span>
          </h2>
        </div>

        <p className="certificates-description">
          A collection of certifications and achievements representing my
          journey across web development, AI, and modern technologies.
        </p>
      </div>

      {/* ===================================================
          SHOWCASE
      =================================================== */}

      <div className="certificates-showcase">
        {/* =================================================
            MOBILE / TABLET TOPBAR
        ================================================= */}

        <div className="certificate-mobile-topbar">
          <span className="certificate-counter">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(certificates.length).padStart(2, "0")}
          </span>

          <span className="certificate-active-title">
            {activeCertificate.title}
          </span>
        </div>

        {/* =================================================
            THUMBNAILS
        ================================================= */}

        <div className="certificates-thumbnails-wrapper">
          <div className="certificates-thumbnails">
            {certificates.map((certificate, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={certificate.title}
                  type="button"
                  className={`certificate-thumbnail ${
                    isActive ? "is-active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${certificate.title}`}
                  aria-pressed={isActive}
                >
                  <div className="certificate-thumbnail-image">
                    <img src={certificate.path} alt="" loading="lazy" />
                  </div>

                  <div className="certificate-thumbnail-info">
                    <span className="certificate-thumbnail-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="certificate-thumbnail-title">
                      {certificate.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            MAIN VIEWER
        ================================================= */}

        <div className="certificate-viewer">
          {/* Top metadata */}

          <div className="certificate-viewer-top">
            <div className="certificate-viewer-label">
              <Award size={15} />

              <span>Certificate</span>
            </div>

            <span className="certificate-viewer-index">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Image */}

          <div className="certificate-image-stage">
            {isLoading && <CertificateLoader />}

            <img
              className={`certificate-main-image ${
                isLoading ? "is-loading" : "is-loaded"
              }`}
              src={activeCertificate.path}
              alt={activeCertificate.title}
              onLoad={() => {
                setLoadedImages((previous) => {
                  const next = new Set(previous);
                  next.add(activeCertificate.path);
                  return next;
                });
              }}
              onError={() => {
                setLoadedImages((previous) => {
                  const next = new Set(previous);
                  next.add(activeCertificate.path);
                  return next;
                });
              }}
            />

            {/* Navigation */}

            <div className="certificate-navigation">
              <button
                type="button"
                className="certificate-nav-button"
                onClick={previousCertificate}
                aria-label="Previous certificate"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className="certificate-nav-button"
                onClick={nextCertificate}
                aria-label="Next certificate"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Bottom information */}

          <div className="certificate-viewer-bottom">
            <div>
              <span className="certificate-viewer-number">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <h3>{activeCertificate.title}</h3>
            </div>

            <span className="certificate-viewer-total">
              {String(certificates.length).padStart(2, "0")} certificates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
