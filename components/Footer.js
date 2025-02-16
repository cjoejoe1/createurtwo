import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import logo from '../images/createur-logo-black.png'; // Same logo from Header
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffffff", padding: "50px 0", fontFamily: 'Montserrat, sans-serif' }}>
      <Container>
        <Row>
          {/* Left Column: Logo & Address */}
          <Col md={3}>
            <Image src={logo} alt="Createur.com Logo" width={175} height={35} priority />
            <p style={{ marginTop: "15px", fontSize: "14px", color: "#000" }}>
              2025 Createur.com © Kohdao Ltd. <br />
              8B Raleigh Gardens, SW2 1AD, London, UK.
            </p>
            <p style={{ fontSize: "14px", color: "#000" }}>
              Registered in England & Wales: 06261702 <br />
              Data Protection Registration No: ZA891746
            </p>
          </Col>

     

  {/* Middle Column: Idées business */}
  <Col md={3}>
            <h5 style={{ fontWeight: "600", fontSize: "16px", color: "#000" }}>Startup</h5>
            <ul style={{ paddingLeft: "20px", fontSize: "14px", lineHeight: "26px", color: "#000" }}>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Idées business</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Je me lance</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Trouver mes clients</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Comparatifs</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Intelligence Artificielle</Link></li>
            </ul>
          </Col>

          {/* Middle Column: Idées business */}
          <Col md={3}>
            <h5 style={{ fontWeight: "600", fontSize: "16px", color: "#000" }}>Investisseurs</h5>
            <ul style={{ paddingLeft: "20px", fontSize: "14px", lineHeight: "26px", color: "#000" }}>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Idées business</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Je me lance</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Trouver mes clients</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Comparatifs</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Intelligence Artificielle</Link></li>
            </ul>
          </Col>

          {/* Right Column: Qui sommes-nous? */}
          <Col md={3}>
            <h5 style={{ fontWeight: "600", fontSize: "16px", color: "#000" }}>Qui sommes-nous?</h5>
            <ul style={{ paddingLeft: "20px", fontSize: "14px", lineHeight: "26px", color: "#000" }}>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Contactez-nous</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Mentions Légales</Link></li>
              <li><Link href="#" style={{ color: "#000", textDecoration: "none" }}>Politique de confidentialité</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
