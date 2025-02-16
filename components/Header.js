import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import Image from 'next/image';
import logo from '../images/createur-logo-black.png';
import Avatar from './Avatar'; 
import Link from 'next/link';
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
import { useRouter } from 'next/router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPathname = router.asPath;

  // Control Dropdown Hover
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Navbar expand="md" className="w-full shadow-md fixed-top" style={{ backgroundColor: "rgb(248, 249, 250)", borderBottom: "0px solid #dfdfdf" }}>
      <Container>
        {/* Left Side: Logo + Links */}
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/">
            <Image src={logo} alt="Logo" width={175} height={35} priority />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} />
          <Navbar.Collapse id="basic-navbar-nav" in={isOpen} style={{marginLeft: -30}}>
            <Nav className="ms-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>

              {/* Services Dropdown */}
              <NavDropdown
                title={<span style={{ fontFamily: 'Montserrat, sans-serif', color: "black" }}>Startups</span>}
                id="services-dropdown"
                show={servicesOpen}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavDropdown.Item href="#" style={{ color: "black" }}>Startups France</NavDropdown.Item>
                <NavDropdown.Item href="#" style={{ color: "black" }}>Startups Royaume-Uni</NavDropdown.Item>
              </NavDropdown>

              {/* About Dropdown */}
              <NavDropdown
                title={<span style={{ fontFamily: 'Montserrat, sans-serif', color: "black" }}>Investisseurs</span>}
                id="about-dropdown"
                show={aboutOpen}
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <NavDropdown.Item href="#" style={{ color: "black" }}>Business Angels</NavDropdown.Item>

                <NavDropdown.Item href="#" style={{ color: "black" }}>Investisseurs France</NavDropdown.Item>
                <NavDropdown.Item href="#" style={{ color: "black" }}>Investisseurs Royaume-Uni</NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link href="#" style={{ fontFamily: 'Montserrat, sans-serif', color: "black" }}>Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>

        {/* Right Side: Buttons + Avatar */}
        <div className="d-flex align-items-center" id="min992">
          <Link legacyBehavior href="/startups/" passHref>
            <a id='dailyButton'>
              <Button type="submit" variant="dark" id="officeButtonDown" style={{ border: 0, fontFamily: 'Montserrat', fontWeight: 600, marginRight: 10 }}>
                Liste de startups <FaPlus id='faPlus' style={{ marginBottom: 3 }} />
              </Button>
            </a>
          </Link>

          <Link legacyBehavior href={`/investisseurs/?prevPathname=${currentPathname}`} as="/investisseurs/" passHref>
            <a>
              <Button type="submit" id="startButtonDown" style={{ fontFamily: 'Montserrat', fontWeight: 600 }}>
                Liste d'investisseurs <FaAngleDoubleRight style={{ marginBottom: 2, fontSize: 19 }} />
              </Button>
            </a>
          </Link>

          <div id="min992" style={{ marginLeft: 10 }}>
            <Avatar />
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
