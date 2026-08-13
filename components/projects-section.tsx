"use client";

import { useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiOpencv,
  SiVite,
  SiSupabase,
} from "react-icons/si";

/* =========================================================
   TYPES
========================================================= */

export interface Project {
  name: string;
  description: string;
  cover: string;
  mobilePicture?: string;
  github: string;
  link: string;
  video: string;
  skills: string;
}

/* =========================================================
   PROJECT DATA
========================================================= */

export const projects: Project[] = [
  {
    name: "Hotchillz Restaurant Website",
    description:
      "HotChillz is a modern food e-commerce website built for a bold Pakistani fast-food brand. It features a sleek dark UI, responsive design, interactive menu, cart system, and streamlined ordering experience focused on delivering a premium and engaging user experience.",
    cover: "/projectsImages/hotchillz.png",

    // Add mobile screenshot later:
    mobilePicture: "/mobile/hotchillz.png",

    github: "",
    link: "https://hotchillz.vercel.app/",
    video: "",
    skills: "html5,css3,javascript,reactjs,nextjs,supabase,postgresql",
  },
  {
    name: "CV Insight",
    description:
      "A powerful bulk resume analyzer that helps recruiters process hundreds of CVs simultaneously, identify top candidates, and eliminate repetitive manual screening.",
    cover: "/projectsImages/cvinsight.png",

    // Add mobile screenshot later:
    mobilePicture: "/mobile/cvinsight.png",

    github: "",
    link: "",
    video: "https://www.youtube.com/watch?v=hRRyyFY3FWY",
    skills: "html5,css3,javascript,reactjs,python,django",
  },

  {
    name: "TCMS",
    description:
      "An intelligent traffic monitoring system that analyzes live or recorded footage, detects vehicles, counts categories, and classifies traffic congestion in real time.",
    cover: "/projectsImages/tcms.png",

    mobilePicture: "/mobile/tcms.png",

    github: "",
    link: "",
    video: "https://youtu.be/c9m_daQzlyE",
    skills: "html5,css3,javascript,reactjs,nextjs,python,fastapi,opencv",
  },

  {
    name: "AI Notes Summarizer",
    description:
      "An AI-powered application that transforms lengthy PDFs, documents, articles, and study notes into concise and easy-to-understand summaries.",
    cover: "/projectsImages/notessummarizer.png",

    mobilePicture: "/mobile/notessummarizer.png",

    github: "",
    link: "",
    video: "https://youtu.be/twdt1LVZ_Qk",
    skills: "html5,css3,javascript,reactjs,nextjs,python,fastapi",
  },

  {
    name: "Musicbox",
    description:
      "A modern music streaming web player inspired by Spotify, featuring song search, favorites, API integration, and a smooth responsive listening experience.",
    cover: "/projectsImages/musicbox.png",

    mobilePicture: "/mobile/musicbox.png",

    github: "",
    link: "",
    video: "https://youtu.be/z6aOQeDsoAQ",
    skills: "html5,css3,javascript,reactjs,python,django",
  },

  {
    name: "BlogVerse",
    description:
      "A complete blogging platform where users can create, edit, discover, like, and comment on articles with secure authentication and a responsive writing experience.",
    cover: "/projectsImages/blogverse.png",

    mobilePicture: "/mobile/blogverse.png",

    github: "",
    link: "",
    video: "https://youtu.be/Ukf3Rsk5s4w",
    skills: "html5,css3,javascript,reactjs,python,django",
  },
];

/* =========================================================
   SKILL ICONS
========================================================= */

const skillIcons: Record<
  string,
  {
    icon: React.ElementType;
    color: string;
  }
> = {
  HTML5: {
    icon: SiHtml5,
    color: "#E34F26",
  },

  CSS3: {
    icon: SiCss,
    color: "#1572B6",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "currentColor",
  },

  Tailwind: {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  Python: {
    icon: SiPython,
    color: "#3776AB",
  },

  Django: {
    icon: SiDjango,
    color: "#092E20",
  },

  FastAPI: {
    icon: SiFastapi,
    color: "#009688",
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "#4169E1",
  },

  Supabase: {
    icon: SiSupabase,
    color: "#3ECF8E",
  },

  Git: {
    icon: SiGit,
    color: "#F05032",
  },

  GitHub: {
    icon: SiGithub,
    color: "currentColor",
  },

  Figma: {
    icon: SiFigma,
    color: "#F24E1E",
  },

  Postman: {
    icon: SiPostman,
    color: "#FF6C37",
  },

  OpenCV: {
    icon: SiOpencv,
    color: "#5C3EE8",
  },

  Vite: {
    icon: SiVite,
    color: "#646CFF",
  },
};

/* =========================================================
   RAW SKILL NAME → DISPLAY NAME
========================================================= */

const skillNameMap: Record<string, string> = {
  html5: "HTML5",
  css3: "CSS3",
  javascript: "JavaScript",
  reactjs: "React",
  nextjs: "Next.js",
  tailwindcss: "Tailwind",
  python: "Python",
  django: "Django",
  fastapi: "FastAPI",
  postgresql: "PostgreSQL",
  git: "Git",
  github: "GitHub",
  figma: "Figma",
  postman: "Postman",
  opencv: "OpenCV",
  vite: "Vite",
  supabase: "Supabase",
};

/* =========================================================
   SKILL BADGE
========================================================= */

function SkillBadge({ skill }: { skill: string }) {
  const skillData = skillIcons[skill];

  if (!skillData) {
    return (
      <span className="project-tech project-tech-icon">
        <span>{skill}</span>
      </span>
    );
  }

  const Icon = skillData.icon;

  return (
    <span className="project-tech project-tech-icon">
      <Icon
        size={15}
        style={{
          color: skillData.color,
        }}
      />

      <span>{skill}</span>
    </span>
  );
}

/* =========================================================
   YOUTUBE URL CONVERTER
========================================================= */

function getYoutubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");

      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");

      if (id) {
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      }
    }

    return url;
  } catch {
    return url;
  }
}

