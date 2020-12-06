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
import github1 from "./resources/github1.jpg"
import linkedin from "./resources/linkedin.jpg"
import mail1 from "./resources/mail1.jpg"
import bigcover2 from "./resources/bigcover2.jpg"
import Row from "react-bootstrap/Row"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';



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
      


      
      <Container fluid id = "home" style = {{minHeight: "100vh", backgroundImage: `url(${bigcover2})`, backgroundSize: "cover", backgroundPosition: "bottom", justifyContent: "center", alignItems: "center"}}>



        <Navbar sticky = "top" >
          <Navbar.Brand href="#home" style = {{color: "black", fontWeight: "600"}}>Steven Zeng</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style = {{color: "white", fontWeight: "500"}}>Home</Nav.Link>
              <Nav.Link href="#about" style = {{color: "white", fontWeight: "500"}}>About</Nav.Link>
              <Nav.Link href="#resume" style = {{color: "white", fontWeight: "500"}}>Resume</Nav.Link>
              <Nav.Link href="#projects" style = {{color: "white", fontWeight: "500"}}>Projects</Nav.Link>
              <Nav.Link href="#activities" style = {{color: "white", fontWeight: "500"}}>Activities</Nav.Link>
              <Nav.Link href="#contact" style = {{color: "white", fontWeight: "500"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <h1 style = {{textAlign: "center", fontSize: 75, fontWeight: 700, paddingTop: "10%"}}>Steven Zeng</h1>
        <h1 style = {{textAlign: "center", fontSize: 20, fontWeight: 600, paddingTop: "1%"}}>Hello there. Welcome to my page.</h1>
        <Row style = {{marginLeft: "1%", justifyContent: "center", alignItems: "center", maxWidth: "100%", marginTop: "1%"}}>
                <a href = "https://www.linkedin.com/in/stevenzengg" style = {{maxWidth: "5%"}}>
                  <img src = {linkedin} alt = "linkedin" style = {{maxWidth: "50%"}}/>
                </a>
                <a href = "mailto: zengstevenz@gmail.com" style = {{maxWidth: "5%"}}>
                  <img src = {mail1} alt = "mail" style = {{maxWidth: "80%"}}/>
                </a>
                <a href = "https://www.github.com/stevenzengg" style = {{maxWidth: "5%", marginLeft: "1.5%"}}>
                  <img src = {github1} alt = "github" style = {{maxWidth: "50%"}}/>
                </a>
            </Row>








          
          
          {/* 
            <h1 style = {{maxWidth: "95%"}}>Hey, my name is Steven. I'm {descriptors[index]}.</h1>
            <h5 style = {{paddingLeft: "6%", paddingRight: "6%", paddingTop: "5%", textAlign: "center"}}>
            From the small town of Montgomery, NJ, to the slightly larger town of Norristown, PA, and finally for the next four years - Penn State University at State College.</h5>
            <h5 style = {{paddingLeft: "6%", paddingRight: "6%", paddingTop: "5%", textAlign: "center"}}>
            My passions range from coding systems, websites, models, and applications - to hiking, biking, lifting, and of course, eating.</h5>
            <h5 style = {{paddingLeft: "6%", paddingRight: "6%", paddingTop: "5%", textAlign: "center"}}>
            I welcome new ideas, gun for bigger challenges, and am always down for a McDonald's run. ;)</h5>
            <h5 style = {{paddingLeft: "6%", paddingRight: "6%", paddingTop: "5%", textAlign: "center"}}>
            Connect with me on <a href = "https://www.linkedin.com/in/stevenzengg">LinkedIn</a>, <a href = "mailto: zengstevenz@gmail.com">e-mail me</a>,
            or check out my work on <a href = "https://www.github.com/stevenzengg">Github</a>!</h5>
            
            <Row style = {{marginLeft: "1%", justifyContent: "center", alignItems: "center", maxWidth: "100%"}}>
                <a href = "https://www.linkedin.com/in/stevenzengg" style = {{maxWidth: "15%"}}>
                  <img src = {linkedin} alt = "linkedin" style = {{maxWidth: "100%"}}/>
                </a>
                <a href = "mailto: zengstevenz@gmail.com" style = {{maxWidth: "15%", margin: "5%"}}>
                  <img src = {mail1} alt = "mail" style = {{maxWidth: "100%"}}/>
                </a>
                <a href = "https://www.github.com/stevenzengg" style = {{maxWidth: "15%"}}>
                  <img src = {github1} alt = "github" style = {{maxWidth: "100%"}}/>
                </a>
            </Row>
            */}

      </Container>




      <Navbar sticky = "top" bg = "light" >
        <Navbar.Brand href="#home">Steven Zeng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#activities">Activities</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      <Container  style = {{backgroundColor: "black", maxWidth: "100%", minHeight: "100vh"}}   id = "about" >
            <p style = {{textAlign: "center", fontSize: 20, color: "Aquamarine", paddingTop: "5%"}}>About</p>
            <h1 style = {{maxWidth: "95%", color: "white", textAlign: "center"}}>Let me introduce myself. You could call me {descriptors[index]}.</h1>
        <Row style = {{ maxWidth: "80%"}}>
          <Col md = {{span: 4, offset: 4}}>
          <p>hi</p>
          </Col>
          <Col>
          <p>hi</p>
          </Col>
        </Row>
      </Container>






      <Container id = "resume" style={{minHeight: "100vh" }} >
      <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="11/2010 – Present"
    style={{ color: '#e86971' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(150, 150, 150)',
          color: '#fff',
        }}
      >
        11/2008 – 04/2009
      </div>
    )}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="08/2008 – 11/2008"
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
</Timeline>
      </Container>

      <Container id = "projects" style = {{backgroundColor: "rgb(255,224,179)", maxWidth: "100%", minHeight: "100vh"}} >
        <h1>hi</h1>
      </Container>

      <Container id = "activities" style={{minHeight: "100vh"}} >
        <h1>hi</h1>
      </Container>

      <Container id = "contact" style={{minHeight: "100vh"}} >
        <h1>hi</h1>
      </Container>
      
    </>
  );
};

render(<ScrollDemo />, document.getElementById("root"));
