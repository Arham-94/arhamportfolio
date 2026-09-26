import { Suspense } from "react";
import { Hero } from "@/components/hero/hero";
import { SplineRobot } from "@/components/hero/spline-robot";
import { Navbar } from "@/components/navbar";
import { LoadingScreen } from "@/components/loading-screen";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import CertificatesSection from "@/components/certificates-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer-section";
import ServicesSection from "@/components/services-section";
import TestimonialSection from "@/components/testimonial";

function RobotFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Waking up…
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <main id="top" className="relative bg-background">
      <LoadingScreen />
      <Navbar />
      <Hero
        robot={
          <Suspense fallback={<RobotFallback />}>
            <SplineRobot />
          </Suspense>
        }
      />

      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
