import { jsPDF } from "jspdf";
import { about, artworks, designProjects, profile, projects } from "@/data/portfolio";

/* ---------- palette (mirrors the site design system) ---------- */
const INK: [number, number, number] = [26, 28, 33];
const MUTED: [number, number, number] = [110, 114, 124];
const PAPER: [number, number, number] = [251, 250, 247];
const LINE: [number, number, number] = [223, 220, 213];
const DEV: [number, number, number] = [26, 122, 255];
const DESIGN: [number, number, number] = [232, 100, 45];
const ART: [number, number, number] = [242, 175, 20];

const PAGE_W = 210;
const PAGE_H = 297;
const M = 18;
const CONTENT_W = PAGE_W - M * 2;

type ImgMap = Record<string, { data: string; w: number; h: number } | null>;

/* ---------- image loading ---------- */
const loadImage = (url: string) =>
  new Promise<{ data: string; w: number; h: number } | null>((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    const done = (v: { data: string; w: number; h: number } | null) => resolve(v);
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const scale = Math.min(1, 1000 / Math.max(img.width, img.height));
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) return done(null);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        done({
          data: canvas.toDataURL("image/jpeg", 0.85),
          w: canvas.width,
          h: canvas.height,
        });
      } catch {
        done(null);
      }
    };
    img.onerror = () => done(null);
    img.src = url;
    setTimeout(() => done(null), 15000);
  });

async function loadAllImages(): Promise<ImgMap> {
  const urls = [
    ...projects.map((p) => p.image),
    ...designProjects.map((p) => p.image),
    ...artworks.map((a) => a.image),
  ];
  const results = await Promise.all(urls.map(loadImage));
  const map: ImgMap = {};
  urls.forEach((u, i) => (map[u] = results[i]));
  return map;
}

