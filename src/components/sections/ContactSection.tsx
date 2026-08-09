import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { contact } from "@/data/portfolio";

const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  location: MapPin,
} as const;

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nReply to: ${data.get("email")}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="07"
          label="Contact"
          title="Get In"
          highlight="Touch"
          subtitle={contact.intro}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="mb-4 text-xl font-bold">Let's Connect</h3>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              {contact.blurb}
            </p>

            <div className="space-y-3">
              {contact.channels.map((c) => {
                const Icon = iconMap[c.icon];
                const inner = (
                  <>
                    <span className="rounded-lg bg-primary/10 p-2.5 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-mono text-[11px] text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="block text-sm font-semibold">
                        {c.value}
                      </span>
                    </span>
                    {c.href && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    )}
                  </>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="glass-card hover-lift flex items-center gap-4 p-4"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="glass-card flex items-center gap-4 p-4"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass-card space-y-5 p-7"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-[11px] text-muted-foreground"
              >
                // name
              </label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-[11px] text-muted-foreground"
              >
                // email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-[11px] text-muted-foreground"
              >
                // message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or opportunity…"
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
