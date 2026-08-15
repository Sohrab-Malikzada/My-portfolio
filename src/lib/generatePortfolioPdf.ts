import { jsPDF } from "jspdf";
import {
  about,
  certificates,
  contact,
  education,
  experience,
  languages,
  profile,
  projects,
  coreSkills,
  additionalSkills,
  learningSkills,
} from "@/data/portfolio";
import profileImage from "@/assets/sohrab-profile.jpg";

/* ---------- palette ---------- */
const INK: [number, number, number] = [26, 28, 40];
const MUTED: [number, number, number] = [108, 112, 128];
const PAPER: [number, number, number] = [250, 250, 252];
const LINE: [number, number, number] = [220, 222, 230];
const BRAND: [number, number, number] = [67, 97, 238];
const ACCENT: [number, number, number] = [124, 92, 255];

const PAGE_W = 210;
const PAGE_H = 297;
const M = 18;
const CONTENT_W = PAGE_W - M * 2;

type Img = { data: string; w: number; h: number } | null;

const loadImage = (url: string) =>
  new Promise<Img>((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    const done = (v: Img) => resolve(v);
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const scale = Math.min(1, 1000 / Math.max(img.width, img.height));
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) return done(null);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        done({ data: canvas.toDataURL("image/jpeg", 0.85), w: canvas.width, h: canvas.height });
      } catch {
        done(null);
      }
    };
    img.onerror = () => done(null);
    img.src = url;
    setTimeout(() => done(null), 15000);
  });

