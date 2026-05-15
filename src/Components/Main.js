import React from "react";
import Navbar from "./Navbar";
import Hero from "./Jumbotron";
import ProfessionalExperience from "./ProfessionalExperience";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Footer from "./Footer";

export default function Main() {
  return (
    <div id="top" className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProfessionalExperience />
        <Education />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}