/* ---------- pdf builder ---------- */
export async function generatePortfolioPdf() {
  const images = await loadAllImages();
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
    doc.text(profile.name.toUpperCase(), M, PAGE_H - 9);
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
      font?: "times" | "helvetica";
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
      font = "helvetica",
      style = "normal",
      color = INK,
      lh = 1.45,
      width = CONTENT_W,
      x = M,
      gap = 0,
    } = opts;
    doc.setFont(font, style);
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

  const sectionHeader = (
    label: string,
    title: string,
    accent: [number, number, number],
    intro?: string,
  ) => {
    addPage();
    doc.setFillColor(...accent);
    doc.rect(M, y, 14, 1.4, "F");
    y += 7;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(...accent);
    doc.text(label.toUpperCase(), M, y);
    y += 8;
    text(title, { font: "times", style: "bold", size: 26, gap: 3 });
    if (intro) text(intro, { size: 10, color: MUTED, gap: 6 });
    doc.setDrawColor(...LINE);
    doc.line(M, y, PAGE_W - M, y);
    y += 8;
  };

  const drawImage = (url: string, x: number, w: number, h: number) => {
    const img = images[url];
    if (img) {
      try {
        doc.addImage(img.data, "JPEG", x, y, w, h, undefined, "FAST");
      } catch {
        doc.setFillColor(...LINE);
        doc.rect(x, y, w, h, "F");
      }
    } else {
      doc.setFillColor(...LINE);
      doc.rect(x, y, w, h, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...MUTED);
      doc.text("Image unavailable", x + w / 2, y + h / 2, { align: "center" });
    }
    doc.setDrawColor(...LINE);
    doc.setLineWidth(0.2);
    doc.rect(x, y, w, h);
  };

  /* ---------- 1. Cover ---------- */
  paintBackground();
  doc.setFillColor(...INK);
  doc.rect(0, 0, PAGE_W, 96, "F");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(210, 205, 195);
  doc.text(profile.tagline.toUpperCase().split("").join(" "), M, 38);

  doc.setFont("times", "bold");
  doc.setFontSize(38);
  doc.setTextColor(252, 251, 248);
  doc.text(profile.name, M, 58);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  const rolePalette = [DEV, DESIGN, ART];
  let rx = M;
  profile.roles.forEach((role, i) => {
    doc.setTextColor(...rolePalette[i]);
    doc.text(role, rx, 72);
    rx += doc.getTextWidth(role) + 4;
    if (i < profile.roles.length - 1) {
      doc.setTextColor(150, 148, 143);
      doc.text("/", rx, 72);
      rx += doc.getTextWidth("/") + 4;
    }
  });

  y = 116;
  text(profile.intro, { font: "times", size: 16, color: INK, lh: 1.5, gap: 12 });

  doc.setDrawColor(...LINE);
  doc.line(M, y, PAGE_W - M, y);
  y += 10;

  text("PORTFOLIO CONTENTS", { size: 8.5, style: "bold", color: MUTED, gap: 5 });
  [
    "About & Capabilities",
    "Development \u2014 Full-Stack Projects",
    "Design \u2014 Visual Works",
    "Fine Art \u2014 Selected Paintings",
    "Contact",
  ].forEach((item, i) => {
    text(`${String(i + 1).padStart(2, "0")}   ${item}`, {
      size: 11,
      font: "times",
      gap: 1.5,
    });
  });

  y = PAGE_H - 30;
  text(
    `${profile.email}   \u00b7   ${new Date().toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })}`,
    { size: 9, color: MUTED },
  );

  /* ---------- 2. About ---------- */
  sectionHeader("About", "About Me", INK);
  about.paragraphs.forEach((p) =>
    text(p, { size: 10.5, color: MUTED, gap: 5 }),
  );
  y += 4;

  const colW = (CONTENT_W - 8) / 3;
  const cardTop = y;
  const accents = [DEV, DESIGN, ART];
  let maxCardH = 0;
  about.disciplines.forEach((d, i) => {
    const x = M + i * (colW + 4);
    y = cardTop;
    doc.setFillColor(246, 244, 240);
    doc.setDrawColor(...LINE);
    doc.roundedRect(x, cardTop, colW, 34, 2, 2, "FD");
    doc.setFillColor(...accents[i]);
    doc.rect(x + 5, cardTop + 6, 8, 1.2, "F");
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...INK);
    doc.text(d.title, x + 5, cardTop + 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    const lines = doc.splitTextToSize(d.skills, colW - 10) as string[];
    lines.forEach((l, li) => doc.text(l, x + 5, cardTop + 20 + li * 4));
    maxCardH = Math.max(maxCardH, 34);
  });
  y = cardTop + maxCardH + 10;

  /* ---------- 3. Development ---------- */
  sectionHeader(
    "Development",
    "Full-Stack Projects",
    DEV,
    "Building scalable, performant applications with modern technologies. From concept to deployment, every line of code serves a purpose.",
  );

  projects.forEach((p, idx) => {
    ensure(110);
    if (idx > 0) {
      doc.setDrawColor(...LINE);
      doc.line(M, y, PAGE_W - M, y);
      y += 8;
    }
    drawImage(p.image, M, CONTENT_W, 58);
    y += 58 + 7;

    text(p.title, { font: "times", style: "bold", size: 18, gap: 2 });
    text(p.description, { size: 10, color: MUTED, gap: 5 });

    const stacks: Array<[string, string[]]> = [
      ["Frontend", p.techStack.frontend],
      ["Backend", p.techStack.backend],
      ["Tools", p.techStack.tools],
    ];
    stacks.forEach(([label, items]) => {
      ensure(6);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...DEV);
      doc.text(label.toUpperCase(), M, y + 3.2);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...INK);
      doc.setFontSize(9);
      const lbW = 22;
      const lines = doc.splitTextToSize(
        items.join("  \u00b7  "),
        CONTENT_W - lbW,
      ) as string[];
      lines.forEach((l, li) => doc.text(l, M + lbW, y + 3.2 + li * 4));
      y += Math.max(5.5, lines.length * 4 + 1.5);
    });

    y += 3;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    ensure(6);
    doc.text(
      "Key features:  " + p.features.join("   \u2022   "),
      M,
      y + 3.2,
    );
    y += 8;

    const links: Array<[string, string]> = [
      ["GitHub", p.github],
      ["Live Demo", p.demo],
    ].filter(([, url]) => url && url !== "#") as Array<[string, string]>;

    links.forEach(([label, url]) => {
      ensure(6);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...MUTED);
      doc.text(label.toUpperCase(), M, y + 3.2);
      const lbW = 22;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...DEV);
      const shown = url.replace(/^https?:\/\//, "");
      doc.textWithLink(shown, M + lbW, y + 3.2, { url });
      const tw = doc.getTextWidth(shown);
      doc.setDrawColor(...DEV);
      doc.setLineWidth(0.15);
      doc.line(M + lbW, y + 4.2, M + lbW + tw, y + 4.2);
      y += 5.5;
    });

    y += 6;
  });

  /* ---------- 4. Design ---------- */
  sectionHeader(
    "Design",
    "Visual Works",
    DESIGN,
    "Crafting memorable visual experiences through branding, user interfaces, and print design. Every project tells a story.",
  );

  const gW = (CONTENT_W - 6) / 2;
  const gImgH = 46;
  const cellH = gImgH + 16;
  designProjects.forEach((p, i) => {
    const col = i % 2;
    if (col === 0) ensure(cellH + 4);
    const x = M + col * (gW + 6);
    const rowTop = y;
    drawImage(p.image, x, gW, gImgH);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(...DESIGN);
    doc.text(p.category.toUpperCase(), x, rowTop + gImgH + 6);
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...INK);
    doc.text(p.title, x, rowTop + gImgH + 11.5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text(p.tools.join("  \u00b7  "), x, rowTop + gImgH + 15.5);
    y = rowTop;
    if (col === 1 || i === designProjects.length - 1) y = rowTop + cellH + 6;
  });

  /* ---------- 5. Fine Art ---------- */
  sectionHeader(
    "Fine Art",
    "Selected Paintings",
    ART,
    "Original works across oil, acrylic, watercolor, and mixed media \u2014 exhibited in galleries and private collections.",
  );

  const aW = (CONTENT_W - 8) / 2;
  const aImgH = 62;
  const aCellH = aImgH + 18;
  artworks.forEach((a, i) => {
    const col = i % 2;
    if (col === 0) ensure(aCellH + 4);
    const x = M + col * (aW + 8);
    const rowTop = y;
    drawImage(a.image, x, aW, aImgH);
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...INK);
    doc.text(a.title, x, rowTop + aImgH + 7);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...MUTED);
    doc.text(`${a.medium}, ${a.year}`, x, rowTop + aImgH + 12);
    doc.text(a.dimensions, x, rowTop + aImgH + 16);
    y = rowTop;
    if (col === 1 || i === artworks.length - 1) y = rowTop + aCellH + 8;
  });

  /* ---------- 6. Contact ---------- */
  sectionHeader("Contact", "Let's Work Together", INK);
  text("Have a project in mind? I'd love to hear from you.", {
    size: 11,
    color: MUTED,
    gap: 10,
  });

  text("EMAIL", { size: 8.5, style: "bold", color: MUTED, gap: 1 });
  text(profile.email, { font: "times", size: 16, gap: 8 });

  text("ELSEWHERE", { size: 8.5, style: "bold", color: MUTED, gap: 2 });
  profile.socials.forEach((s) => {
    text(`${s.label}   \u2014   ${s.value}`, { size: 10.5, gap: 1.5 });
  });

  footer();
  doc.save("Sohrab-Malikzada-Portfolio.pdf");
}
