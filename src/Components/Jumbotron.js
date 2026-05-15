import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import facebook from "../images/facebook.png";
import matt1 from "../images/Matt1.jpg";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/matt-grossman/", img: linkedin, label: "LinkedIn" },
  { href: "https://github.com/mbgrossm2009", img: github, label: "GitHub" },
  { href: "https://www.facebook.com/matt.grossman.18", img: facebook, label: "Facebook" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl dark:bg-brand-600/20" />
        <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-700/20" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_280px]">
          <div className="animate-fade-up">
            <p className="section-eyebrow">Hi, I'm Matt</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Building things for the web,{" "}
              <span className="bg-gradient-to-r from-brand-500 to-fuchsia-500 bg-clip-text text-transparent">
                one component at a time.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I bring 18 years of leadership from retail management and a deep
              love of problem-solving into software development. Comfortable
              across the stack with JavaScript, React, Ruby on Rails, HTML, and
              CSS — and always shipping something new.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/Matthew_Grossman_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Download Resume
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
              <a
                href="mailto:mgrossman119@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/60 transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-brand-400"
                >
                  <img src={s.img} alt="" className="h-5 w-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs animate-fade-in">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-tr from-brand-500 to-fuchsia-500" />
            <img
              src={matt1}
              alt="Matt Grossman"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl ring-1 ring-slate-200 dark:ring-slate-800"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            "JavaScript",
            "React",
            "Ruby on Rails",
            "PostgreSQL",
            "HTML & CSS",
            "Bootstrap",
            "AWS / Heroku",
            "Test-Driven Dev",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-center text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
