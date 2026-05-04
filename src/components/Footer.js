import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="footer-row">
          <p>&copy; {currentYear} Talha. All rights reserved.</p>
          <div className="social-links">
            <a href="#0" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="#0" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#0" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
