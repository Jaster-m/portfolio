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
          Freelance Web Developer
        </motion.p>
        <motion.h1 variants={fadeUp}>Talha</motion.h1>
        <motion.h2 variants={fadeUp}>WordPress & Elementor Developer</motion.h2>
        <motion.p className="hero-tagline" variants={fadeUp}>
          I am a web developer specializing in WordPress and Elementor. I focus
          on creating clean, responsive, and user-friendly websites that deliver
          real results.
        </motion.p>
        <motion.p className="hero-tagline hero-tagline-secondary" variants={fadeUp}>
          I help clients fix website issues, improve design, and build modern
          landing pages. My goal is to provide fast, reliable, and practical
          solutions that help businesses grow online.
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
