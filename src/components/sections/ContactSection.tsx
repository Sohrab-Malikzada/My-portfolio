import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Triangle,
  ExternalLink,
  Send,
} from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { contact } from "@/data/portfolio";
import { supabase } from "@/integrations/supabase/client";

const iconMap = {
  mail: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
  vercel: Triangle,
  location: MapPin,
} as const;

const messageSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = messageSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSending(true);
    const { error } = await supabase
      .from("contact_messages")
      .insert(parsed.data);
    setSending(false);

    if (error) {
      toast.error("Could not send your message. Please try again or email me directly.");
      return;
    }

    toast.success("Message sent — I'll get back to you within 24 hours.");
    form.reset();
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
