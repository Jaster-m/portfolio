import { useState } from 'react';
import { skills } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '../animations';

function Skills() {
  const skillDetails = {
    WordPress:
      'I build and customize WordPress websites with a focus on performance, flexibility, and easy content management for long-term business use.',
    Joomla:
      'I develop and tailor Joomla websites with structured content systems and scalable configurations that support reliable website management.',
    Shopify:
      'I create and optimize Shopify stores, handling product setup, storefront structure, and conversion-focused shopping experiences.',
    BigCommerce:
      'I work with BigCommerce to build and improve online stores with strong product workflows, payment integrations, and better user journeys.',
    HTML:
      'I write semantic and accessible HTML structures that support SEO, strong UX, and clean long-term maintainability.',
    CSS:
      'I build modern responsive layouts and polished UI systems with maintainable CSS architecture across devices.',
    JavaScript:
      'I use JavaScript to build interactive interfaces, improve front-end logic, and deliver smooth, user-focused digital experiences.',
    React:
      'I build component-driven React applications with reusable patterns that support scalability, performance, and clean code organization.',
    'Next.js':
      'I use Next.js to build fast and SEO-friendly web applications with modern routing, optimized rendering, and production-ready architecture.',
    'Static Site Architecture':
      'I create lightweight static websites focused on speed, SEO performance, and maintainable content delivery.',
    'No-Code Builders':
      'I leverage no-code and visual builders to deliver professional websites rapidly while preserving design quality and business functionality.',
    'Responsive Design':
      'I design mobile-first interfaces that stay consistent and high-performing across desktop, tablet, and mobile devices.',
  };

  const [activeSkill, setActiveSkill] = useState(skills[0]);

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Skills
        </motion.h2>
        <motion.ul
          className="skills-list"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill) => (
            <motion.li key={skill} variants={fadeUp}>
              <button
                type="button"
                className={`skill-chip${activeSkill === skill ? ' is-active' : ''}`}
                onClick={() => setActiveSkill(skill)}
              >
                {skill}
              </button>
            </motion.li>
          ))}
        </motion.ul>
        <motion.article
          className="card skill-detail-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          key={activeSkill}
        >
          <h3>{activeSkill}</h3>
          <p>{skillDetails[activeSkill]}</p>
        </motion.article>
      </div>
    </section>
  );
}

export default Skills;
