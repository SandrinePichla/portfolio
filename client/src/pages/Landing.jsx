import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Home from "../sections/Home.jsx";
import Projects from "../sections/Projects.jsx";
import Skills from "../sections/Skills.jsx";
import Resume from "../sections/Resume.jsx";
import Contact from "../sections/Contact.jsx";

export default function Landing() {
  const { section } = useParams(); // ex: "projects"

  useEffect(() => {
    if (!section) return;                 // route "/"
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [section]);

  return (
    <>
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}