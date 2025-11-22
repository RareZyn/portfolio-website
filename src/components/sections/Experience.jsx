import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaRobot, FaCode, FaCloud } from 'react-icons/fa';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'WORQ',
      period: 'July 2024 - January 2025',
      icon: <FaBriefcase />,
      responsibilities: [
        'Developed a full-stack company website from scratch, ensuring responsive design and smooth backend integration',
        'Maintained and optimized the company\'s existing WordPress platform for performance and security',
        'Implemented automation using webhooks to streamline internal workflows and reduce manual tasks'
      ]
    },
    {
      title: 'ICT INOV',
      company: 'University Event',
      period: 'October 2023',
      icon: <FaRobot />,
      responsibilities: [
        'Showcased a 6-degree-of-freedom (6DOF) robotic arm to university students during Women Engineering Day',
        'Explained features, applications, and functionality in the field of robotics'
      ]
    },
    {
      title: 'Programming League Nation',
      company: 'Coding Competition',
      period: 'May 2023',
      icon: <FaCode />,
      responsibilities: [
        'Participated in a data structure coding championship',
        'Successfully advanced to the final stage, demonstrating competence in algorithmic problem-solving'
      ]
    },
    {
      title: 'Google Cloud Platform For Everyone',
      company: 'GCPE Workshop',
      period: 'April 2023',
      icon: <FaCloud />,
      responsibilities: [
        'Completed various exercises and a small project on Google Cloud Platform',
        'Set up a gaming server and developed a website using GCP infrastructure'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {exp.icon}
                </div>
                <div className="timeline-card">
                  <span className="timeline-period">{exp.period}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="leadership-section" data-aos="fade-up">
          <h3 className="leadership-title">Leadership & Extracurriculars</h3>
          <Row className="leadership-cards">
            <Col md={4} className="mb-3">
              <div className="leadership-card">
                <h4>Young Officer</h4>
                <p>Reserve Officer Training Unit (ROTU)</p>
                <span className="leadership-status">Current</span>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="leadership-card">
                <h4>Head of Department</h4>
                <p>Department of Intellect - Belia Harmoni</p>
                <span className="leadership-status">Current</span>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="leadership-card">
                <h4>Active Member</h4>
                <p>Persatuan Komputer UM (PEKOM)</p>
                <span className="leadership-status">Current</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
