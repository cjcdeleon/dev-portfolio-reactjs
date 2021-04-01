import './App.css';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Section from './components/Section';
import SummaryContent from './components/SummaryContent';
import React from "react";

const data = {
  navSections: [
    {
      name: "Summary",
      component: SummaryContent 
    },
    {
      name: "Experience",
      component: "" 
    },
    {
      name: "Expertise",
      component: "" 
    },
    {
      name: "Education",
      component: "" 
    },
    {
      name: "Contact Me",
      component: "" 
    },
  ]
};

const App = () => (
  <Container>
    <Row>
      <Col>
        <Navigation navSections={data.navSections.map(jo => jo.name)}/>
      </Col>  
    </Row>
    {/* 
    <Row>
      <Col>
        <Jumbotron>
          <h1 className="text-center">Carlos Jaime De Leon</h1>
        </Jumbotron>
      </Col>    
    </Row>
    */}
    <Row>
      <Col>
        { data.navSections.map(jo => (
					<Section sectionName={jo.name}>
            { jo.component && React.createElement(jo.component) }
          </Section>
					))
				}
      </Col>
    </Row>
  </Container>
);

export default App;