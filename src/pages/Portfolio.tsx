import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const projects = [
  {
    title: "Customized CMS",
    description:
      "Built a tailored content management system for a specific vertical with rich integration points.",
    tech: ["C# .NET", "MSSQL", "Blazor", "Cloud"],
    highlights: ["Scalable, secure, integrated with enterprise systems"],
  },
  {
    title: "AI Integrations & Automation",
    description:
      "Integrated AI and built task-specific AI automations to streamline workflows and decision-making.",
    tech: ["AI", "APIs", "Automation"],
    highlights: ["Early focus — highly relevant for modern products"],
  },
  {
    title: "Customer Experience Portals",
    description:
      "Built multiple tools to manage customer experience on products — handling complaints, regards, feedback and requests.",
    tech: ["C# .NET", "Blazor", "MSSQL", "Cloud"],
    highlights: [
      "Managed complaints & regards; improved engagement and response metrics",
    ],
  },
  {
    title: "Data Import / Export & ETL Tools",
    description:
      "Robust data pipelines and tools for importing, transforming, and exporting large datasets.",
    tech: ["MSSQL", "Cloud"],
    highlights: ["Reliable, auditable data flows for enterprise use"],
  },
  {
    title: "API & Event-driven Integrations",
    description:
      "Numerous synchronous and asynchronous integrations across third-party systems and partners.",
    tech: ["APIs", "Event-driven", "Cloud"],
    highlights: ["Real-time processing and reliable delivery"],
  },
  {
    title: "Billing Tools & Location-based Services",
    description:
      "B2B billing systems and geolocation-enabled features built for partner ecosystems.",
    tech: ["C# .NET", "React", "APIs", "Location Services"],
    highlights: ["B2B-ready billing workflows and partner integrations"],
  },
  {
    title: "Legacy Modernization & Cloud Migration",
    description:
      "Upgraded legacy systems to modern stacks and moved critical workloads to cloud platforms.",
    tech: ["Cloud", "DevOps", "Modernization"],
    highlights: ["Improved performance, maintainability and security"],
  },
  {
    title: "Security & Penetration Testing",
    description:
      "Implemented security best practices, improved security scores and passed numerous pentests.",
    tech: ["Security", "Compliance", "Pentest"],
    highlights: ["Demonstrated resilience under rigorous testing"],
  },
  {
    title: "Auth0 Integrations",
    description:
      "Implemented Auth0 authentication across multiple products: SSO, RBAC, token lifecycle management, and secure session handling.",
    tech: ["Auth0", "OpenID Connect", "OAuth2", "React"],
    highlights: ["SSO & RBAC", "Secure token handling", "Improved login UX"],
  },
];

export default function Portfolio() {
  return (
    <Container className="portfolio-container py-5">
      <Row className="mb-4">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-5 fw-bold mb-3">My Work</h1>
          <p className="fs-5 text-muted mb-4">
            A selection of projects and systems I've built across AI, cloud,
            data, integrations, and enterprise applications.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {projects.map((p, idx) => (
          <Col lg={6} key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{p.title}</Card.Title>
                <Card.Text className="text-muted">{p.description}</Card.Text>

                <div className="mt-3 mb-2">
                  {p.tech.map((t) => (
                    <Badge bg="secondary" className="me-2" key={t}>
                      {t}
                    </Badge>
                  ))}
                </div>

                <ul className="mt-3 mb-0">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="text-muted">
                      {h}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
