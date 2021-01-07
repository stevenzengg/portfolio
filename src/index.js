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
              <Nav.Link href="#myjourney" style = {{color: "white", fontWeight: "500"}}>My Journey</Nav.Link>
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
            <Nav.Link href="#myjourney">My Journey</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#activities">Activities</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      <Container  style = {{backgroundColor: "black", maxWidth: "100%", minHeight: "100vh"}}   id = "about" >


        <Row>
          <Col>
            <h5 style = {{textAlign: "center", color: "DarkTurquoise", paddingTop: "5%"}}>About</h5>
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






      <Container id = "myjourney" style={{minHeight: "100vh" }} >

        <Timeline lineColor={'#ddd'}>

          <TimelineItem
            key="001"
            dateText="05/2020 – 07/2020"
            style={{ color: '#e86971' }}
          >
            <h3>Deep Learning Algorithms and Analysis, Penn State University</h3>
            <h4 style = {{paddingBottom: "2%"}}><i>Honors Student</i></h4>
            <p>
              This summer, I had the opportunity to take on a graduate-level, mathematics-focused computer science course online 
              through Penn State. I am thankful for being able to work with a world-renowned professor, Dr. Jinchao Xu, along with
              other dedicated researchers such as Dr. Juncai He and Dr. Jonathan Siegel.
            </p>
            <p>
              In this class, I utilized Pytorch libraries along with CUDA functionalities to construct custom machine learning models and neural networks. 
              These frameworks were provided different algorithms for training, including stochastic gradient descent and logistic regression. 
              Typically, my neural networks employed the use of ReLU for activation. 
              I trained my models primarily on labelled image datasets, each of which are comprised of thousands of images separated by category.
            </p>
            <p>
              Over the length of the course, I was able to make progress in creating simple 1-2 hidden layer, to residual (ResNet) convolutional neural networks (CNN). When comparing 
              image classification results, I was able to achieve 92% precision over 20 epochs on the MNIST dataset with a logistic regression model. On the same dataset, I achieved 97% precision over
              20 epochs using a 1 hidden layer neural network. By leveraging a ResNet18 convolutional neural network, I achieved 94% precision on the CIFAR10 dataset. In my final project, I 
              achieved 95% precision on CIFAR10 using MgNet, a modern framework leveraging both ResNet and Multigrid methods.
            </p>
          </TimelineItem>


          <TimelineItem
            key="002"
            dateText="11/2019 – Present"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Notivate, DACTR</h3>
            <h4 style={{ color: '#61b8ff', paddingBottom: "2%" }}><i>Front-end Developer</i></h4>
            <p>
              Along with a group of dedicated friends and fellow Penn Staters, I jumpstarted an idea into a tangible application on the 
              Google Play Store. The app, originally named DACTR, allowed users to journal daily into a database that could analyze the text, 
              identify potentially enjoyable activities for the user, and locate nearby providers such as gyms, pools, stores, theaters,
              and even outdoor trails under cognitive behavioral therapy. 
            </p>
            <p>
              This project is built using a NativeScript + Angular framework with typescript and utilizes Google Cloud Platform Natural Language Processing 
              to analyze user sentiment combined with a custom dictionary database to differentiate between liked 
              and disliked activities. When quering and displaying nearby areas of interest, it pulls from a Google Maps API. 
              The project also allows for user accounts via a Google Firebase database, with 
              built-in identification and security protocols. 
            </p>
          </TimelineItem>


          <TimelineItem
            key="003"
            dateText="08/2019 – Present"
            dateInnerStyle={{ background: '#76bb7f' }}
          >
            <h3>College of Engineering, Penn State University</h3>
            <h4 style = {{paddingBottom: "2%"}}><i>Intended Computer Science B.Sc., Applied Statistics B.Sc., Minor: Engineering Leadership Development</i></h4>
            <p>
              From my first visit at Penn State, I was pulled into the student-centric atmosphere at Penn State. Help and opportunities to learn
              surrounded me. What's more, the beautiful, nature-filled campus amazed my computer-oriented self, 
              while the bustling, decorative downtown next door
              satisfied my social and food cravings.
            </p>
            <p>
              It was at Penn State that I found a great group of friends, and now, in my sophomore year, I am proud to be part of the Developer Student Club, Python Learning Organization, 
              Engineering House, and Engineering Consulting Collaborative, which of the last two I am the standing treasurer.
            </p>
          </TimelineItem>

        </Timeline>

      </Container>

      <Container id = "projects" style = {{backgroundColor: "rgb(255,224,179)", maxWidth: "100%", minHeight: "100vh"}} >
        <h1 style = {{textAlign: "center", paddingTop: "20%"}}>In the makes. Coming soon! :)</h1>
      </Container>

      <Container id = "activities" style={{backgroundColor: "rgb(133,204,209)", maxWidth: "100%", minHeight: "100vh"}} >
        <h1 style = {{textAlign: "center", paddingTop: "20%"}}>In the makes. Coming soon! :)</h1>
      </Container>

      <Container id = "contact" style = {{backgroundColor: "rgb(133,174,129)", maxWidth: "100%", minHeight: "100vh"}} >
        <h1 style = {{textAlign: "center", paddingTop: "20%"}}>In the makes. Coming soon! :)</h1>
      </Container>
      
    </>
  );
};

render(<ScrollDemo />, document.getElementById("root"));
