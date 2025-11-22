import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="contact-content" data-aos="fade-up">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            I'm currently seeking internship and full-time opportunities starting in February 2026.
            Whether you have a question, want to discuss a project, or just want to say hi,
            my inbox is always open. I'll do my best to get back to you!
          </p>

          <Row className="contact-methods">
            <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <a
                href="mailto:razinnazarudin@gmail.com"
                className="contact-card"
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <p>razinnazarudin@gmail.com</p>
              </a>
            </Col>

            <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="150">
              <a
                href="tel:+60143668913"
                className="contact-card"
              >
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <h3>Phone</h3>
                <p>+60 14-366 8913</p>
              </a>
            </Col>

            <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <a
                href="https://www.linkedin.com/in/razin-nazarudin-b05890214"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </a>
            </Col>

            <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="250">
              <a
                href="https://github.com/RareZyn"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <h3>GitHub</h3>
                <p>View my code</p>
              </a>
            </Col>
          </Row>

          <div className="cta-wrapper" data-aos="fade-up" data-aos-delay="300">
            <Button
              variant="primary"
              href="mailto:razinnazarudin@gmail.com"
              className="cta-email-button"
            >
              Say Hello
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
