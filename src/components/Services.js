import { services } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '../animations';

function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Services
        </motion.h2>
        <motion.div
          className="cards-grid"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.article
              className="card service-card"
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
