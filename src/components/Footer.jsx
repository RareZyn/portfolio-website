import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-social">
            <a
              href="https://github.com/RareZyn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/razin-nazarudin-b05890214"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:razinnazarudin@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="footer-text">
            <p>
              Designed & Built with <FaHeart className="heart-icon" /> by Razin Bin Nazarudin
            </p>
            <p className="copyright">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="scroll-to-top">
            <a href="#home" aria-label="Scroll to top">
              <span>↑</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
