
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Code2, ArrowUpRight, Send } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main className={styles.contact}>
      <section className={styles.contactHero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>LET'S CONNECT</span>
          <h1>Have a project<br />in <span>mind?</span></h1>

          <p>
            I'm always open to meaningful conversations,
            exciting opportunities and collaborations.
            Let's connect and create something great together.
          </p>
        </motion.div>
      </section>

      <section className={styles.contactSection}>
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>GET IN TOUCH</span>

          <h2>Let's start a conversation.</h2>

          <p>
            Whether you have an opportunity, a project idea or
            simply want to connect, I'd love to hear from you.
          </p>

          <Link
            to="mailto:YOUR_EMAIL@gmail.com"
            className={styles.emailLink}
          >
            <Mail size={20} />
               mhlongohappiness880@gmail.com
            <ArrowUpRight size={18} />
          </Link>

          <div className={styles.socialLinks}>
            <Link
              to="https://github.com/Happiness549"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={20} />
              GitHub
            </Link>

            <Link
              to="https://www.linkedin.com/in/happiness-mhlongo-76a73a178"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.form
  className={styles.contactForm}
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  <h2>Send me a message</h2>

  <div className={styles.formGroup}>
    <label htmlFor="name">Your Name</label>
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      required
    />
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="email">Email Address</label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      required
    />
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="subject">Subject</label>
    <input
      type="text"
      id="subject"
      placeholder="What is this about?"
      required
    />
  </div>

    <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
        id="message"
        rows={5}
        placeholder="Write your message..."
        required
        />
    </div>

    <button type="submit">
        Send Message <Send size={18} />
    </button>
    </motion.form>
      </section>
    </main>
  );
};

export default Contact;
