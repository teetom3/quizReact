import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";





export const FilterQuiz = () =>
  
{

  const {questions} = useContext(QuizContext)

const filteredQuestion = questions.filter(
()
)
  
  return (
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Toutes les categories
  </Dropdown.Toggle>

  <Dropdown.Menu>
    

 <Dropdown.Item >Math</Dropdown.Item>
 <Dropdown.Item >Histoire</Dropdown.Item>
 <Dropdown.Item >Science</Dropdown.Item>
   
    
    
  </Dropdown.Menu>
</Dropdown>
  )

}