/* =========================================================
   PROJECT MEDIA
========================================================= */

function ProjectMedia({
  project,
  onPlay,
}: {
  project: Project;
  onPlay: () => void;
}) {
  /*
    If mobilePicture exists → use it.
    Otherwise → use the desktop cover.
  */
  const mobileImage = project.mobilePicture || project.cover;

  const hasVideo = Boolean(project.video?.trim());

  return (
    <div className="project-device-stage">
      {/* =====================================================
          LAPTOP
      ===================================================== */}

      <div className="project-laptop">
        {/* Top bezel */}
        <div className="project-laptop-top">
          {/* Webcam */}
          <span className="project-laptop-camera">
            <span />
          </span>
        </div>

        {/* Screen */}
        <div className="project-laptop-screen">
          <img
            src={project.cover}
            alt={`${project.name} desktop project preview`}
          />

          {/* Screen glass reflection */}
          <div className="project-screen-reflection" />

          {/* Video overlay */}
          <div className="project-screen-overlay">
            {hasVideo ? (
              <button
                type="button"
                className="project-video-button"
                aria-label={`Watch ${project.name} video`}
                onClick={onPlay}
              >
                <Play size={22} fill="currentColor" />
              </button>
            ) : (
              <span className="project-no-video">No video available yet</span>
            )}
          </div>
        </div>

        {/* Hinge */}
        <div className="project-laptop-hinge" />

        {/* Base */}
        <div className="project-laptop-base">
          <div className="project-laptop-trackpad" />
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="project-mobile">
        {/* Camera island */}
        <div className="project-mobile-camera">
          <span className="project-mobile-camera-lens" />
          <span className="project-mobile-camera-lens" />
          <span className="project-mobile-speaker" />
        </div>

        {/* 
          Uses mobilePicture if available.
          Falls back to cover if mobilePicture is undefined.
        */}
        <div className="project-mobile-screen">
          <img
            src={mobileImage}
            alt={`${project.name} mobile project preview`}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT VIDEO MODAL
========================================================= */

function VideoModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="project-video-modal" onClick={onClose}>
      <div
        className="project-video-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          className="project-video-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={20} />
        </button>

        {/* Video */}
        <div className="project-video-frame">
          <iframe
            src={getYoutubeEmbedUrl(project.video)}
            title={`${project.name} project video`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PROJECTS SECTION
========================================================= */

export default function ProjectsSection() {
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects-section">
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="projects-header">
        <div>
          <span className="projects-eyebrow">SELECTED WORK</span>

          <h2 className="projects-title">
            Projects that
            <br />
            <span>solve real problems.</span>
          </h2>
        </div>

        <p className="projects-header-description">
          A collection of products, experiments, and intelligent systems
          I&apos;ve designed and built.
        </p>
      </div>

      {/* =====================================================
          PROJECT LIST
      ===================================================== */}

      <div className="projects-list">
        {projects.map((project, index) => {
          const skills = project.skills
            .split(",")
            .map(
              (skill) =>
                skillNameMap[skill.trim().toLowerCase()] || skill.trim(),
            );

          return (
            <article key={project.name} className="project-showcase">
              {/* =================================================
                  MEDIA
              ================================================= */}

              <div className="project-media">
                <ProjectMedia
                  project={project}
                  onPlay={() => setActiveVideo(project)}
                />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="project-content">
                {/* Number */}
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="project-name">{project.name}</h3>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Skills */}
                <div className="project-skills">
                  {skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>

                {/* Actions */}
                <div className="project-actions">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-primary"
                    >
                      <span>Live Project</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-secondary"
                    >
                      <SiGithub size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {activeVideo && (
        <VideoModal
          project={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
