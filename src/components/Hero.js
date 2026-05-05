import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '../animations';

function Hero() {
  return (
    <section className="hero section" id="home">
      <motion.div
        className="container hero-content hero-hover-card"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          Full Stack Web Designer & Developer
        </motion.p>
        <motion.h1 variants={fadeUp}>Talha</motion.h1>
        <motion.h2 variants={fadeUp}>Designing and building scalable web experiences</motion.h2>
        <motion.p className="hero-tagline" variants={fadeUp}>
          I design and develop high-performance, user-focused websites that
          combine strong visual identity with robust technical architecture.
        </motion.p>
        <motion.p className="hero-tagline hero-tagline-secondary" variants={fadeUp}>
          With a full-stack approach, I build conversion-driven digital products
          from front-end interfaces to back-end functionality, with speed,
          usability, and maintainability at the core.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a
            className="btn btn-primary glow-btn"
            href="https://www.fiverr.com/s/yv31wL0"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
