"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

const navTabs = [
  { name: "home.tsx", href: "#home", active: true },
  { name: "projects.json", href: "#projects", active: false },
  { name: "about.md", href: "#about", active: false },
  { name: "contact.sh", href: "#contact", active: false },
]

export function Navbar() {
  const [activeTab, setActiveTab] = useState("home.tsx")

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <nav className="flex items-center justify-between px-2 py-2 rounded-xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl shadow-black/20">
        {/* Logo */}
        <div className="flex items-center gap-2 px-3">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-accent" />
        </div>

        {/* IDE-style tabs */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {navTabs.map((tab) => (
            <motion.a
              key={tab.name}
              href={tab.href}
              onClick={() => setActiveTab(tab.name)}
              className={`relative flex items-center gap-2 px-4 py-2 text-sm font-mono transition-colors rounded-lg ${
                activeTab === tab.name
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-primary">{"<"}</span>
              <span>{tab.name}</span>
              <span className="text-primary">{"/>"}</span>
              {activeTab === tab.name && <X className="w-3 h-3 ml-1 opacity-50 hover:opacity-100 cursor-pointer" />}
            </motion.a>
          ))}
        </div>

        {/* Status indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">online</span>
        </div>
      </nav>
    </motion.header>
  )
}
