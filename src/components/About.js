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
          I design and develop high-performance, user-focused websites that
          combine strong visual identity with robust technical architecture. My
          approach is rooted in solving real user problems while delivering
          scalable, conversion-driven digital experiences.
        </p>
        <div className="about-details">
          <h3>1. Full-Stack Execution</h3>
          <p className="section-text">
            I work across both design and development layers, ensuring smooth
            integration between front-end interfaces and back-end functionality
            for reliable and scalable outcomes.
          </p>
          <h3>2. Multi-Platform Web Solutions</h3>
          <p className="section-text">
            From dynamic web applications and e-commerce platforms to
            lightweight static sites, I build with a focus on speed, usability,
            SEO, and long-term maintainability.
          </p>
          <h3>3. What I Deliver</h3>
          <p className="section-text">
            Responsive mobile-first designs, performance-optimized websites,
            clean maintainable code, SEO-friendly structure, and user-centric
            interfaces that support real business goals.
          </p>
        </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