export async function generatePortfolioPdf() {
  const urls = projects.map((p) => p.image);
  const loaded = await Promise.all(urls.map(loadImage));
  const images: Record<string, Img> = {};
  urls.forEach((u, i) => (images[u] = loaded[i]));
  const portrait = await loadImage(profileImage);

  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  let y = M;
  let pageIndex = 0;

  const paintBackground = () => {
    doc.setFillColor(...PAPER);
    doc.rect(0, 0, PAGE_W, PAGE_H, "F");
  };

  const footer = () => {
    if (pageIndex === 0) return;
    doc.setDrawColor(...LINE);
    doc.setLineWidth(0.2);
    doc.line(M, PAGE_H - 14, PAGE_W - M, PAGE_H - 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text(`${profile.name.toUpperCase()}  ·  ${profile.title.toUpperCase()}`, M, PAGE_H - 9);
    doc.text(String(pageIndex), PAGE_W - M, PAGE_H - 9, { align: "right" });
  };

  const addPage = () => {
    footer();
    doc.addPage();
    pageIndex += 1;
    paintBackground();
    y = M + 4;
  };

  const ensure = (needed: number) => {
    if (y + needed > PAGE_H - 22) addPage();
  };

  const text = (
    value: string,
    opts: {
      size?: number;
      style?: "normal" | "bold" | "italic";
      color?: [number, number, number];
      lh?: number;
      width?: number;
      x?: number;
      gap?: number;
    } = {},
  ) => {
    const {
      size = 10,
      style = "normal",
      color = INK,
      lh = 1.45,
      width = CONTENT_W,
      x = M,
      gap = 0,
    } = opts;
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(value, width) as string[];
    const lineH = (size * lh) / 2.83465;
    lines.forEach((line) => {
      ensure(lineH);
      doc.text(line, x, y + lineH * 0.75);
      y += lineH;
    });
    y += gap;
  };

  const sectionHeader = (index: string, label: string, title: string, intro?: string) => {
    addPage();
    doc.setFillColor(...BRAND);
    doc.rect(M, y, 14, 1.4, "F");
    y += 7;
    doc.setFont("courier", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(...BRAND);
    doc.text(`${index} // ${label.toUpperCase()}`, M, y);
    y += 9;
    text(title, { style: "bold", size: 24, gap: 3 });
    if (intro) text(intro, { size: 10, color: MUTED, gap: 6 });
    doc.setDrawColor(...LINE);
    doc.line(M, y, PAGE_W - M, y);
    y += 8;
  };

  const link = (label: string, url: string) => {
    if (!url || url === "#") return;
    ensure(6);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text(label.toUpperCase(), M, y + 3.2);
    const lbW = 22;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...BRAND);
    const shown = url.replace(/^https?:\/\//, "");
    doc.textWithLink(shown, M + lbW, y + 3.2, { url });
    doc.setDrawColor(...BRAND);
    doc.setLineWidth(0.15);
    doc.line(M + lbW, y + 4.2, M + lbW + doc.getTextWidth(shown), y + 4.2);
    y += 5.5;
  };

  /* ---------- Cover ---------- */
  paintBackground();
  doc.setFillColor(30, 30, 46);
  doc.rect(0, 0, PAGE_W, 104, "F");
  doc.setFillColor(...BRAND);
  doc.rect(0, 104, PAGE_W, 1.6, "F");

  doc.setFont("courier", "normal");
  doc.setFontSize(9);
  doc.setTextColor(205, 214, 244);
  doc.text(`// ${profile.availability.toUpperCase()}`, M, 34);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(255, 255, 255);
  doc.text(profile.firstName, M, 58);
  doc.setTextColor(137, 180, 250);
  doc.text(profile.lastName, M, 74);

  doc.setFont("courier", "normal");
  doc.setFontSize(11);
  doc.setTextColor(186, 194, 222);
  doc.text(profile.title, M, 88);

  if (portrait) {
    const size = 44;
    const px = PAGE_W - M - size;
    const py = 26;
    try {
      doc.addImage(portrait.data, "JPEG", px, py, size, size, undefined, "FAST");
      doc.setDrawColor(...BRAND);
      doc.setLineWidth(0.8);
      doc.rect(px, py, size, size);
    } catch {
      /* ignore */
    }
  }

  y = 122;
  text(profile.intro, { size: 12, lh: 1.5, gap: 10 });

  doc.setDrawColor(...LINE);
  doc.line(M, y, PAGE_W - M, y);
  y += 10;

  text("CONTENTS", { size: 8.5, style: "bold", color: MUTED, gap: 5 });
  [
    "About",
    "Technical Skills",
    "Featured Projects",
    "Work Experience",
    "Education & Languages",
    "Certifications",
    "Contact",
  ].forEach((item, i) => {
    text(`${String(i + 1).padStart(2, "0")}   ${item}`, { size: 11, gap: 1.5 });
  });

  y = PAGE_H - 30;
  text(
    `${contact.email}   ·   ${contact.phone}   ·   ${contact.location}   ·   ${new Date().toLocaleDateString(
      "en-US",
      { month: "long", year: "numeric" },
    )}`,
    { size: 9, color: MUTED },
  );

  /* ---------- About ---------- */
  sectionHeader("01", "About", "About Me");
  about.paragraphs.forEach((p) => text(p, { size: 10.5, color: MUTED, gap: 5 }));
  y += 3;
  about.highlights.forEach((h) => {
    ensure(16);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...INK);
    doc.text(h.title, M, y + 4);
    y += 6;
    text(h.description, { size: 9.5, color: MUTED, gap: 3 });
  });

  /* ---------- Skills ---------- */
  sectionHeader(
    "02",
    "Skills",
    "Technical Skills",
    "A comprehensive toolkit for building modern full-stack applications.",
  );
  skillCategories.forEach((cat) => {
    const items = skills.filter((s) => s.category === cat);
    ensure(14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...BRAND);
    doc.text(cat, M, y + 4);
    y += 7;
    text(items.map((s) => `${s.name} (${s.level}%)`).join("   ·   "), {
      size: 9.5,
      color: MUTED,
      gap: 5,
    });
  });

  /* ---------- Projects ---------- */
  sectionHeader(
    "03",
    "Projects",
    "Featured Projects",
    "Selected work spanning web platforms, real-time tools, and mobile apps.",
  );
  projects.forEach((p, idx) => {
    ensure(120);
    if (idx > 0) {
      doc.setDrawColor(...LINE);
      doc.line(M, y, PAGE_W - M, y);
      y += 8;
    }
    const img = images[p.image];
    if (img) {
      try {
        doc.addImage(img.data, "JPEG", M, y, CONTENT_W, 55, undefined, "FAST");
      } catch {
        doc.setFillColor(...LINE);
        doc.rect(M, y, CONTENT_W, 55, "F");
      }
    } else {
      doc.setFillColor(...LINE);
      doc.rect(M, y, CONTENT_W, 55, "F");
    }
    doc.setDrawColor(...LINE);
    doc.setLineWidth(0.2);
    doc.rect(M, y, CONTENT_W, 55);
    y += 55 + 7;

    text(p.title, { style: "bold", size: 16, gap: 2 });
    text(p.description, { size: 10, color: MUTED, gap: 4 });
    text(`Tech:  ${p.tech.join("  ·  ")}`, { size: 9, color: INK, gap: 2 });
    text(`Key features:  ${p.features.join("   •   ")}`, {
      size: 9,
      color: MUTED,
      gap: 4,
    });
    link("GitHub", p.github);
    link("Live Demo", p.demo);
    y += 6;
  });

  /* ---------- Experience ---------- */
  sectionHeader(
    "04",
    "Experience",
    "Work Experience",
    "Professional experience building real-world software applications.",
  );
  experience.forEach((job, idx) => {
    ensure(60);
    if (idx > 0) {
      doc.setDrawColor(...LINE);
      doc.line(M, y, PAGE_W - M, y);
      y += 7;
    }
    text(job.role, { style: "bold", size: 14, gap: 1 });
    text(`${job.company}  ·  ${job.type}`, { size: 10, color: BRAND, gap: 1 });
    text(`${job.period}  ·  ${job.location}`, { size: 9, color: MUTED, gap: 4 });
    job.points.forEach((point) => text(`•  ${point}`, { size: 9.5, color: MUTED, gap: 1 }));
    y += 2;
    text(`Impact: ${job.impact}`, { size: 9.5, style: "italic", color: INK, gap: 3 });
    text(`Tech: ${job.tech.join("  ·  ")}`, { size: 9, color: MUTED, gap: 7 });
  });

  /* ---------- Education ---------- */
  sectionHeader("05", "Education", education.school);
  text(education.degree, { style: "bold", size: 13, gap: 2 });
  text(`${education.period}  ·  ${education.location}`, {
    size: 9.5,
    color: MUTED,
    gap: 4,
  });
  text(education.description, { size: 10, color: MUTED, gap: 7 });
  text("RELEVANT COURSEWORK", { size: 8.5, style: "bold", color: MUTED, gap: 3 });
  education.coursework.forEach((c, i) =>
    text(`${String(i + 1).padStart(2, "0")}   ${c}`, { size: 10, gap: 1 }),
  );
  y += 6;
  text("LANGUAGES", { size: 8.5, style: "bold", color: MUTED, gap: 3 });
  languages.forEach((l) => text(`${l.name} — ${l.level}`, { size: 10, gap: 1 }));

  /* ---------- Certifications ---------- */
  sectionHeader("06", "Certifications", "Certifications");
  certificates.forEach((c) => {
    ensure(26);
    text(c.title, { style: "bold", size: 12, gap: 1 });
    text(`${c.issuer}  ·  ${c.year}`, { size: 9.5, color: BRAND, gap: 2 });
    text(c.description, { size: 9.5, color: MUTED, gap: 6 });
  });

  /* ---------- Contact ---------- */
  sectionHeader("07", "Contact", contact.headline, contact.intro);
  text(contact.blurb, { size: 10.5, color: MUTED, gap: 8 });
  contact.channels.forEach((c) => {
    if (c.href && c.href.startsWith("http")) {
      link(c.label, c.href);
    } else {
      ensure(6);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...MUTED);
      doc.text(c.label.toUpperCase(), M, y + 3.2);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...INK);
      doc.text(c.value, M + 22, y + 3.2);
      y += 5.5;
    }
  });

  y += 6;
  doc.setFillColor(...ACCENT);
  doc.rect(M, y, 14, 1.2, "F");

  footer();
  doc.save("Sohrab-Malikzada-Portfolio.pdf");
}
