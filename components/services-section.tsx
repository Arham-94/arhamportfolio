"use client";

import { ArrowUpRight, Check, ExternalLink } from "lucide-react";

/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    number: "01",
    badge: "MOST POPULAR",
    title: "Modern Business Website",
    description:
      "I will design and develop a modern, responsive website that gives your business a professional online presence.",
    category: "WEB DEVELOPMENT",
    price: "Custom",
    delivery: "Based on project scope",
    features: [
      "Modern responsive design",
      "Mobile & desktop optimized",
      "Interactive UI",
      "SEO-friendly structure",
      "Deployment assistance",
    ],
    technologies: ["React", "Next.js", "JavaScript"],
    href: "#contact",
  },

  {
    number: "02",
    badge: "AI + WEB",
    title: "Vibe Coding & Web Fixes",
    description:
      "I will build, improve, or fix your website using modern AI-assisted development workflows without sacrificing code quality.",
    category: "VIBE CODING",
    price: "Custom",
    delivery: "Based on task",
    features: [
      "New website development",
      "Existing website fixes",
      "UI improvements",
      "Bug fixing",
      "AI-assisted development",
    ],
    technologies: ["React", "Next.js", "AI Tools"],
    href: "#contact",
  },

  {
    number: "03",
    badge: "FULL-STACK",
    title: "SaaS Web Application",
    description:
      "I will build a modern full-stack SaaS application with a clean interface, backend functionality, authentication, and database integration.",
    category: "SAAS DEVELOPMENT",
    price: "Custom",
    delivery: "Based on project scope",
    features: [
      "Modern web interface",
      "Authentication",
      "Backend & APIs",
      "Database integration",
      "Deployment support",
    ],
    technologies: ["Next.js", "Python", "FastAPI"],
    href: "#contact",
  },

  {
    number: "04",
    badge: "CUSTOM",
    title: "Landing Page",
    description:
      "I will create a focused, responsive landing page designed to present your product, service, or idea clearly.",
    category: "LANDING PAGE",
    price: "Custom",
    delivery: "Based on project scope",
    features: [
      "Modern visual design",
      "Responsive layout",
      "Clear call-to-actions",
      "Smooth interactions",
      "Performance-focused build",
    ],
    technologies: ["React", "Next.js", "CSS"],
    href: "#contact",
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="service-card">
      {/* Top */}
      <div className="service-card-top">
        <span className="service-number">{service.number}</span>

        <span className="service-badge">{service.badge}</span>
      </div>

      {/* Category */}
      <span className="service-category">{service.category}</span>

      {/* Title */}
      <h3 className="service-title">{service.title}</h3>

      {/* Description */}
      <p className="service-description">{service.description}</p>

      {/* Technologies */}
      <div className="service-technologies">
        {service.technologies.map((technology) => (
          <span key={technology} className="service-tech">
            {technology}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="service-features">
        {service.features.map((feature) => (
          <div key={feature} className="service-feature">
            <span className="service-check">
              <Check size={12} />
            </span>

            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="service-meta">
        <div>
          <span className="service-meta-label">STARTING</span>

          <strong className="service-price">{service.price}</strong>
        </div>

        <div className="service-delivery">
          <span className="service-meta-label">DELIVERY</span>

          <span>{service.delivery}</span>
        </div>
      </div>

      {/* CTA */}
      <a href={service.href} className="service-cta">
        <span>Discuss this service</span>

        <ArrowUpRight size={17} />
      </a>
    </article>
  );
}

/* =========================================================
   MAIN SERVICES SECTION
========================================================= */

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="services-header">
        <div>
          <span className="services-eyebrow">SERVICES / FIVERR</span>

          <h2 className="services-title">
            What I can
            <br />
            <span>build for you.</span>
          </h2>
        </div>

        <div className="services-header-right">
          <p className="services-description">
            Practical web development services for businesses, startups, and
            ideas that need to become real products.
          </p>

          <a
            href="https://www.fiverr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="services-fiverr-link"
          >
            <span>View my Fiverr gigs</span>

            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* =====================================================
          SERVICE GRID
      ===================================================== */}

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </div>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <div className="services-bottom">
        <div>
          <span className="services-bottom-label">
            HAVE SOMETHING ELSE IN MIND?
          </span>

          <h3>Tell me what you&apos;re building.</h3>
        </div>

        <a href="#contact" className="services-bottom-button">
          <span>Start a conversation</span>

          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
