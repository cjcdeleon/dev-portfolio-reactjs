import './App.css';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Section from './components/Section';

const data = {
  navSections: [
  "Summary"
  ,"Experience"
  ,"Expertise"
  ,"Education"
  ,"Contact Me"
  ]
};

const App = () => (
  <Container>
    <Row>
      <Col>
        <Navigation navSections={data.navSections}/>
      </Col>  
    </Row>
    <Row>
      <Col>
        <Jumbotron>
          <h1 className="text-center">Carlos Jaime De Leon</h1>
        </Jumbotron>
      </Col>    
    </Row>
    <Row>
      <Col>
        {data.navSections.map(value => (
					<Section sectionName={value}/>
					))
				}
      </Col>
    </Row>
  </Container>
);

export default App;
