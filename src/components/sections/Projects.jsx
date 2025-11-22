import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'AI-Powered Lesson Planning & Assessment System',
      description: 'Developing a comprehensive web application for Malaysian teachers that combines AI-powered assessment generation, OCR-based auto-grading, offline support, and performance analytics. The system aligns with Malaysia\'s KSSR/KSSM curriculum and Bloom\'s Taxonomy, featuring automated question generation, handwritten answer recognition, student performance dashboards, and a collaborative lesson-sharing hub. Designed to reduce teacher workload and support education in both urban and rural areas.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI GPT-4', 'Google Vision API', 'Gemini API', 'OCR', 'Ant Design', 'Firebase Auth'],
      github: 'https://github.com/RareZyn',
      featured: true
    },
    {
      title: 'WORQ Company Website',
      description: 'Developed a full-stack company website from scratch with responsive design and seamless backend integration. Implemented modern web technologies to create an efficient and user-friendly platform.',
      technologies: ['WordPress', 'Full-Stack Development', 'Webhooks', 'Automation'],
      featured: true
    },
    {
      title: 'Google Cloud Platform Project',
      description: 'Built a gaming server and website on Google Cloud Platform. Gained hands-on experience with cloud infrastructure, server deployment, and web hosting on GCP.',
      technologies: ['Google Cloud Platform', 'Server Setup', 'Web Development'],
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Projects</h2>

        <Row className="projects-grid">
          {projects.map((project, index) => (
            <Col
              lg={project.featured ? 12 : 6}
              md={12}
              className="mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className={`project-card ${project.featured ? 'featured-project' : ''}`}>
                <Card.Body>
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.featured && (
                      <Badge bg="success" className="featured-badge">Featured</Badge>
                    )}
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
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
          <p>More projects coming soon! Check my <a href="https://github.com/RareZyn" target="_blank" rel="noopener noreferrer">GitHub</a> for additional work.</p>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
