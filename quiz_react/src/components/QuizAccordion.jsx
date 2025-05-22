import QuestionItem from "./QuestionItem";
import Accordion from "react-bootstrap/Accordion";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function QuizAccordion() {
  const { questions } = useContext(QuizContext);

  
  return (
    <Accordion defaultActiveKey="0">
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          eventKey={question.id.toString()}
          question={question}
          
        />
      ))}
    </Accordion>
  );
}
