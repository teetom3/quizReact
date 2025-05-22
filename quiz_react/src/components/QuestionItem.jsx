import AccordionItem from "react-bootstrap/esm/AccordionItem";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";


export default function QuestionItem({
  
  eventKey,
  question,
  
}) {

  const {dispatch} = useContext(QuizContext)

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        
        {question.question}    {question.validation === null ? '' : question.validation ? (<span className="text-success ms-5">Juste</span>) : (<span className="text-danger ms-5">Fausse</span>)}
 
      </Accordion.Header>
      <Accordion.Body>
        {question.answer}
        <Row className="mt-4">
          <Col>
          <Button variant="primary" onClick={() =>   dispatch({
        type: "VALIDATE_ANSWER",
        payload: { id: question.id, validation:true },
      })}>Juste</Button>
          </Col>
          <Col>
          <Button variant="danger" onClick={() => dispatch({type: "VALIDATE_ANSWER", payload : {id : question.id, validation:false}})}>Fausse</Button>
          </Col>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
}
