import { useState } from "react";
import QuizAccordion from "./components/QuizAccordion";
import { FilterQuiz } from "./components/FilterQuiz";
import "./App.css";

function App() {
  // Petit module à importer là où vous affichez le quiz

  return (
    <>
      <h1>Quiz interactif</h1>
      <FilterQuiz/>
      <QuizAccordion></QuizAccordion>
    </>
  );
}

export default App;
