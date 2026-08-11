import { Code2, Github, Linkedin, Mail, Heart, Triangle } from "lucide-react";
import {
  navSections,
  profile,
  contact,
  githubUrl,
  linkedinUrl,
  vercelUrl,
} from "@/data/portfolio";

export const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <a href="#home" className="flex items-center gap-2">
          <span className="rounded-lg bg-primary p-2 text-primary-foreground">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm text-primary">
            &lt;{profile.name} /&gt;
          </span>
        </a>

        <nav className="flex flex-wrap justify-center gap-5">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2">
          {[
            { icon: Github, href: githubUrl, label: "GitHub" },
            { icon: Linkedin, href: linkedinUrl, label: "LinkedIn" },
            { icon: Triangle, href: vercelUrl, label: "Vercel" },
            { icon: Mail, href: `mailto:${contact.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="rounded-lg border border-border bg-card/60 p-2.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 flex items-center justify-center gap-1.5 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
        Built with <Heart className="h-3 w-3 text-destructive" /> by{" "}
        {profile.name} — {profile.title} · {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);
