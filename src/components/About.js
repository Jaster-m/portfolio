import { motion } from 'framer-motion';
import { fadeLeft } from '../animations';

function About() {
  return (
    <section className="section" id="about">
      <motion.div
        className="container about-grid"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="about-avatar-wrap">
          <div className="about-avatar">
            <span className="avatar-short">T</span>
            <span className="avatar-full">Talha</span>
          </div>
        </div>
        <div>
        <h2 className="section-title">About</h2>
        <p className="section-text">
          I am a web developer specializing in WordPress and Elementor. I focus
          on creating clean, responsive, and user-friendly websites that deliver
          real results.
        </p>
        <div className="about-details">
          <h3>1. WordPress Website Development</h3>
          <p className="section-text">
            I create clean, responsive, and professional WordPress websites
            tailored to your needs. From landing pages to full business sites, I
            focus on performance, usability, and modern design.
          </p>
          <h3>2. Elementor Fixing &amp; Customization</h3>
          <p className="section-text">
            I fix layout issues, design bugs, and responsiveness problems in
            Elementor. Whether your website is broken or needs improvements, I
            provide fast and effective solutions.
          </p>
          <h3>3. Landing Page Design</h3>
          <p className="section-text">
            I design high-converting landing pages that are visually appealing
            and optimized for user experience, helping you turn visitors into
            customers.
          </p>
        </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
