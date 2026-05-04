import { motion } from 'framer-motion';
import { fadeUp } from '../animations';

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Contact
        </motion.h2>
        <div className="contact-layout">
          <div className="contact-details">
            <p className="contact-email">
              <span className="contact-icon" aria-hidden="true">
                ✉
              </span>
              <span className="contact-label">Email:</span>
              <a href="mailto:mahmoodtalha356@gmail.com">
                mahmoodtalha356@gmail.com
              </a>
            </p>
            <p className="contact-email">
              <span className="contact-icon" aria-hidden="true">
                📍
              </span>
              <span className="contact-label">Location:</span>
              <span>Faisalabad, Pakistan</span>
            </p>
            <p className="contact-email">
              <span className="contact-icon" aria-hidden="true">
                ☎
              </span>
              <span className="contact-label">Number:</span>
              <a href="tel:+923257669494">+92 325 766 9494</a>
            </p>
          </div>
          <motion.form
            className="contact-form"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="input-group">
              <input id="name" name="name" type="text" placeholder=" " />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-group">
              <input id="email" name="email" type="email" placeholder=" " />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-group">
              <textarea id="message" name="message" rows="5" placeholder=" " />
              <label htmlFor="message">Message</label>
            </div>

            <motion.button
              className="btn btn-primary glow-btn"
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
