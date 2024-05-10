import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";
import { FaDribbble } from "react-icons/fa";
import { Email, NAME } from "./../constant";
import { BsGlobeAmericas } from "react-icons/bs";

function NavBar() {
  const socials = [
    {
      link: `mailto:${Email}`,
      icon: <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>,
    },
    {
      link: "https://github.com/malikbilalahmed59",
      icon: <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>,
    },
    {
      link: "https://www.linkedin.com/in/malik-bilal-ahmed-99a758272/",
      icon: <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>,
    },
    {
      link: "https://beacons.ai/malikbilalahmed",
      icon: <BsGlobeAmericas style={{ fontSize: 20 }}></BsGlobeAmericas>,
    },
    {
      link: "#",
      icon: <FaDribbble style={{ fontSize: 20 }} />,
    },
  ];
  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">{NAME}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {socials.map((social) => (
              <Nav.Link href={social.link} target="_blank">
                {social.icon}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
