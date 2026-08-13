"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
} from "react-icons/si";

import {
  SiClaude,
  SiVercel,
  SiGoogle,
  SiProbot,
  SiCanvas,
  SiVscodium,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import type { IconType } from "react-icons";

type Category = "frontend" | "backend" | "ai" | "tools";

type Skill = {
  name: string;
  label: string;
  description: string;
  icon: IconType;
  color: string;
  category: Category;
};

const skillCategories: Record<Category, Skill[]> = {
  frontend: [
    {
      name: "React",
      label: "Frontend",
      description: "Component-based interfaces",
      icon: SiReact,
      color: "#61DAFB",
      category: "frontend",
    },
    {
      name: "Next.js",
      label: "Framework",
      description: "Production React applications",
      icon: SiNextdotjs,
      color: "#ffffff",
      category: "frontend",
    },
    {
      name: "JavaScript",
      label: "Language",
      description: "Interactive web experiences",
      icon: SiJavascript,
      color: "#F7DF1E",
      category: "frontend",
    },
    {
      name: "HTML5",
      label: "Markup",
      description: "Semantic web structure",
      icon: SiHtml5,
      color: "#E34F26",
      category: "frontend",
    },
    {
      name: "CSS3",
      label: "Styling",
      description: "Responsive visual systems",
      icon: SiCss,
      color: "#1572B6",
      category: "frontend",
    },
    {
      name: "Tailwind",
      label: "CSS",
      description: "Utility-first styling",
      icon: SiTailwindcss,
      color: "#06B6D4",
      category: "frontend",
    },
  ],

  backend: [
    {
      name: "Python",
      label: "Language",
      description: "Backend & automation",
      icon: SiPython,
      color: "#3776AB",
      category: "backend",
    },
    {
      name: "Django",
      label: "Framework",
      description: "Full-stack Python framework",
      icon: SiDjango,
      color: "#44B78B",
      category: "backend",
    },
    {
      name: "FastAPI",
      label: "API",
      description: "High-performance APIs",
      icon: SiFastapi,
      color: "#009688",
      category: "backend",
    },
    {
      name: "PostgreSQL",
      label: "Database",
      description: "Relational data systems",
      icon: SiPostgresql,
      color: "#4169E1",
      category: "backend",
    },
    {
      name: "REST APIs",
      label: "Architecture",
      description: "Scalable API architecture",
      icon: SiFastapi,
      color: "#8B5CF6",
      category: "backend",
    },
  ],

  ai: [
    {
      name: "Claude",
      label: "AI Assistant",
      description: "Advanced AI development & reasoning",
      icon: SiClaude,
      color: "#D97757",
      category: "ai",
    },
    {
      name: "ChatGPT",
      label: "AI Assistant",
      description: "AI-powered development & research",
      icon: SiProbot,
      color: "#10A37F",
      category: "ai",
    },
    {
      name: "v0",
      label: "UI Generation",
      description: "AI-powered interface generation",
      icon: SiVercel,
      color: "#ffffff",
      category: "ai",
    },
    {
      name: "Google Stitch",
      label: "UI Design",
      description: "AI-powered UI & UX generation",
      icon: SiGoogle,
      color: "#4285F4",
      category: "ai",
    },
    {
      name: "Antigravity",
      label: "AI Development",
      description: "AI-assisted software development",
      icon: SiGoogle,
      color: "#34A853",
      category: "ai",
    },
    {
      name: "Flow",
      label: "AI Video",
      description: "AI-powered cinematic video creation",
      icon: SiGoogle,
      color: "#EA4335",
      category: "ai",
    },
  ],

  tools: [
    {
      name: "Git",
      label: "Version Control",
      description: "Version control",
      icon: SiGit,
      color: "#F05032",
      category: "tools",
    },
    {
      name: "GitHub",
      label: "Collaboration",
      description: "Code collaboration",
      icon: SiGithub,
      color: "#ffffff",
      category: "tools",
    },
    {
      name: "Postman",
      label: "API Testing",
      description: "API development & testing",
      icon: SiPostman,
      color: "#FF6C37",
      category: "tools",
    },
    {
      name: "VS Code",
      label: "Code Editor",
      description: "Development environment",
      icon: VscVscode,
      color: "#007ACC",
      category: "tools",
    },
    {
      name: "Canva",
      label: "Design",
      description: "Visual design & graphics",
      icon: SiCanvas,
      color: "#00C4CC",
      category: "tools",
    },
  ],
};

/*
 * The technologies inside the interactive playground.
 * These remain visible regardless of the selected category.
 */
const playgroundSkills: Skill[] = [
  skillCategories.frontend[0],
  skillCategories.frontend[1],
  skillCategories.frontend[2],
  skillCategories.frontend[3],
  skillCategories.frontend[4],
  skillCategories.frontend[5],

  skillCategories.backend[0],
  skillCategories.backend[1],
  skillCategories.backend[2],
  skillCategories.backend[3],

  skillCategories.tools[0],
  skillCategories.tools[1],
  skillCategories.tools[2],
  skillCategories.tools[3],

  skillCategories.ai[1],
];

/*
 * Initial positions are percentages.
 * This prevents the icons from forming a boring grid.
 */
const initialPositions = [
  { x: 8, y: 22 },
  { x: 30, y: 13 },
  { x: 53, y: 23 },
  { x: 76, y: 14 },

  { x: 17, y: 45 },
  { x: 42, y: 39 },
  { x: 67, y: 48 },
  { x: 86, y: 38 },

  { x: 7, y: 68 },
  { x: 31, y: 66 },
  { x: 54, y: 70 },
  { x: 79, y: 65 },

  { x: 20, y: 86 },
  { x: 49, y: 86 },
  { x: 73, y: 84 },
];

const categories: {
  id: Category;
  label: string;
}[] = [
  {
    id: "frontend",
    label: "Frontend",
  },
  {
    id: "backend",
    label: "Backend",
  },
  {
    id: "ai",
    label: "AI",
  },
  {
    id: "tools",
    label: "Tools",
  },
];

function DraggableSkill({
  skill,
  index,
  activeCategory,
}: {
  skill: Skill;
  index: number;
  activeCategory: Category;
}) {
  const Icon = skill.icon;

  const position = initialPositions[index % initialPositions.length];

  const isActive = skill.category === activeCategory;

  return (
    <motion.div
      drag
      dragConstraints=".skill-playground"
      dragElastic={0.12}
      dragMomentum={false}
      whileHover={{
        scale: 1.08,
        zIndex: 20,
      }}
      whileDrag={{
        scale: 1.14,
        zIndex: 100,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: isActive ? 1 : 0.62,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.035,
      }}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        color: skill.color,
      }}
      className="skill-draggable"
      aria-label={`Drag ${skill.name}`}
    >
      <Icon
        size={28}
        style={{
          color: skill.color,
        }}
      />

      <span className="mt-1.5 max-w-[65px] truncate text-[9px] font-medium text-foreground">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("frontend");

  const currentSkills = skillCategories[activeCategory];

  return (
    <section
      id="skills"
      className="skills-section bg-background px-6 py-24 text-foreground sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* =============================================
            SECTION HEADER
        ============================================= */}

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
              02
            </span>

            <span className="h-px w-8 bg-border" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Skills
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Things I build with.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                A focused toolkit for building modern interfaces, intelligent
                applications, and reliable digital products.
              </p>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground lg:block">
              My digital toolkit
            </span>
          </div>
        </div>

        {/* =============================================
            CATEGORY TABS
        ============================================= */}

        <div className="mb-10 overflow-x-auto border-b border-border">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex min-w-max gap-8 sm:gap-12"
          >
            {categories.map((category) => {
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category.id)}
                  className={`skill-tab ${active ? "active" : ""}`}
                >
                  {category.label}

                  {active && (
                    <motion.span
                      layoutId="skill-tab-indicator"
                      className="skill-tab-indicator"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =============================================
            MAIN TWO COLUMN LAYOUT
        ============================================= */}

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =========================================
              LEFT — SKILLS
          ========================================= */}

          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Expertise
                </p>

                <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                  {
                    categories.find(
                      (category) => category.id === activeCategory,
                    )?.label
                  }
                </h3>
              </div>

              <span className="text-xs text-muted-foreground">
                {String(currentSkills.length).padStart(2, "0")} skills
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="grid grid-cols-2 gap-3"
              >
                {currentSkills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      className="skill-card rounded-2xl p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="skill-icon-container shrink-0">
                          <Icon
                            size={22}
                            style={{
                              color: skill.color,
                            }}
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">
                            {skill.name}
                          </p>

                          <p className="mt-0.5 truncate text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                            {skill.label}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-xs leading-5 text-muted-foreground">
                        {skill.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================
              RIGHT — INTERACTIVE PLAYGROUND
          ========================================= */}

          <div className="skill-playground">
            {/* Top left label */}
            <div className="skill-playground-label left-6 top-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Skill Playground
              </p>

              <p className="mt-1 text-xs text-muted-foreground/70">
                Interactive toolkit
              </p>
            </div>

            {/* Top right badge */}
            <div className="skill-playground-label right-6 top-6">
              <div className="skill-playground-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />

                <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  Drag the icons
                </span>
              </div>
            </div>

            {/* Center background word */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="select-none text-[70px] font-semibold tracking-[-0.08em] text-foreground opacity-[0.035] sm:text-[100px]">
                STACK
              </span>
            </div>

            {/* =====================================
                DRAGGABLE ICONS
            ===================================== */}

            {playgroundSkills.map((skill, index) => (
              <DraggableSkill
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index}
                activeCategory={activeCategory}
              />
            ))}

            {/* Bottom information */}
            <div className="pointer-events-none absolute bottom-5 left-6 right-6 z-50 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground/60">
                15 technologies
              </span>

              <span className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground/60">
                Move · Explore · Play
              </span>
            </div>
          </div>
        </div>

        {/* =============================================
            BOTTOM STATEMENT
        ============================================= */}

        <div className="mt-16 border-t border-border pt-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              I prefer a focused toolkit over an endless list of technologies —
              choosing the right tool for the problem matters more than the
              number of tools I know.
            </p>

            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Always learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
