import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Terminal, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadPortfolioButton } from "@/components/DownloadPortfolioButton";
import { profile, contact, githubUrl, linkedinUrl, vercelUrl } from "@/data/portfolio";
import profileAsset from "@/assets/sohrab-profile.png.asset.json";

const useTypewriter = (words: string[]) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setWordIndex((i) => i + 1);
          return;
        }
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      },
      done ? 1600 : deleting ? 40 : 90,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
};

const socialLinks = [
  { icon: Github, href: githubUrl, label: "GitHub" },
  { icon: Linkedin, href: linkedinUrl, label: "LinkedIn" },
  { icon: Triangle, href: vercelUrl, label: "Vercel" },
  { icon: Mail, href: `mailto:${contact.email}`, label: "Email" },
];

export const HeroSection = () => {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="font-mono text-xs text-success">
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl"
            >
              {profile.firstName}
              <br />
              <span className="text-gradient">{profile.lastName}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 flex items-center gap-3 font-mono text-lg text-muted-foreground md:text-xl"
            >
              <Terminal className="h-5 w-5 text-primary" />
              <span>{typed}</span>
              <span className="inline-block h-6 w-[2px] animate-pulse bg-primary" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-7 max-w-xl leading-relaxed text-muted-foreground"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <DownloadPortfolioButton size="lg" variant="secondary" />
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex items-center gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground">
                // connect
              </span>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="rounded-xl border border-border bg-card/60 p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card glow-ring">
              <img
                src={profileAsset.url}
                alt="Portrait of Sohrab Malikzada, aspiring full-stack developer"
                width={1242}
                height={1242}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              {/* corner brackets */}
              <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-primary" />
              <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-primary" />
              <span className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-primary" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-primary" />
            </div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -left-6 top-1/4 px-4 py-3 text-center"
            >
              <p className="text-2xl font-bold text-primary">
                {profile.stats[0].value}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                {profile.stats[0].label}
              </p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -right-5 bottom-1/4 px-4 py-3 text-center"
            >
              <p className="text-2xl font-bold text-accent">
                {profile.stats[1].value}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                {profile.stats[1].label}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
