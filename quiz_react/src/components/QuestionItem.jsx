import AccordionItem from "react-bootstrap/esm/AccordionItem";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";

export default function QuestionItem({ eventKey, question }) {
  const { dispatch } = useContext(QuizContext);

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <div className="d-flex justify-content-between w-100">
          <span className="flex-grow-1">{question.question}</span>
          {question.validation !== null &&
            (question.validation ? (
              <span className="text-success m-1">Juste</span>
            ) : (
              <span className="text-danger m-1">Fausse</span>
            ))}
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {question.answer}
        <div className="my-4">
          <span className="m-2">
            <Button
              variant="primary"
              onClick={() =>
                dispatch({
                  type: "VALIDATE_ANSWER",
                  payload: { id: question.id, validation: true },
                })
              }
              disabled={question.validation !== null}
            >
              Juste
            </Button>
          </span>
          <span>
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "VALIDATE_ANSWER",
                  payload: { id: question.id, validation: false },
                })
              }
              disabled={question.validation !== null}
            >
              Fausse
            </Button>
          </span>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
