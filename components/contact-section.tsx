"use client";

import { useState } from "react";

import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from "lucide-react";

import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

/* =========================================================
   CONTACT DATA
========================================================= */

const contactData = {
  email: "arhamkhanch94@gmail.com",

  whatsapp: "923127501106",

  fiverr: "YOUR_FIVERR_PROFILE_URL",

  socialLinks: {
    github: "https://github.com/Arham-94",

    linkedin: "https://www.linkedin.com/in/arham-khan-36958a370/",

    instagram: "https://www.instagram.com/arhamdeveloper",

    x: "https://x.com/ArhamDev94",
  },
};

/* =========================================================
   SOCIAL LINK COMPONENT
========================================================= */

function SocialLink({
  icon: Icon,
  name,
  href,
  color,
}: {
  icon: React.ElementType;
  name: string;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-social-link"
      aria-label={`Visit my ${name}`}
    >
      <div className="contact-social-icon" style={{ color }}>
        <Icon size={18} />
      </div>

      <span>{name}</span>

      <ArrowUpRight className="contact-social-arrow" size={15} />
    </a>
  );
}

/* =========================================================
   MAIN CONTACT SECTION
========================================================= */

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  /* =======================================================
     COPY EMAIL
  ======================================================= */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${contactData.email}`;
    }
  };

  /* =======================================================
     WHATSAPP URL
  ======================================================= */

  const whatsappUrl = `https://wa.me/${contactData.whatsapp}`;

  return (
    <section id="contact" className="contact-section">
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div className="contact-background-grid" />

      <div className="contact-background-glow" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="contact-container">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="contact-header">
          <div className="contact-eyebrow-wrapper">
            <span className="contact-eyebrow-dot" />

            <span className="contact-eyebrow">GET IN TOUCH</span>
          </div>

          <h2 className="contact-title">
            Let&apos;s build
            <br />
            <span>something meaningful.</span>
          </h2>

          <p className="contact-intro">
            Have an idea, project, or opportunity in mind? I&apos;d love to hear
            about it and turn it into something useful, thoughtful, and
            memorable.
          </p>
        </div>

        {/* ===================================================
            FIVERR CTA
        =================================================== */}

        <a
          href={contactData.fiverr}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-fiverr-block"
        >
          <div className="contact-fiverr-content">
            <div className="contact-fiverr-top">
              <span className="contact-fiverr-label">AVAILABLE ON FIVERR</span>

              <ArrowUpRight size={20} />
            </div>

            <h3>
              Prefer Fiverr?
              <br />
              <span>Hire me there.</span>
            </h3>

            <p>
              Browse my services, packages, and reviews on Fiverr and start your
              project directly through the platform.
            </p>
          </div>

          <div className="contact-fiverr-action">
            <span>View my Fiverr profile</span>

            <ArrowUpRight size={17} />
          </div>
        </a>

        {/* ===================================================
            CONTACT GRID
        =================================================== */}

        <div className="contact-grid">
          {/* =================================================
              LEFT — AVAILABILITY / EMAIL
          ================================================= */}

          <div className="contact-info">
            {/* Availability */}

            <div className="contact-availability">
              <div className="contact-availability-indicator">
                <span />
              </div>

              <div>
                <span className="contact-availability-label">
                  CURRENT STATUS
                </span>

                <p>Available for new projects</p>
              </div>
            </div>

            {/* Email */}

            <div className="contact-email-block">
              <span className="contact-small-label">EMAIL</span>

              <div className="contact-email-row">
                <a
                  href={`mailto:${contactData.email}`}
                  className="contact-email"
                >
                  {contactData.email}
                </a>

                <button
                  type="button"
                  className="contact-copy-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>

              <span className="contact-copy-status">
                {copied ? "Email copied" : "Click the icon to copy"}
              </span>
            </div>

            {/* Location / Response */}

            <div className="contact-meta">
              <div>
                <span>BASED IN</span>
                <strong>Pakistan</strong>
              </div>

              <div>
                <span>RESPONSE</span>
                <strong>Usually within 24h</strong>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — PRIMARY CONTACT CARD
          ================================================= */}

          <div className="contact-card">
            {/* Card top */}

            <div className="contact-card-top">
              <div className="contact-card-icon">
                <MessageCircle size={20} />
              </div>

              <span>DIRECT CONTACT</span>
            </div>

            {/* Main content */}

            <div className="contact-card-content">
              <span className="contact-card-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h3>
                Let&apos;s talk
                <br />
                about it.
              </h3>

              <p>
                The fastest way to reach me is through WhatsApp. Send me a
                message and tell me what you&apos;re working on.
              </p>
            </div>

            {/* WhatsApp button */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-button"
            >
              <div
                className="contact-whatsapp-icon"
                style={{ color: "#25D366" }}
              >
                <MessageCircle size={18} />
              </div>

              <span>Chat on WhatsApp</span>

              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* ===================================================
            SOCIAL LINKS
        =================================================== */}

        <div className="contact-social-section">
          <div className="contact-social-heading">
            <span className="contact-small-label">ELSEWHERE</span>

            <span className="contact-social-line" />
          </div>

          <div className="contact-social-grid">
            {/* GitHub */}

            <SocialLink
              icon={SiGithub}
              name="GitHub"
              href={contactData.socialLinks.github}
              color="#ffffff"
            />

            {/* LinkedIn */}

            <SocialLink
              icon={FaLinkedinIn}
              name="LinkedIn"
              href={contactData.socialLinks.linkedin}
              color="#0A66C2"
            />

            {/* Instagram */}

            <SocialLink
              icon={SiInstagram}
              name="Instagram"
              href={contactData.socialLinks.instagram}
              color="#E4405F"
            />

            {/* X */}

            <SocialLink
              icon={SiX}
              name="X / Twitter"
              href={contactData.socialLinks.x}
              color="#ffffff"
            />

            {/* Email */}

            <a
              href={`mailto:${contactData.email}`}
              className="contact-social-link"
              aria-label="Send me an email"
            >
              <div className="contact-social-icon" style={{ color: "#EA4335" }}>
                <Mail size={18} />
              </div>

              <span>Email</span>

              <ArrowUpRight className="contact-social-arrow" size={15} />
            </a>
          </div>
        </div>

        {/* ===================================================
            FOOTER STATEMENT
        =================================================== */}

        <div className="contact-footer">
          <span>HAVE AN IDEA?</span>

          <span className="contact-footer-line" />

          <strong>Let&apos;s make it real.</strong>
        </div>
      </div>
    </section>
  );
}
