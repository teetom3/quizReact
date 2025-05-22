import QuestionItem from "./QuestionItem";
import Accordion from "react-bootstrap/Accordion";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function QuizAccordion({ category }) {
  const { questions } = useContext(QuizContext);

  const filteredQuestions = category
    ? questions.filter((question) => question.category == category)
    : questions;

  return (
    <Accordion defaultActiveKey="0">
      {filteredQuestions.map((question) => (
        <QuestionItem
          key={question.id}
          eventKey={question.id.toString()}
          question={question}
        />
      ))}
    </Accordion>
  );
}
