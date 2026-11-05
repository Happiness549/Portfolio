
import { motion } from "framer-motion";
import {Code2, Database, Layers, Server, GraduationCap, Lightbulb, Rocket, Sparkles,} from "lucide-react";
import styles from "./About.module.css";

const skills = [
  {
    title: "Frontend Development",
    icon: <Code2 size={24} />,
    description: "Building responsive and interactive user interfaces.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    description: "Developing APIs and server-side applications.",
    technologies: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    description: "Working with databases to store and manage application data.",
    technologies: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "State Management",
    icon: <Layers size={24} />,
    description: "Managing application state and data flow.",
    technologies: ["Redux Toolkit", "Zustand"],
  },
];

const journey = [
  {
    year: "01",
    title: "Software Engineering Foundations",
    description:
      "Developed my programming foundations through software engineering studies, strengthening my understanding of problem-solving and web development.",
  },
  {
    year: "02",
    title: "MERN Stack Development",
    description:
      "Built practical full-stack applications using MongoDB, Express.js, React and Node.js, gaining experience in frontend and backend development.",
  },
  {
    year: "03",
    title: "FERN Stack Journey",
    description:
      "Continuing to grow as a developer through CodeTribe, expanding my experience with Firebase, Express.js, React and Node.js.",
  },
];

export const About = () => {
  return (
    <main className={styles.about}>
      <section className={styles.aboutHero}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>GET TO KNOW ME</span>

          <h1>A little about<span> who I am.</span></h1>

          <p>
            Beyond the code, I'm a curious problem-solver who enjoys
            learning, creating and turning ideas into meaningful
            digital experiences.
          </p>
        </motion.div>

        <motion.div
          className={styles.introCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.introIcon}>
            <Sparkles size={30} />
          </div>

          <span>MY DEVELOPER PHILOSOPHY</span>

          <h2>Curiosity drives me.<br />
            Creativity inspires me.<br />
            Purpose guides me.
          </h2>

          <div className={styles.introDecoration}>✳</div>
        </motion.div>
      </section>

      <section className={styles.storySection}>
        <motion.div
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>MY STORY</span>
          <h2>More than just writing code.</h2>
        </motion.div>

        <motion.div
          className={styles.storyContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
      
          <p>
            I'm a Full-Stack Developer passionate about building
            meaningful digital experiences and turning ideas into
            practical solutions. I enjoy approaching challenges with
            curiosity, creativity and a problem-solving mindset.
          </p>

          <p>
            My experience spans frontend and backend development,
            working with technologies such as React, TypeScript,
            JavaScript, Node.js, Express.js, MongoDB and PostgreSQL.
            I enjoy building applications that combine thoughtful
            design with functionality.
          </p>

          <p>
            Through my MERN Stack experience and current FERN Stack
            journey at CodeTribe, I've developed a strong appreciation
            for continuous learning, collaboration and building
            solutions that address real-world needs.
          </p>

          <p>
            Beyond writing code, I'm someone who values growth,
            embraces challenges and is always curious about what
            I can create next. I'm excited to contribute my skills,
            learn from others and grow through meaningful opportunities.
          </p>

        </motion.div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>THE JOURNEY</span>
          <h2>How I've grown.</h2>
          <p>Every experience has been another step in my development journey.
          </p>
        </div>

        <div className={styles.timeline}>
          {journey.map((item, index) => (
            <motion.div
              key={item.year}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.timelineNumber}>
                {item.year}
              </div>

              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>WHAT I WORK WITH</span>
          <h2>My technical toolkit.</h2>
          <p>Technologies and tools I use to bring ideas to life.</p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className={styles.technologyList}>
                {skill.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesCard}>
          <div className={styles.valuesIcon}>
            <GraduationCap size={28} />
          </div>

          <div>
            <span className={styles.eyebrow}>ALWAYS EVOLVING</span>
            <h2>Learning never stops.</h2>
            <p>
              I believe every challenge is an opportunity to learn
              something new. I'm committed to continuous growth,
              building meaningful projects and becoming a better
              developer every day.
            </p>
          </div>
        </div>

        <div className={styles.valuesCard}>
          <div className={styles.valuesIcon}>
            <Lightbulb size={28} />
          </div>

          <div>
            <span className={styles.eyebrow}>MY APPROACH</span>
            <h2>Creating with purpose.</h2>
            <p>
              I value thoughtful problem-solving, clean code and
              user-friendly experiences. My goal is to build
              applications that are not only functional but also
              enjoyable to use.
            </p>
          </div>
        </div>
      </section>

      <motion.div
        className={styles.closingNote}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Rocket size={24} />
        <p>Curious mind. Creative spirit. Developer in progress.</p>
      </motion.div>
    </main>
  );
};


