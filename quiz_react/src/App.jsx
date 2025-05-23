import { useState } from "react";
import QuizAccordion from "./components/QuizAccordion";
import { FilterQuiz } from "./components/FilterQuiz";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  // Petit module à importer là où vous affichez le quiz
  const [category, setCategory] = useState("");
  return (
    <Container as="main">
      <h1 className="m-4">Quiz interactif</h1>
      <FilterQuiz setCategory={setCategory} />
      <QuizAccordion category={category} />
    </Container>
  );
}

export default App;
