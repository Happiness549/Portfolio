
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, ArrowUpRight } from "lucide-react";
import styles from "./Education.module.css";

type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
  skills: string[];
  inProgress?: boolean;
  certificateUrl?: string;
};

const education: EducationItem[] = [
  {
    title: "FERN Stack Program",
    institution: "CodeTribe (mLab)",
    period: "2026 – Present",
    description:
      "Intensive full-stack training focused on building real-world applications using Firebase, Express, React and Node.js.",
    skills: ["Firebase", "Express.js", "React", "Node.js"],
    inProgress: true,
  },
  {
    title: "Software Development: MERN Full-Stack Specialization",
    institution: "Power Learn Project (PLP Academy)",
    period: "2025",
    description:
      "A 16-week program covering Python, database design, SQL, startup building for developers and software engineering essentials, with a specialization in full-stack web development.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Python", "SQL"],
  },
  {
    title: "Software Engineering: Front-End Web Development",
    institution: "ALX Africa",
    period: "Completed November 2025",
    description:
      "A software engineering programme focused on programming foundations and building responsive, user-friendly web interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    title: "Basics to React",
    institution: "SheCodes",
    period: "2025",
    description:
      "Developed foundational React skills, including components, props, state and building interactive user interfaces.",
    skills: ["React", "JavaScript"],
  },
  {
  title: "National Senior Certificate (Grade 12)",
  institution: "Your High School Name",
  period: "2011",
  description:
    "Completed secondary education, building a strong academic foundation and developing essential problem-solving and critical-thinking skills.",
  skills: ["National Senior Certificate"],
},
];

export default function Education() {
  return (
    <main className={styles.education}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.heroIcon}>
          <GraduationCap size={32} />
        </div>

        <span className={styles.eyebrow}>MY LEARNING JOURNEY</span>

        <h1>Education & <span>Certifications.</span></h1>

        <p>
          Every opportunity to learn has shaped the developer
          I am today. Here's a look at my academic background,
          professional training and continuous learning journey.
        </p>
      </motion.div>

      <section className={styles.educationSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>WHERE I'VE LEARNED</span>
          <h2>My educational background.</h2>
          <p>
            A collection of programmes and experiences that have
            contributed to my growth in software development.
          </p>
        </div>

        <div className={styles.timeline}>
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              className={styles.educationCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className={styles.timelineIcon}>
                {item.inProgress ? (
                  <BookOpen size={21} />
                ) : (
                  <Award size={21} />
                )}
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.institution}>
                    {item.institution}
                  </span>

                  <span
                    className={`${styles.period} ${
                      item.inProgress ? styles.current : ""
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p className={styles.description}>
                  {item.description}
                </p>

                <div className={styles.skills}>
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificateLink}
                  >
                    View Certificate
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.div
        className={styles.closingNote}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <GraduationCap size={25} />
        <p>Committed to learning. Driven by growth.</p>
      </motion.div>
    </main>
  );
}
