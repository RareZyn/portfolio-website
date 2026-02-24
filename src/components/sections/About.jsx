import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <Container>

        <h3 className="education-title" data-aos="fade-up" data-aos-delay="200">
          Education
        </h3>

        <Row className="education-cards">
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="250">
            <Card className="education-card">
              <Card.Body>
                <div className="education-icon">
                  <FaUniversity />
                </div>
                <Card.Title>University of Malaya</Card.Title>
                <Card.Subtitle className="mb-2">
                  Bachelor of Computer Science
                </Card.Subtitle>
                <Card.Text className="degree-details">
                  Software Engineering
                </Card.Text>
                <Card.Text className="education-year">2023 - 2026</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <Card className="education-card">
              <Card.Body>
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <Card.Title>University of Malaya</Card.Title>
                <Card.Subtitle className="mb-2">
                  Foundation in Physical Sciences
                </Card.Subtitle>
                <Card.Text className="degree-details">
                  CGPA: 3.75
                </Card.Text>
                <Card.Text className="education-year">2021 - 2022</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="350">
            <Card className="education-card">
              <Card.Body>
                <div className="education-icon">
                  <FaSchool />
                </div>
                <Card.Title>Sekolah Agama Menengah Bestari</Card.Title>
                <Card.Subtitle className="mb-2">
                  Sijil Pelajaran Malaysia (SPM)
                </Card.Subtitle>
                <Card.Text className="degree-details">
                  4A+, 4A, 2A
                </Card.Text>
                <Card.Text className="education-year">2020</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
