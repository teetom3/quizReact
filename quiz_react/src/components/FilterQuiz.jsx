import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Form from "react-bootstrap/Form";

export const FilterQuiz = ({ setCategory }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e) => {
        setCategory(e.target.value);
      }}
      className="my-2"
    >
      <option value="">Toutes les categories</option>
      <option value="Math">Math</option>
      <option value="Histoire">Histoire</option>
      <option value="Science">Science</option>
    </Form.Select>
  );
};
