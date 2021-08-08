import './App.css';
import FliterMenu from './components/FliterMenu';
import ShowContent from './components/ShowContent';
import jsonResponse from './components/db.json';
import { RecoilRoot } from 'recoil';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className="app">
    <Row>
      <RecoilRoot>
      <Col xl={2} lg={2} md={2}>
      <FliterMenu item={jsonResponse}/>
      </Col>
      <Col  xl={10} lg={10} md={10}>
      <ShowContent />
      </Col>
      </RecoilRoot>
      </Row>
       </Container>
  );
}

export default App;
