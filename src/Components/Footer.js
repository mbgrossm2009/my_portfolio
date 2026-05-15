import React, { useMemo } from "react";

const QUOTES = [
  '"Whatever the mind of man can conceive and believe, it can achieve." — Napoleon Hill',
  '"Strive not to be a success, but rather to be of value." — Albert Einstein',
  '"You miss 100% of the shots you don\'t take." — Wayne Gretzky (— Michael Scott)',
  '"Every strike brings me closer to the next home run." — Babe Ruth',
  '"Life isn\'t about getting and having, it\'s about giving and being." — Kevin Kruse',
  '"Life is what happens to you while you\'re busy making other plans." — John Lennon',
  '"We become what we think about." — Earl Nightingale',
  '"Life is 10% what happens to me and 90% of how I react to it." — Charles Swindoll',
  '"The best time to plant a tree was 20 years ago. The second best time is now." — Chinese Proverb',
  '"Eighty percent of success is showing up." — Woody Allen',
  '"Your time is limited, so don\'t waste it living someone else\'s life." — Steve Jobs',
  '"Winning isn\'t everything, but wanting to win is." — Vince Lombardi',
];

export default function Footer() {
  const quote = useMemo(
    () => QUOTES[Math.floor(Math.random() * QUOTES.length)],
    []
  );
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-100/60 py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center">
        <p className="text-sm italic text-slate-600 dark:text-slate-400">
          {quote}
        </p>
        <div className="flex flex-col items-center gap-2 text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:justify-between">
          <span>© {year} Matthew Grossman. Built with React &amp; Tailwind.</span>
          <a
            href="mailto:mgrossman119@gmail.com"
            className="hover:text-brand-600 dark:hover:text-brand-400"
          >
            mgrossman119@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
