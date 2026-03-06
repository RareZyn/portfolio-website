import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
            <h2 className="hero-subtitle">
              <ReactTyped
                strings={[" Kahfi A Day Keep the Dajjal Away"]}
                typeSpeed={30}
                backSpeed={30}
                loop
                className="typed-text"
              />
            </h2>
            <div className="hero-buttons">
              <Button
                variant="outline-primary"
                href="https://quran.com/en/al-kahf"
                target="_blank"
                className="resume-button-hero"
              >
                Read Kahfi
              </Button>
            </div>
      </Container>
    </section>
  );
}

export default Hero;
