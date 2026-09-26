"use client";

import { Quote, Star } from "lucide-react";

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Business Owner",
    text: "The website turned out better than I expected. The design feels modern, professional, and works perfectly on mobile.",
  },
  {
    name: "Muhammad Hamza",
    role: "Startup Founder",
    text: "Very clean work and great attention to detail. The final product looked much more polished than the original idea.",
  },
  {
    name: "Usman Ali",
    role: "Product Founder",
    text: "The development process was smooth and the website was built exactly around the requirements we discussed.",
  },
  {
    name: "Hassan Raza",
    role: "Business Owner",
    text: "Fast communication, clean UI, and a really good understanding of what the business needed.",
  },
  {
    name: "Bilal Ahmed",
    role: "Startup Founder",
    text: "The interface feels premium and the overall experience is much better than what we had before.",
  },
  {
    name: "Saad Malik",
    role: "Entrepreneur",
    text: "Great attention to responsiveness and small details. Everything feels consistent across different screen sizes.",
  },
];

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="testimonial-card">
      {/* Quote icon */}
      <div className="testimonial-quote">
        <Quote size={17} />
      </div>

      {/* Content */}
      <div className="testimonial-content">
        <p className="testimonial-text">“{testimonial.text}”</p>

        {/* Rating */}
        <div className="testimonial-rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={11} fill="currentColor" />
          ))}
        </div>

        {/* Author */}
        <div className="testimonial-author">
          <div className="testimonial-avatar">{testimonial.name.charAt(0)}</div>

          <div>
            <div className="testimonial-name">{testimonial.name}</div>

            <div className="testimonial-role">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   TESTIMONIAL ROW
========================================================= */

function TestimonialRow({ direction }: { direction: "left" | "right" }) {
  /*
    Duplicate the testimonials so the marquee can
    continuously loop without a visible empty gap.
  */

  const items = [...testimonials, ...testimonials];

  return (
    <div
      className={`testimonials-marquee ${
        direction === "right"
          ? "testimonials-marquee-right"
          : "testimonials-marquee-left"
      }`}
    >
      <div className="testimonials-track">
        {items.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN TESTIMONIAL SECTION
========================================================= */

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="testimonials-header">
        <div>
          <span className="testimonials-eyebrow">TESTIMONIALS</span>

          <h2 className="testimonials-title">
            Words from
            <br />
            <span>people I&apos;ve worked with.</span>
          </h2>
        </div>

        <p className="testimonials-description">
          A few words from people who have experienced my work, collaboration,
          and attention to detail.
        </p>
      </div>

      {/* =====================================================
          MARQUEE ROWS
      ===================================================== */}

      <div className="testimonials-marquee-wrapper">
        {/* Row 1 → RIGHT */}
        <TestimonialRow direction="right" />

        {/* Row 2 → LEFT */}
        <TestimonialRow direction="left" />
      </div>
    </section>
  );
}
