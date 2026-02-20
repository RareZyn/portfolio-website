import { Container, Row, Col } from "react-bootstrap";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaGithub,
  FaDocker,
  FaFigma,
  FaRaspberryPi,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiCplusplus,
  SiArduino,
  SiCanva,
  SiCisco,
  SiSpringboot,
  SiEclipseide,
  SiPostman,
  SiN8N,
} from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "C", icon: <SiCplusplus /> },
        { name: "HTML/CSS", icon: <FaJs /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "Springboot", icon: <SiSpringboot /> },
        { name: "OSGI", icon: <SiEclipseide /> },
      ],
    },
    {
      title: "Databases & Backend",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Supabase", icon: <RiSupabaseLine /> },
        { name: "Postgresql ", icon: <BiLogoPostgresql /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Arduino", icon: <SiArduino /> },
        { name: "Raspberry Pi", icon: <FaRaspberryPi /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Canva", icon: <SiCanva /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "N8N", icon: <SiN8N /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Skills & Technologies
        </h2>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <h3 className="category-title">{category.title}</h3>
              <Row className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <Col
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    key={skillIndex}
                    className="skill-item-col"
                  >
                    <div className="skill-item">
                      <div className="skill-icon">{skill.icon}</div>
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>

        <div className="languages-section" data-aos="fade-up">
          <h3 className="languages-title">Languages</h3>
          <div className="languages-list">
            <div className="language-item">
              <h4>Malay</h4>
              <p>Fluent</p>
            </div>
            <div className="language-item">
              <h4>English</h4>
              <p>Fluent</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
