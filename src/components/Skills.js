import { useState } from 'react';
import { skills } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '../animations';

function Skills() {
  const skillDetails = {
    WordPress:
      'I have hands-on experience building and maintaining WordPress websites for business and portfolio use, with a focus on clean structure and performance.',
    Elementor:
      'I have practical experience with Elementor for custom page building, layout improvements, and resolving responsiveness issues across devices.',
    HTML:
      'I have strong HTML experience creating semantic, accessible page structures that support SEO and long-term maintainability.',
    CSS:
      'I have experience writing modern CSS for responsive layouts, custom UI styling, and polished visual effects that improve user experience.',
    JavaScript:
      'I have working JavaScript experience to add interactive behavior, improve front-end functionality, and build smoother user flows.',
    'Responsive Design':
      'I have solid responsive design experience and regularly optimize websites so they look and perform well on desktop, tablet, and mobile screens.',
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
