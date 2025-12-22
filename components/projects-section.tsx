"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Maestro Test Suite",
    description: "Mobile automation framework for end-to-end testing with 200+ test scenarios",
    status: "passing",
    tech: ["Maestro", "TypeScript", "CI/CD"],
    tests: 245,
    coverage: 92,
  },
  {
    title: "API Testing Framework",
    description: "Comprehensive REST API testing solution with automated regression tests",
    status: "passing",
    tech: ["Python", "Pytest", "Requests"],
    tests: 180,
    coverage: 88,
  },
  {
    title: "Performance Monitor",
    description: "Real-time performance testing dashboard with load testing capabilities",
    status: "passing",
    tech: ["K6", "Grafana", "Docker"],
    tests: 50,
    coverage: 95,
  },
  {
    title: "Visual Regression Tool",
    description: "Automated screenshot comparison for UI consistency validation",
    status: "in_progress",
    tech: ["Playwright", "Percy", "Next.js"],
    tests: 75,
    coverage: 78,
  },
]

const statusConfig = {
  passing: {
    icon: CheckCircle2,
    label: "build: passing",
    color: "text-accent",
    bg: "bg-accent/20",
    border: "border-accent/30",
  },
  in_progress: {
    icon: Clock,
    label: "build: in progress",
    color: "text-yellow-500",
    bg: "bg-yellow-500/20",
    border: "border-yellow-500/30",
  },
  failing: {
    icon: AlertCircle,
    label: "build: failing",
    color: "text-destructive",
    bg: "bg-destructive/20",
    border: "border-destructive/30",
  },
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary">{"// projects.json"}</span>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mt-2">Test Suite</h2>
          <p className="text-muted-foreground mt-2">A collection of testing frameworks and automation tools</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const status = statusConfig[project.status as keyof typeof statusConfig]
  const StatusIcon = status.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden h-full"
      >
        {/* Scan line effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ top: "-100%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none z-10"
          />
        )}

        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${status.bg} ${status.border} border mb-4`}
        >
          <StatusIcon className={`w-3 h-3 ${status.color}`} />
          <span className={`text-xs font-mono ${status.color}`}>{status.label}</span>
        </div>

        <h3 className="text-xl font-mono font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-mono bg-secondary rounded-md text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 pt-4 border-t border-border">
          <div>
            <span className="text-2xl font-mono font-bold text-foreground">{project.tests}</span>
            <span className="text-xs text-muted-foreground ml-1">tests</span>
          </div>
          <div>
            <span className="text-2xl font-mono font-bold text-primary">{project.coverage}%</span>
            <span className="text-xs text-muted-foreground ml-1">coverage</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
