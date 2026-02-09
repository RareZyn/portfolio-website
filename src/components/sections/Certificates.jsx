import { Container, Row, Col, Card } from "react-bootstrap";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import "./Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "Firebase Advanced - Real Time Chat App in Android Studio",
      platform: "Udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f5b1146f-896f-40ec-8951-280f7cdad6f2.pdf",
    },
    {
      title: "Firebase Advanced - Real Time Chat App in Android Studio",
      platform: "Udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-74e2253c-7c6a-4424-9a05-8e379c45fb63.pdf",
    },
    {
      title: "Responsive Web Design",
      platform: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/rarezyn/responsive-web-design",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      platform: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/rarezyn/javascript-algorithms-and-data-structures",
    },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Certificates
        </h2>

        <Row className="certificates-grid">
          {certificates.map((cert, index) => (
            <Col
              lg={6}
              md={6}
              sm={12}
              className="mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="certificate-card">
                <Card.Body>
                  <div className="certificate-icon">
                    <FaCertificate />
                  </div>
                  <div className="certificate-info">
                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-platform">{cert.platform}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certificates;
