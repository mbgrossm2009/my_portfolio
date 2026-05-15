import React from "react";
import Job from "./Jobs/Job";
import hathaway1 from "../images/hathawayhomes.png";
import Matt2 from "../images/Matt2.jpg";
import cvs from "../images/cvs.png";

const JOBS = [
  {
    title: "Freelance Developer",
    company: "Independent",
    current: true,
    description: [
      "Build, test, and maintain custom websites by integrating interactive UI elements.",
      "Develop reusable React components to streamline front-end functionality and improve user experience.",
      "Collaborate with clients throughout the design process to ensure satisfaction with the final product.",
    ],
    src: Matt2,
  },
  {
    title: "Store Manager",
    company: "CVS / Health",
    current: true,
    description: [
      "Lead a team of 15, ensuring smooth daily operations and top-notch customer service.",
      "Analyze sales data to drive performance improvements and keep products in stock to minimize waste and boost profitability.",
      "Coach and train staff to enhance performance, engagement, and retention.",
      "Leverage point-of-sale and inventory systems to make operations more efficient and track key metrics.",
    ],
    src: cvs,
    url: "https://www.cvs.com/",
  },
  {
    title: "Full Stack Web Developer",
    company: "HathawayHomes-MA",
    description: [
      "Designed and developed a full-service real estate website with clean, organized code, enabling users to customize their property search by location, price, and room count.",
      "Implemented a PostgreSQL database to store listings created by an Admin.",
      "Integrated the Zillow API using REST architecture.",
      "Installed and configured AWS and Heroku tools for development.",
      "Tech: Ruby on Rails, HTML, CSS, Bootstrap, Heroku, AWS, Test-Driven Development.",
    ],
    src: hathaway1,
    url: "http://www.hathawayhomes-ma.com",
  },
];

export default function ProfessionalExperience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">What I've done</p>
          <h2 className="mt-2 section-title">Professional Experience</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {JOBS.map((job) => (
            <Job key={`${job.title}-${job.company}`} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
