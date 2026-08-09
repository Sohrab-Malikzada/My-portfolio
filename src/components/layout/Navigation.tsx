import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadPortfolioButton } from "@/components/DownloadPortfolioButton";
import { navSections } from "@/data/portfolio";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("theme") !== "light";
  });

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex h-[72px] items-center justify-between">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="rounded-lg bg-primary p-2 text-primary-foreground">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="font-mono text-sm font-semibold text-primary">
                &lt;SM /&gt;
              </span>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    activeId === s.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeId === s.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <DownloadPortfolioButton className="hidden sm:inline-flex" />
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </nav>
        </div>

        <motion.div
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-gradient-to-r from-primary to-accent"
        />
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-sm text-primary">&lt;SM /&gt;</span>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-5">
                {navSections.map((s, index) => (
                  <motion.a
                    key={s.id}
                    href={`#${s.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold transition-colors hover:text-primary"
                  >
                    <span className="mr-3 font-mono text-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {s.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-10">
                <DownloadPortfolioButton size="lg" className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
