"use client"

import { motion } from "framer-motion"
import { SiPython, SiDocker, SiNextdotjs, SiTypescript, SiJest } from "react-icons/si"
import { GitCommit, Music, Briefcase, Code2, Zap, Bug, TestTube2 } from "lucide-react"

const techStack = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: TestTube2, name: "Playwright", color: "#45BA4B" },
  { icon: SiJest, name: "Jest", color: "#C21325" },
]

const experience = [
  {
    hash: "a1b2c3d",
    message: "Joined MuatMuat as SDET Intern",
    date: "2024",
    branch: "main",
  },
  {
    hash: "e4f5g6h",
    message: "Built Maestro automation suite",
    date: "2024",
    branch: "feature/automation",
  },
  {
    hash: "i7j8k9l",
    message: "Shipped 500+ test cases",
    date: "2024",
    branch: "main",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function BentoGrid() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary">{"// about.md"}</span>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mt-2">System Overview</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Stack Card - Large */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-2 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">stack.json</span>
            </div>
            <h3 className="text-xl font-mono font-semibold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group/icon cursor-pointer"
                >
                  <tech.icon
                    className="w-8 h-8 transition-all duration-300 group-hover/icon:drop-shadow-[0_0_8px_var(--tw-shadow-color)]"
                    style={{
                      color: tech.color,
                      // @ts-ignore - CSS custom property
                      "--tw-shadow-color": tech.color,
                    }}
                  />
                  <span className="text-xs font-mono text-muted-foreground group-hover/icon:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">metrics.ts</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-mono font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Test Cases Written</div>
              </div>
              <div>
                <div className="text-4xl font-mono font-bold text-accent">99.2%</div>
                <div className="text-sm text-muted-foreground">Pass Rate</div>
              </div>
              <div>
                <div className="text-4xl font-mono font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Bugs Caught</div>
              </div>
            </div>
          </motion.div>

          {/* Experience Card - Git Log Style */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-2 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">git log --oneline</span>
            </div>
            <h3 className="text-xl font-mono font-semibold mb-6">Experience</h3>
            <div className="space-y-4">
              {experience.map((commit, index) => (
                <motion.div
                  key={commit.hash}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex flex-col items-center">
                    <GitCommit className="w-5 h-5 text-primary shrink-0" />
                    {index < experience.length - 1 && <div className="w-px h-full min-h-[40px] bg-border" />}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <code className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-mono">
                        {commit.hash}
                      </code>
                      <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground font-mono">
                        {commit.branch}
                      </span>
                    </div>
                    <p className="text-foreground font-medium">{commit.message}</p>
                    <span className="text-xs text-muted-foreground">{commit.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Music/Focus Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">playlist.md</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Music className="w-8 h-8 text-primary" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent animate-pulse" />
              </div>
              <div>
                <p className="font-semibold">Coding Focus</p>
                <p className="text-sm text-muted-foreground">Lo-Fi Beats</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [8, 16, 8] }}
                        transition={{
                          duration: 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                        className="w-1 bg-primary rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Now Playing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bug Hunter Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-3 p-6 rounded-xl border border-border bg-gradient-to-r from-card/50 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Bug className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-mono font-semibold">Bug Hunter Mode</h3>
                  <p className="text-muted-foreground">Catching bugs before they catch users</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-lg bg-accent/20 border border-accent/30">
                  <span className="font-mono text-accent text-sm">0 bugs in production</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
