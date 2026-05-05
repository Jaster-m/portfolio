import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '../animations';

function Projects() {
  const projectDetails = {
    'Full-Stack SaaS Marketing Platform': {
      overview:
        'A conversion-driven full-stack marketing platform concept built to connect polished visual design with scalable application architecture.',
      highlights: [
        'Designed a complete user journey from product discovery to qualified lead capture.',
        'Structured reusable front-end sections for maintainable growth-focused campaigns.',
        'Aligned technical structure and interface design for speed and usability.',
      ],
      leftImageLabel: 'Desktop View',
      rightImageLabel: 'Mobile View',
    },
    'Shopify Store Optimization': {
      overview:
        'An e-commerce optimization engagement focused on improving storefront performance and reducing friction across the shopping experience.',
      highlights: [
        'Refined product listing and navigation flow to increase discoverability.',
        'Improved checkout usability for a smoother conversion path.',
        'Optimized store performance and layout behavior across devices.',
      ],
      leftImageLabel: 'Storefront View',
      rightImageLabel: 'Checkout Flow',
    },
    'Next.js Business Website': {
      overview:
        'A modern business website built with Next.js to deliver fast load times, SEO strength, and a clear content architecture.',
      highlights: [
        'Implemented responsive layout patterns for consistent cross-device quality.',
        'Improved information hierarchy to make services and value clear.',
        'Built for maintainability with reusable component-driven structure.',
      ],
      leftImageLabel: 'Landing Structure',
      rightImageLabel: 'Responsive Sections',
    },
    'Static Site for Service Brand': {
      overview:
        'A lightweight static website project centered on speed, accessibility, and SEO-friendly architecture for a service brand.',
      highlights: [
        'Reduced complexity with a fast static-first delivery model.',
        'Improved core page performance for quicker content access.',
        'Designed conversion-oriented flows with clear calls to action.',
      ],
      leftImageLabel: 'Service Pages',
      rightImageLabel: 'Mobile Experience',
    },
  };

  const [activeProject, setActiveProject] = useState(null);

  const activeProjectDetails = activeProject
    ? projectDetails[activeProject.title]
    : null;

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
            <p>{activeProjectDetails?.overview ?? activeProject.description}</p>
            <div className="project-modal-media-grid">
              <div className="project-modal-image-block">
                <div className="project-modal-image project-modal-image-left" />
                <p>{activeProjectDetails?.leftImageLabel ?? 'Project Preview'}</p>
              </div>
              <div className="project-modal-image-block">
                <div className="project-modal-image project-modal-image-right" />
                <p>{activeProjectDetails?.rightImageLabel ?? 'Responsive View'}</p>
              </div>
            </div>
            <div className="project-modal-details">
              <h4>Project Details</h4>
              <ul>
                {(activeProjectDetails?.highlights ?? []).map((item) => (
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
