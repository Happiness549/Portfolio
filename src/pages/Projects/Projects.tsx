import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import styles from "./Project.module.css";
import  hotelApp from '../../assets/hotelApp.png'
import shoppingList from '../../assets/shoppingList.png'
import recipeFinder from '../../assets/recipeFinder.png'
import weatherApp from '../../assets/weatherApp.png'


export const projects = [
  {
    id: 1,
    title: "Hotel Booking App",
    category: "Full-Stack Development",
    description:
      "A full-stack hotel booking platform where users can explore hotels, view available rooms and make reservations.",
    image: hotelApp,
    technologies: [
      "React",
      "Express.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Neon PostgreSQL",
    ],
    github:
      "https://github.com/Happiness549/Full-Stack-Hotel-App",
    demo: "https://full-stack-hotel-app-4bx6.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Shopping List App",
    category: "Frontend Development",
    description:
      "A shopping list application that allows users to manage their shopping items with an interactive interface.",
      image: shoppingList,
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "JSON Server",
    ],
    github:
      "https://github.com/Happiness549/ReactTS-Shopping-List",
    demo: "https://silver-halva-cdcffa.netlify.app/",
    featured: false,
  },
  {
    id: 3,
    title: "Weather App",
    category: "Frontend Development",
    description:
      "A weather application built with React, featuring a clean interface for displaying weather information.",
      image: weatherApp,
    technologies: ["React", "TypeScript", "CSS"],
    github:
      "https://github.com/Happiness549/ReactTS-Weather-App",
    demo: "https://calm-frangollo-2431ba.netlify.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Recipe Finder",
    category: "Frontend Development",
    description:
      "A recipe discovery application that helps users explore meals through an interactive interface.",
      image: recipeFinder,
    technologies: ["React", "Zustand", "Tailwind CSS"],
    github:
      "https://github.com/Happiness549/ALX-FE-Capstone-Project",
    demo: "https://project-recipe-finder-alx.netlify.app/",
    featured: false,
  },
];
export const Projects = () => {
  return (
    <main className={styles.projects}>
      <section className={styles.projectsHero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>MY RECENT WORK</span>

          <h1>
            Projects that bring
            <span> ideas to life.</span>
          </h1>

          <p>
            A collection of projects I've built while exploring,
            learning and growing as a developer.
          </p>
        </motion.div>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ""
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                {project.featured && (
                  <span className={styles.featuredLabel}>
                    FEATURED PROJECT
                  </span>
                )}
              </div>

              <div className={styles.projectContent}>
                <span className={styles.category}>
                  {project.category}
                </span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Code2 size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.demoButton}
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

