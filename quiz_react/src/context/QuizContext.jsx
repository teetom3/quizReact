import { createContext, useReducer } from "react";
import { quizReducer, initialState } from "../reducers/quizReducer";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ questions: state.questions, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
