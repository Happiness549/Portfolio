
import { Link } from "react-router-dom";
import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <main className={styles.home} id="home">
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         
          <span className={styles.greeting}>HELLO, I'M HAPPINESS</span>

          <h1>
            Building digital<br />
            experiences with<span> purpose.</span>
          </h1>

          <p className={styles.description}>
            I'm a Full-Stack Developer passionate about turning ideas
            into meaningful digital experiences. I build responsive,
            user-friendly applications with React, TypeScript and
            modern backend technologies. With practical MERN Stack
            experience and my ongoing FERN Stack journey, I'm always
            exploring new ways to solve problems through technology.
          </p>


          <div className={styles.stackTags}>
            <span>MERN STACK</span>
            <span>FERN STACK</span>
            <span>REACT</span>
            <span>TYPESCRIPT</span>
          </div>

          <div className={styles.heroButtons}>
            <Link to="/projects" className={styles.primaryButton}> Explore My Work <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className={styles.secondaryButton}>Let's Talk</Link>
          </div>

          <div className={styles.availability}>
            <span className={styles.statusDot}></span>
            Open to opportunities
          </div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className={styles.visualCircle}>
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <Code2 size={42} strokeWidth={1.3} />

              <p>Turning ideas</p>
              <h2>into reality.</h2>

              <div className={styles.codeFooter}>
                <span>const developer = </span>
                <span>"creative";</span>
              </div>
            </div>
          </div>

          <div className={styles.floatingTag}>
            <Code2 size={18} />
            <span>Always building</span>
            </div>

          <span className={styles.decorativeStar}>✳</span>
        </motion.div>
      </section>

      <section className={styles.ticker}>
        <div className={styles.tickerTrack}>
            <div className={styles.tickerContent}>
            <span>React</span>
            <span>✳</span>
            <span>TypeScript</span>
            <span>✳</span>
            <span>JavaScript</span>
            <span>✳</span>
            <span>Node.js</span>
            <span>✳</span>
            <span>Express.js</span>
            <span>✳</span>
            <span>React</span>
            <span>✳</span>
            <span>TypeScript</span>
            <span>✳</span>
            <span>JavaScript</span>
            <span>✳</span>
            <span>Node.js</span>
            <span>✳</span>
            <span>Express.js</span>
            <span>✳</span>
            </div>
        </div>

        <div className={`${styles.tickerTrack} ${styles.reverse}`}>
            <div className={styles.tickerContent}>
            <span>MongoDB</span>
            <span>✳</span>
            <span>PostgreSQL</span>
            <span>✳</span>
            <span>Redux Toolkit</span>
            <span>✳</span>
            <span>Zustand</span>
            <span>✳</span>
            <span>Firebase</span>
            <span>✳</span>
            <span>MongoDB</span>
            <span>✳</span>
            <span>PostgreSQL</span>
            <span>✳</span>
            <span>Redux Toolkit</span>
            <span>✳</span>
            <span>Zustand</span>
            <span>✳</span>
            <span>Firebase</span>
            <span>✳</span>
            </div>
        </div>
        </section>

      <div className={styles.scrollIndicator}>
        <span></span>
        SCROLL TO EXPLORE
      </div>
    </main>
  );
};


