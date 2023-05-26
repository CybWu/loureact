import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/first01.png";
import projImg2 from "../assets/img/first02.png";
import projImg3 from "../assets/img/first03.png";
import projImg4 from "../assets/img/second01.png";
import projImg5 from "../assets/img/second02.png";
import projImg6 from "../assets/img/second03.png";
import projImg7 from "../assets/img/last01.png";
import projImg8 from "../assets/img/last02.png";
import projImg9 from "../assets/img/last03.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Python",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Python",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Python",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "HTML / CSS",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "HTML / CSS",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "HTML / CSS",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const projects3 = [
    {
      title: "Javascript & Various",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Javascript & Various",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Javascript & Various",
      description: "Design & Development",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <h2>Tasks and studies</h2>
                  <p>What kind of tasks can you assign to me?</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Python</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">HTML/CSS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">JavaScript</Nav.Link>
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
                        <Row>
                          {
                            projects2.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects3.map((project, index) => {
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
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}