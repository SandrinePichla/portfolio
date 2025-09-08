// server/scripts/seed.js
import "dotenv/config";
import mongoose from "mongoose";
import Project from "../models/Project.js";

const seedProjects = [
  {
    title: "Nina Carducci",
    slug: "nina-carducci",
    description:
      "Optimisation d’un site existant pour une photographe : accessibilité, SEO et performance.",
    tags: ["SEO", "Accessibilité", "Optimisation"],
    featured: false,
    repoUrl: "https://github.com/tonpseudo/nina-carducci",
    demoUrl: "https://tonportfolio/nina-carducci",
  },
  {
    title: "Kasa",
    slug: "kasa",
    description:
      "Refonte front-end en React d’une application de location immobilière avec gestion des routes et animations.",
    tags: ["React", "SCSS", "Front-end"],
    featured: true,
    repoUrl: "https://github.com/SandrinePichla/kasa",
    demoUrl: "https://tonportfolio/kasa",
  },
  {
    title: "Mon Vieux Grimoire",
    slug: "mon-vieux-grimoire",
    description:
      "Développement d’une API REST sécurisée avec Node.js, Express et MongoDB pour gérer une bibliothèque de livres.",
    tags: ["Node.js", "Express", "MongoDB"],
    featured: true,
    repoUrl: "https://github.com/tonpseudo/mon-vieux-grimoire",
    demoUrl: "https://tonportfolio/mon-vieux-grimoire",
  },
  {
    title: "Menu Maker by Qwenta",
    slug: "menu-maker",
    description:
      "Application full-stack permettant aux restaurateurs de créer et gérer leurs menus en ligne.",
    tags: ["MERN", "Agile", "Full-stack"],
    featured: false,
    repoUrl: "https://github.com/tonpseudo/menu-maker",
    demoUrl: "https://tonportfolio/menu-maker",
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connecté à MongoDB");

    await Project.deleteMany({});
    console.log("🗑️ Collection 'projects' vidée");

    await Project.insertMany(seedProjects);
    console.log("🌱 Données insérées avec succès !");

    mongoose.connection.close();
    console.log("✅ Connexion fermée");
  } catch (err) {
    console.error("❌ Erreur seed :", err);
    process.exit(1);
  }
}

seed();