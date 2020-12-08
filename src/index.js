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
import cover from "./resources/cover.jpg"
import Row from "react-bootstrap/Row"
import ProgressBar from "react-bootstrap/ProgressBar"
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
      


      
      <Container fluid id = "home" style = {{minHeight: "100vh", backgroundImage: `url(${bigcover2})`, backgroundSize: "cover", backgroundPosition: "bottom",}}>



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
        <h1 style = {{textAlign: "center", fontSize: 20, fontWeight: 600}}>Background Pic: <i>Over the Canopy</i> by Steven Zeng</h1>
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


        <Row>
          <Col>
            <h5 style = {{textAlign: "center", color: "Aquamarine", paddingTop: "5%"}}>About</h5>
            <h1 style = {{maxWidth: "95%", color: "white", textAlign: "center"}}>Let me introduce myself. You could call me {descriptors[index]}.</h1>
          </Col>
        </Row>


        <Row fluid style = {{maxHeight: "30%", paddingTop: "2%"}}>
          <Col style = {{maxWidth: "35%", maxHeight: "100%"}}>
            <div style = {{maxHeight: "100%", maxWidth: "100%"}}>
              <img src = {cover} alt = "cover" style = {{position: "relative", maxWidth: "30%", maxHeight: "20%", borderRadius: "50%", float: "right"}}/>
            </div>
          </Col>
          <Col style = {{maxWidth: "40%"}}>
              <h5 style = {{color: "silver", lineHeight: "200%", marginTop: "1.5%"}}> I'm a Penn State University class of 2023 undergraduate 
              majoring in Computer Science and Applied Statistics and minoring in Engineering Leadership Design. 
              I spend most of my time tinkering with different projects to diversify my experience with the various platforms and tools online.</h5>
          </Col>
        </Row>    


        <Row style = {{ paddingTop: "3%", marginBottom: "3%"}}>
          <Col>
            <div style = {{maxWidth: "50%", float: "right"}}>
              <h3 className = "whitetitle">Profile</h3>
              <h6 className = "silvertext">Currently, I'm seeking a software developer internship for the 2020 summer. 
              I am looking to build my technical and soft portfolios while contributing to company success.  
              I'm open to different locations and positions. If you think I'm a good fit, please contact me by <a href = "mailto: zengstevenz@gmail.com">zengstevenz@gmail.com</a></h6>
              <h5 className = "slatetitle">Full Name:</h5>
              <h6 className = "slatetext">Steven Zeng</h6>
              <h5 className = "slatetitle">Birth Date:</h5>
              <h6 className = "slatetext">February 13, 2001</h6>  
              <h5 className = "slatetitle">E-Mail:</h5>
              <h6 className = "slatetext"><a href = "mailto: zengstevenz@gmail.com">zengstevenz@gmail.com</a></h6>
            </div>

          </Col>


          <Col>
            <div style = {{maxWidth: "50%"}}>
              <h3 className = "whitetitle">Skills</h3>
              <h6 className = "silvertext">I specialize in programming with a background in 
              computer science and applied statistics. I work efficiently on teams as both a team player and independent worker. 
              I enjoy learning new languages, tools, and frameworks. I have highlighted below my more prominent languages: 
              </h6>
            </div>
              <h5 className = "slatetitle">Python</h5>
              <div>
                <ProgressBar striped variant = "info" now = {90}/>
              </div>

              <h5 className = "slatetitle">Java</h5>
              <div>
                <ProgressBar striped variant = "info" now = {60}/>
              </div>

              <h5 className = "slatetitle">JS/HTML/CSS</h5>
              <div>
              <ProgressBar striped variant = "info" now = {70}/>
              </div>

              <h5 className = "slatetitle">C</h5>
              <div>
              <ProgressBar striped variant = "info" now = {70}/>
              </div>
          </Col>
        </Row>

        <Row style = {{justifyContent: "center", paddingBottom: "5%"}}>
          <Button variant = "outline-info" size = "lg">Resume/CV</Button>
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
