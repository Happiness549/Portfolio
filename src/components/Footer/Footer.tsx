
import { Link } from "react-router-dom";
import { Code2, ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <Link to="/" className={styles.logo}>
            HM<span>.</span>
          </Link>

          <p>Building digital experiences with purpose.</p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={styles.footerSocials}>
          <h3>Connect</h3>

          <Link
            to="https://github.com/Happiness549"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={16} />
            GitHub <ArrowUpRight size={16} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/happiness-mhlongo-76a73a178"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Happiness Mhlongo. All rights reserved.
        </p>
        <p>Designed & built with purpose.</p>
      </div>
    </footer>
  );
};

export default Footer;
