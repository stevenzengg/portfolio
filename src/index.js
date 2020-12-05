import React, { Component, useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import cover from "./resources/cover.jpg"
import github from "./resources/github.jpg"
import linkedin from "./resources/linkedin.jpg"
import Row from "react-bootstrap/Row"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ScrollDemo = () => {

    var descriptors = ["a student", "an innovator", "a programmer", "a developer", "an individual", "a dreamer", "a thinker", "a creator"]


    const [index, setIndex] = useState(0)
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(index => (index+1) % descriptors.length)
      }, 2000)
      return () => clearInterval(interval)
    }, [])

    console.log(descriptors.length)

    return (
    <>
      {/* React.Fragment*/}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Steven Zeng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Me</Nav.Link>
            <Nav.Link href="#academics">Academics</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#projects">DACTR</NavDropdown.Item>
              <NavDropdown.Item href="#projects">ML Image Categorization</NavDropdown.Item>
              <NavDropdown.Item href="#projects">You Made It</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container id = "home" style = {{minHeight: "100vh"}}>
        <Row>
          <Col>
            <img src = {cover} style = {{maxHeight: "90%", maxWidth: "100%", paddingTop: "2%"}} alt = "Cute dude who codes"/>
          </Col>
          <Col>
            <h1>Hey, my name is Steven. I'm {descriptors[index]}.</h1>
            <h5 style = {{paddingLeft: "6%", paddingRight: "6%", paddingTop: "5%", textAlign: "center"}}>
            From the small town of Montgomery, NJ, to the slightly larger town of Norristown, PA, and finally for the next four years - Penn State University at State College.</h5>
            <h5 style = {{paddingLeft: "6%", paddingRight: "6%", paddingTop: "5%", textAlign: "center"}}>
            My passions range from coding systems, websites, models, and applications - to hiking, biking, lifting, and of course, eating.</h5>
            <h5 style = {{paddingLeft: "6%", paddingRight: "6%", paddingTop: "5%", textAlign: "center"}}>
            I welcome new ideas, gun for bigger challenges, and am always down for a McDonald's run. ;)</h5>
            
            <Row style = {{justifyContent: "center", alignItems: "center", maxWidth: "100%"}}>
              <img src = {github} alt = "github1" style = {{maxHeight: "20%", maxWidth: "20%"}}/>
              <img src = {linkedin} alt = "linkedin" style = {{maxHeight: "17%", maxWidth: "17%"}}/>
            </Row>
          </Col>
        </Row>
      </Container>
      
      <Container style = {{backgroundColor: "rgb(255,224,179)", maxWidth: "100%", minHeight: "100vh"}}   id = "academics" >
        <h1>hi</h1>
      </Container>

      <Container id = "experience" style={{minHeight: "100vh" }} >
        <h1>hi</h1>
      </Container>

      <Container id = "projects" style={{minHeight: "100vh"}} >
        <h1>hi</h1>
      </Container>
      
    </>
  );
};

render(<ScrollDemo />, document.getElementById("root"));
