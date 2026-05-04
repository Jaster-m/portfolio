import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '../animations';

function Projects() {
  const projectDetails = {
    'SaaS Business Landing Page': {
      overview:
        'A conversion-focused launch page built with clean visual hierarchy and clear user flow from hero section to call-to-action.',
      highlights: [
        'Built sections for features, trust proof, pricing, and final conversion CTA.',
        'Optimized content spacing and typography for better readability.',
        'Designed for strong first impression and clear business messaging.',
      ],
      leftImageLabel: 'Desktop View',
      rightImageLabel: 'Mobile View',
    },
    'Elementor Website Speed Fix': {
      overview:
        'A practical optimization and cleanup project where layout issues were fixed and page speed was improved for better UX.',
      highlights: [
        'Resolved Elementor spacing and alignment issues on multiple sections.',
        'Improved responsiveness for tablet and mobile screens.',
        'Optimized structure to reduce clutter and improve performance.',
      ],
      leftImageLabel: 'Before Layout',
      rightImageLabel: 'After Optimization',
    },
    'Agency Portfolio Website': {
      overview:
        'A modern agency portfolio concept focused on service clarity, case study presentation, and stronger lead generation.',
      highlights: [
        'Organized project showcase cards with cleaner navigation flow.',
        'Improved section hierarchy to highlight services and testimonials.',
        'Added conversion-focused contact and inquiry blocks.',
      ],
      leftImageLabel: 'Portfolio Sections',
      rightImageLabel: 'Case Study Layout',
    },
    'Local Business Website Revamp': {
      overview:
        'A complete visual refresh for a local business site to improve trust, usability, and mobile conversion performance.',
      highlights: [
        'Redesigned outdated sections with a clean modern style.',
        'Improved mobile-first layouts for service and contact pages.',
        'Strengthened calls-to-action to support lead generation.',
      ],
      leftImageLabel: 'Old Design',
      rightImageLabel: 'New Revamp',
    },
  };

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="cards-grid projects-grid"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article
              className="card project-card"
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setActiveProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveProject(project);
                }
              }}
            >
              <div className="project-image-placeholder">
                <span className="project-type">{project.type}</span>
                <div className="project-overlay">{project.title}</div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
      {activeProject && (
        <motion.div
          className="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveProject(null)}
        >
          <motion.article
            className="card project-modal-card"
            initial={{ opacity: 0, y: 55, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
            <span className="project-modal-badge">{activeProject.type}</span>
            <h3>{activeProject.title}</h3>
            <p>{projectDetails[activeProject.title].overview}</p>
            <div className="project-modal-media-grid">
              <div className="project-modal-image-block">
                <div className="project-modal-image project-modal-image-left" />
                <p>{projectDetails[activeProject.title].leftImageLabel}</p>
              </div>
              <div className="project-modal-image-block">
                <div className="project-modal-image project-modal-image-right" />
                <p>{projectDetails[activeProject.title].rightImageLabel}</p>
              </div>
            </div>
            <div className="project-modal-details">
              <h4>Project Details</h4>
              <ul>
                {projectDetails[activeProject.title].highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </motion.div>
      )}
    </section>
  );
}

export default Projects;
