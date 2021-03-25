import './App.css';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';

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
      <Col><Navigation navSections={data.navSections}/></Col>  
    </Row>
    <Row>
      <Col>
        <Jumbotron>
          <h1 class="text-center">Carlos Jaime De Leon</h1>
        </Jumbotron>
      </Col>    
    </Row>
  </Container>
);

export default App;
