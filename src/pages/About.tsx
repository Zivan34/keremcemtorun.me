import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/About.css";

export default function About() {
  return (
    <Container className="about-container py-5">
      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <h1 className="display-5 fw-bold mb-4">About Me</h1>
          <p className="fs-5 text-muted mb-4">
            Dedicated enterprise software developer with a passion for building
            secure, scalable solutions that solve real business problems.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <h2 className="h3 fw-bold mb-3">Professional Journey</h2>
          <div className="timeline">
            <div className="timeline-item mb-4">
              <h5 className="fw-bold">
                Enterprise Software Development (2015 - Present)
              </h5>
              <p className="text-muted mb-2">10+ years of experience</p>
              <p>
                For over a decade, I've been developing enterprise-level
                solutions that power mission-critical business operations. My
                expertise lies in designing and building secure B2B and B2C
                applications that meet the most stringent industry standards.
              </p>
            </div>

            <div className="timeline-item mb-4">
              <h5 className="fw-bold">Insurance Industry (2017 - Present)</h5>
              <p className="text-muted mb-2">
                ~8 years of specialized experience
              </p>
              <p>
                Transitioned to the insurance sector where I've deepened my
                expertise in regulatory compliance, data security, and building
                systems that handle sensitive financial and personal information
                with the utmost care.
              </p>
            </div>

            <div className="timeline-item mb-4">
              <h5 className="fw-bold">Healthcare Industry (2015 - 2017)</h5>
              <p className="text-muted mb-2">
                ~3 years of foundational experience
              </p>
              <p>
                Began my enterprise career in healthcare, where I learned the
                importance of security, reliability, and compliance in systems
                that directly impact people's lives. This experience shaped my
                approach to software development.
              </p>
            </div>

            <div className="timeline-item">
              <h5 className="fw-bold">Computer Science Bachelor's Degree</h5>
              <p>
                Foundation in computer science principles, algorithms, and
                software engineering best practices.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <h2 className="h3 fw-bold mb-3">Core Expertise</h2>
          <div className="expertise-grid">
            <Card bg="primary" text="white" className="expertise-item">
              <Card.Body>
                <Card.Title className="fw-bold">
                  B2B & B2C Applications
                </Card.Title>
                <Card.Text>
                  Specialized in developing applications that prioritize
                  security and handle enterprise-level requirements.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="primary" text="white" className="expertise-item">
              <Card.Body>
                <Card.Title className="fw-bold">
                  Enterprise Architecture
                </Card.Title>
                <Card.Text>
                  Design and implementation of scalable systems that grow with
                  your business needs.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="primary" text="white" className="expertise-item">
              <Card.Body>
                <Card.Title className="fw-bold">
                  Regulatory Compliance
                </Card.Title>
                <Card.Text>
                  Deep knowledge of industry standards and compliance
                  requirements in healthcare and finance.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="primary" text="white" className="expertise-item">
              <Card.Body>
                <Card.Title className="fw-bold">Data Security</Card.Title>
                <Card.Text>
                  Protection of sensitive information through industry best
                  practices and proven security protocols.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <h2 className="h3 fw-bold mb-3">Selected Work & Highlights</h2>
          <ul className="fs-5 text-muted" style={{ lineHeight: "1.9" }}>
            <li>
              Built a custom CMS from the ground up, tailored to a specialized
              vertical and integrated with enterprise systems.
            </li>
            <li>
              Delivered customer-experience portals and customer-centric web
              apps.
            </li>
            <li>
              Led AI integrations and implemented AI-driven automations for
              task-specific workflows to improve operational efficiency.
            </li>
            <li>
              Designed and implemented robust data import/export and ETL tools.
            </li>
            <li>
              Implemented countless API integrations and event-driven
              architectures for real-time systems and third-party partners.
            </li>
            <li>
              Developed billing tools for B2B partners and location-based
              services.
            </li>
            <li>
              Performed legacy system upgrades and cloud migrations to modern
              stacks.
            </li>
            <li>
              Passed numerous penetration tests and improved security &
              accessibility scores.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <h2 className="h3 fw-bold mb-3">Tech Stack</h2>
          <p className="fs-5 text-muted">
            Primary: C#/.NET, MSSQL, Blazor, React. Also experienced with
            Node.js, Java, and Python. Comfortable designing cloud-native
            solutions and implementing secure enterprise level architectures.
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="mx-auto">
          <h2 className="h3 fw-bold mb-3">Why Work With Me</h2>
          <ul className="fs-5" style={{ lineHeight: "2" }}>
            <li>
              <strong>Proven Track Record:</strong> 10+ years of delivering
              production-grade enterprise solutions
            </li>
            <li>
              <strong>Security First:</strong> Every project is built with
              security and compliance at the core
            </li>
            <li>
              <strong>Industry Experience:</strong> Deep understanding of
              healthcare and insurance business requirements
            </li>
            <li>
              <strong>Scalability Focused:</strong> Solutions designed to grow
              with your business
            </li>
            <li>
              <strong>Reliable & Responsive:</strong> Committed to delivering
              quality work on schedule
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
