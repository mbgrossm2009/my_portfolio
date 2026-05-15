import React from "react";
import useReveal from "../hooks/useReveal";

const HOBBIES = [
  {
    title: "Built From Bulk",
    tag: "Side Project",
    description:
      "My personal site/project for Magic: The Gathering — turning bulk cards into playable decks. Built end-to-end as a way to keep sharpening my full-stack skills.",
    links: [
      { label: "Visit site", href: "https://builtfrombulk.com" },
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];

function HobbyCard({ hobby }) {
  const ref = useReveal();
  return (
    <article ref={ref} className="card reveal flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
          {hobby.tag}
        </span>
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold text-slate-900 dark:text-white">
        {hobby.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {hobby.description}
      </p>

      {hobby.tech && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {hobby.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {hobby.links && (
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {hobby.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              {link.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Outside of work</p>
          <h2 className="mt-2 section-title">Hobbies &amp; Side Projects</h2>
        </div>
        <div className="mx-auto grid max-w-md gap-6">
          {HOBBIES.map((h) => (
            <HobbyCard key={h.title} hobby={h} />
          ))}
        </div>
      </div>
    </section>
  );
}
