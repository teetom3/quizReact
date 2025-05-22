import AccordionItem from "react-bootstrap/esm/AccordionItem";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function QuestionItem({
  eventKey,
  category,
  question,
  answer,
  validation,
}) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        {question} {validation}
      </Accordion.Header>
      <Accordion.Body>
        {answer}
        <Row>
          <Col>
            <Button variant="Success">Juste</Button>
          </Col>
          <Col>
            <Button variant="Danger">Fausse</Button>
          </Col>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
}
