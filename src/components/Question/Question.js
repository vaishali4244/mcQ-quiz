
import './Question.css';

const Question = ({ score, setScore, setResult, totalQuestion, setTotalQuestion, Data, quesNumber, setQuesNumber }) => {

//to get next question
  const handleNextQues = (value) => {
      setQuesNumber(quesNumber + 1);
      if (Data[quesNumber]?.answer === value) {
        setScore(score + 1)
      }
  }

  return (
    <div className="content">
      <p className="question">Question {quesNumber + 1} : {Data[quesNumber]?.question}</p>
      <ul className="list">
        {Data[quesNumber]?.options.map((value, index) => {
          return (
            <li key={index} className="option" onClick={() => { handleNextQues(value) }}>{value}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Question;