"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Terminal, Send, Github, Linkedin, Twitter } from "lucide-react"

const commands: Record<string, string> = {
  help: "Available commands: contact, github, linkedin, clear",
  contact: "Opening contact form... Email: theo@example.com",
  github: "Redirecting to github.com/theo...",
  linkedin: "Redirecting to linkedin.com/in/theo...",
  clear: "",
}

export function Footer() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<{ command: string; output: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const command = input.toLowerCase().trim()
    const output = commands[command] || `Command not found: ${command}. Type 'help' for available commands.`

    if (command === "clear") {
      setHistory([])
    } else {
      setHistory((prev) => [...prev, { command: input, output }])
    }

    setInput("")
  }

  useEffect(() => {
    const handleClick = () => inputRef.current?.focus()
    document.getElementById("console")?.addEventListener("click", handleClick)
    return () => document.getElementById("console")?.removeEventListener("click", handleClick)
  }, [])

  return (
    <footer id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-mono text-sm text-primary">{"// contact.sh"}</span>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mt-2">Console</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="console"
          className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden cursor-text"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">theo@portfolio ~ contact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-accent/80" />
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-4 min-h-[200px] font-mono text-sm">
            <div className="text-muted-foreground mb-4">
              Welcome to Theo{"'"}s console. Type {"'"}help{"'"} for available commands.
            </div>

            {/* Command history */}
            {history.map((item, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">❯</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-muted-foreground ml-4">{item.output}</div>
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-primary">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'contact' to send a message..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50"
              />
              <button type="submit" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Send className="w-4 h-4 text-primary" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-secondary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{"</"}</span>
            Built with Next.js & Framer Motion
            <span className="text-primary">{">"}</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground/50 mt-2">
            © {new Date().getFullYear()} Theo. All tests passing.
          </p>
        </div>
      </div>
    </footer>
  )
}
