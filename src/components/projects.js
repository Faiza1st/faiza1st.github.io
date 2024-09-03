import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCards.js";
import pro1 from "../assests/pro1.png";
import pro2 from "../assests/pro2.png";
import pro3 from "../assests/pro3.png";
import pro4 from "../assests/pro4.png";
import pro5 from "../assests/pro5.png";
import github from "../assests/github2.png"
import bootcamp from "../assests/Bootcampmarks.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
          title: "StudentConnect",
          description: "StudentConnect is a specialised social networking site created exclusively for college and university students. It enables students to establish connections, engage in interactions, and exchange their university experiences and everyday lives.  ",
          imgUrl: pro1,
        },
        {
          title: "Work Day Scheduler",
          description: "The Work Schedule Application is a user-friendly calendar utility that can assist users better plan their everyday work habits. ",
          imgUrl: pro3,
        },
        {
          title: "Code Quiz",
          description: "This JavaScript Fundamentals Quiz Application is intended to measure students' mastery of essential JavaScript topics during coding boot camp. The programme offers a timed quiz experience, tracking top results for comparison among boot camp participants.",
          imgUrl: pro4,
        },
        {
          title: "Password Generator",
          description: "The Password Generator is an easy-to-use web tool developed to help users to create strong and secure passwords. The programme provides a customisable technique to creating strong passwords, with a focus on matching certain criteria for password strength.",
          imgUrl: pro5,
        },
        {
            title: "Interactive Budget Tracker",
            description: "This software is intended to help manage  money successfully by tracking  income, and expenses, and offering insights into  spending patterns. ",
            imgUrl: pro2,
          },
      ];

    return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2> My Projects</h2>
                <p>During my time at Monash University, I gained experience in various programming languages and completed over 24 projects. I've showcased some of my best work here, and you can explore more on my GitHub account.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Github</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Bootcamp Projects Marks</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <a href="https://github.com/Faiza1st"><img src={github} alt="Github" /></a>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <img src={bootcamp} alt="BootcampMarks"/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}