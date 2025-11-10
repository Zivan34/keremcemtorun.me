import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExpertiseRotator from "../components/ExpertiseRotator";
import "../styles/Home.css";

export default function Home() {
  return (
    <Container className="home-container">
      <Row className="align-items-center">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-4 fw-bold mb-4">Hi, I'm Kerem</h1>
          <p className="lead fs-5 mb-3 text-muted">
            Enterprise Software Developer & B2B Solutions Expert
          </p>
          <div className="mb-3">
            <ExpertiseRotator />
          </div>
          <p className="fs-6 mb-5" style={{ lineHeight: "1.8" }}>
            With 10+ years of experience, I build modern AI integrations,
            cloud-native solutions, and secure, scalable systems for B2B and B2C
            environments. I specialize in delivering enterprise solutions that
            drive business growth.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/portfolio">
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline-primary" size="lg">
                Learn More About Me
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
