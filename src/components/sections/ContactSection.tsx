import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-12">
            Have a project in mind? I'd love to hear from you.
          </p>

          <form className="space-y-6 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Name" className="bg-card" />
              <Input type="email" placeholder="Email" className="bg-card" />
            </div>
            <Input placeholder="Subject" className="bg-card" />
            <Textarea placeholder="Your message..." rows={5} className="bg-card" />
            <Button size="lg" className="w-full gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>

          <div className="flex justify-center gap-4 mt-12">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
