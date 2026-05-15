import React from "react";
import School from "./Schools/School";

const SCHOOLS = [
  {
    name: "Southern New Hampshire University",
    gradDate: "March 2022",
    major: "Master's Degree — Information Technology: Software Application Development",
    url: "https://www.snhu.edu",
  },
  {
    name: "Launch Academy",
    gradDate: "November 2017",
    major: "Full Stack Web Development",
    url: "https://launchacademy.com/",
  },
  {
    name: "Curry College",
    gradDate: "May 2013",
    major: "Bachelor's Degree — Information Technology",
    url: "https://www.curry.edu",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-slate-100/50 py-20 sm:py-28 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Where I learned</p>
          <h2 className="mt-2 section-title">Education</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SCHOOLS.map((s) => (
            <School key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
