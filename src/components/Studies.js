import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import studImg1 from "../assets/img/stud01.png";
import studImg2 from "../assets/img/stud02.png";
import studImg3 from "../assets/img/stud03.png";
import studImg4 from "../assets/img/stud04.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Studies = () => {

  const studies = [
    {
      title: "Studies",
      description: "Knowledges I have got",
      imgUrl: studImg1,
    },
    {
      title: "Studies",
      description: "Knowledges I have got",
      imgUrl: studImg2,
    },
    {
      title: "Studies",
      description: "Knowledges I have got",
      imgUrl: studImg3,
    },
  ];

  const studies2 = [
    {
      title: "Studies",
      description: "Knowledges I have got",
      imgUrl: studImg4,
    },
    
  ];

  const studies3 = [
    
    
  ];

  


  return (
    <section className="study" id="studies">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <h2>Tasks and studies</h2>
                  <p>What I do and what I learned</p>
                  <Tab.Container id="studies-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Studies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Studies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Studies</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            studies.map((study, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...study}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            studies2.map((study, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...study}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            studies3.map((study, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...study}
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