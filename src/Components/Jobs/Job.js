import React from "react";
import useReveal from "../../hooks/useReveal";

export default function Job({ title, company, description = [], src, url, current }) {
  const ref = useReveal();

  const Header = (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        {company && (
          <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
            {company}
          </p>
        )}
      </div>
      {current && (
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
          Current
        </span>
      )}
    </div>
  );

  return (
    <article ref={ref} className="card reveal">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90"
        >
          {Header}
        </a>
      ) : (
        Header
      )}

      {src && (
        <a
          href={url || "#"}
          target={url ? "_blank" : undefined}
          rel={url ? "noopener noreferrer" : undefined}
          className="mt-4 block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/40"
        >
          <img
            src={src}
            alt={`${company || title} preview`}
            className="h-40 w-full object-contain p-4 transition group-hover:scale-105"
          />
        </a>
      )}

      {description.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
              <span>{item.replace(/^[-•\s]+/, "")}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
