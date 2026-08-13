"use client";

import { ArrowUpRight, Heart } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        {/* Top line */}
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <span className="site-footer-mark">Ak</span>

            <div>
              <strong>Arham</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <a href="/" className="site-footer-back-top">
            <span>BACK TO TOP</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Divider */}
        <div className="site-footer-divider" />

        {/* Bottom */}
        <div className="site-footer-bottom">
          <div className="site-footer-copyright">
            <span>© {currentYear} Arham.</span>

            <span className="site-footer-dot">•</span>

            <span>All rights reserved.</span>
          </div>

          <div className="site-footer-made">
            <span>Designed & built with</span>

            <Heart size={13} fill="currentColor" />

            <span>by Arham</span>
          </div>

          {/* Socials */}
          <div className="site-footer-socials">
            <a
              href="https://github.com/Arham-94"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/arham-khan-36958a370/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={15} />
            </a>

            <a
              href="https://www.instagram.com/arhamdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SiInstagram size={15} />
            </a>

            <a
              href="https://x.com/ArhamDev94"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <SiX size={14} />
            </a>
          </div>
        </div>

        {/* Tiny signature */}
        <div className="site-footer-signature">
          <span>PORTFOLIO</span>
          <span>/</span>
          <span>{currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
