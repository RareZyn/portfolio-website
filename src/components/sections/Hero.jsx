import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={12} className="hero-content" data-aos="fade-up">
            <p className="intro-text">Hi, my name is</p>
            <h1 className="hero-title">Razin Bin Nazarudin</h1>
            <h2 className="hero-subtitle">
              I'm a{" "}
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Web Developer",
                  "Full-Stack Developer",
                  "Mobile App Developer",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
                className="typed-text"
              />
            </h2>
            <p className="hero-description">
              Fresh graduate in Software Engineering from the University of
              Malaya, passionate about building exceptional web and mobile
              applications. Currently seeking opportunities to gain valuable
              industry experience and contribute to innovative projects. I will
              be starting my career in February 2026.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" href="#contact" className="cta-button">
                Get In Touch
              </Button>
              <Button
                variant="outline-primary"
                href="/RESUME_RAZIN_SOFTWARE-ENGINEER.pdf"
                target="_blank"
                className="resume-button-hero"
              >
                View Resume
              </Button>
            </div>
            <div className="social-links">
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
              <a href="mailto:razinnazarudin@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </Col>
          <Col
            lg={5}
            md={12}
            className="hero-image-col"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="profile-image-wrapper">
              <div className="profile-image">
                {/* Placeholder for profile image - replace with actual image */}
                <div className="image-placeholder">
                  <img src="/Razin.webp" alt="Razin Bin Nazarudin" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
