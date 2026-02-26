import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  // Image Carousel Component
  const ImageCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className="image-carousel">
        <div className="carousel-images">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              className={`carousel-image ${idx === currentIndex ? "active" : ""}`}
              loading="lazy"
            />
          ))}
        </div>
        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const projects = [
    {
      title: "AI-Powered Lesson Planning & Assessment System",
      description:
        "Developing a comprehensive web application for Malaysian teachers that combines AI-powered assessment generation, OCR-based auto-grading, offline support, and performance analytics. The system aligns with Malaysia's KSSR/KSSM curriculum and Bloom's Taxonomy, featuring automated question generation, handwritten answer recognition, student performance dashboards, and a collaborative lesson-sharing hub. Designed to reduce teacher workload and support education in both urban and rural areas.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI GPT-4",
        "Google Vision API",
        "Gemini API",
        "OCR",
        "Ant Design",
        "Firebase Auth",
      ],
      demo: "https://ai-lesson-planning.vercel.app/",
      featured: true,
    },
    {
      title: "WORQ Company Website",
      description:
        "Developed a full-stack company website from scratch with responsive design and seamless backend integration. Implemented modern web technologies to create an efficient and user-friendly platform.",
      technologies: [
        "WordPress",
        "Full-Stack Development",
        "Webhooks",
        "Automation",
      ],
      demo: "https://worq.space/",
      image: "/WORQ Website.webp",
      featured: true,
    },
    {
      title: "SmartGrow - IoT Plant Automation System",
      description:
        "Engineered a comprehensive IoT-based plant care automation system that revolutionizes agricultural monitoring. Developed a cross-platform mobile application using React Native featuring real-time environmental monitoring (moisture, light, temperature, humidity), intelligent alert notifications, zone-based plant management, and remote actuator control. The system enables automated plant care with threshold-based triggers, critical status indicators, and detailed plant profiles, significantly reducing manual intervention while optimizing plant health and growth conditions.",
      technologies: [
        "React Native",
        "IoT",
        "Real-Time Monitoring",
        "Sensor Integration",
        "Mobile Development",
        "Automation",
      ],
      github: "https://github.com/SmartGrow-Iot",
      images: [
        "/spq/spq2.webp",
        "/spq/spq1.webp",
        "/spq/spq.webp",
        "/spq/spq3.webp",
        "/spq/spq4.webp",
      ],
      featured: true,
    },
    {
      title: "Harmoni Malaysia - Student Organization Website",
      description:
        "Contributed to the development and maintenance of the official Harmoni Malaysia website, a national student organization under Ikram focused on holistic student development. The platform serves 1,400+ student members across 25 branches nationwide, featuring a membership registration portal, event management, branch locator, and activity showcase. Involved in full-stack development using the MERN stack, ensuring the site remains performant, up-to-date, and accessible to students across Malaysia.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "MERN Stack",
        "Web Maintenance",
      ],
      demo: "https://www.harmonimalaysia.org.my/",
      featured: true,
    },
    {
      title: "Shopizer - Component-Based E-Commerce Platform",
      description:
        "Architected a modular e-commerce platform leveraging advanced component-based software engineering principles with Spring Boot and OSGi framework. Implemented a highly scalable microservices architecture with dynamic module loading, service-oriented design, and loose coupling through OSGi bundles. The system demonstrates enterprise-level software architecture with hot-swappable components, dependency injection, and seamless integration of business logic modules, enabling flexible feature deployment and independent component lifecycle management without system downtime.",
      technologies: [
        "Java",
        "Spring Boot",
        "OSGi",
        "Component-Based Architecture",
        "Microservices",
        "Enterprise Development",
      ],
      demo: "https://csbe-shopizer.vercel.app/",
      featured: true,
    },
    {
      title: "PortManager",
      description:
        "A sleek Windows desktop app for developers to monitor and kill processes running on common development ports that built with C# and WinForms.",
      technologies: ["C++", "AspNet Core"],
      github: "https://github.com/RareZyn/PortManager",
      images: ["PortKiller.webp", "icon_256x256.ico"],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Projects
        </h2>

        <Row className="projects-grid">
          {projects.map((project, index) => (
            <Col
              lg={6}
              md={6}
              className="mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card
                className={`project-card ${project.featured ? "featured-project" : ""}`}
              >
                {(project.demo || project.image || project.images) && (
                  <div className="project-preview">
                    <div className="project-preview-browser">
                      <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="browser-url">
                        {project.demo || project.title}
                      </div>
                    </div>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-preview-link"
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="project-preview-iframe"
                            loading="lazy"
                          />
                        ) : project.images ? (
                          <ImageCarousel
                            images={project.images}
                            title={project.title}
                          />
                        ) : (
                          <iframe
                            src={project.demo}
                            title={`${project.title} preview`}
                            className="project-preview-iframe"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin"
                          />
                        )}
                        <div className="project-preview-overlay">
                          <FaExternalLinkAlt /> Visit Website
                        </div>
                      </a>
                    ) : (
                      <div className="project-preview-link no-link">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="project-preview-iframe"
                            loading="lazy"
                          />
                        ) : project.images ? (
                          <ImageCarousel
                            images={project.images}
                            title={project.title}
                          />
                        ) : null}
                      </div>
                    )}
                  </div>
                )}
                <Card.Body>
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.featured && (
                      <Badge bg="success" className="featured-badge">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <p
                    className={`project-description ${expandedIndex === index ? "expanded" : ""}`}
                    onClick={() => toggleDescription(index)}
                  >
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="more-projects-note" data-aos="fade-up">
          <p>
            More projects coming soon! Check my{" "}
            <a
              href="https://github.com/RareZyn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            for additional work.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
