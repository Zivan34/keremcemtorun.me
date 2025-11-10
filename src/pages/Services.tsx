import { Container, Row, Col, Card } from "react-bootstrap";

export default function Services() {
  const services = [
    {
      title: "Custom Application Development",
      description:
        "Custom web applications built with security, performance, and UX in mind — for B2B, consumer, and internal tools.",
    },
    {
      title: "AI Integrations & Automation",
      description:
        "Integrate AI services and build automation to streamline workflows, augment decision-making, and reduce manual toil.",
    },
    {
      title: "APIs & Event-driven Systems",
      description:
        "Design and implement robust synchronous and asynchronous integrations for partners, devices, and internal services.",
    },
    {
      title: "Cloud Architecture & Migration",
      description:
        "Design cloud-native solutions, optimize costs, and migrate systems to modern cloud platforms with minimal disruption.",
    },
    {
      title: "Legacy Modernization",
      description:
        "Modernize, refactor, or replatform legacy systems to improve reliability, observability, and developer velocity.",
    },
    {
      title: "Enterprise & Startup Architecture",
      description:
        "Architecture and system design tailored to the scale you need today and that can evolve as your product and users grow.",
    },
    {
      title: "Security Hardening & Penetration Test Remediation",
      description:
        "Remediation guidance and engineering support to address findings and improve overall security posture.",
    },
  ];

  return (
    <Container className="services-container py-5">
      <Row className="mb-5">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-5 fw-bold mb-4">Services &amp; Solutions</h1>
          <p className="fs-5 text-muted">
            Specialized software services for organizations of all sizes —
            startups, SMBs, and enterprises — focused on secure, scalable, and
            user-centered solutions.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {services.map((service, index) => (
          <Col lg={6} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
