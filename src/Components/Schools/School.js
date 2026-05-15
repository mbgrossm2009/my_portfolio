import React from "react";
import useReveal from "../../hooks/useReveal";

export default function School({ name, major, gradDate, url }) {
  const ref = useReveal();

  return (
    <article ref={ref} className="card reveal flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
          {name}
        </h3>
        <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {gradDate}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {major}
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          Visit site
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      )}
    </article>
  );
}
