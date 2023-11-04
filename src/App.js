import { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';
import { Data } from './components/Data';
import Question from './components/Question/Question';

import './App.css';

function App() {

  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [totalQuestion, setTotalQuestion] = useState(Data?.length);
  const [quesNumber, setQuesNumber] = useState(0);

  //to give remark on the result
  const handleResult = () => {
    const percentage = ((score) * 100) / totalQuestion;
    let review = '';
    if (percentage === 0) {
      review = '......Better Luck Next Time'
    }
    else if (percentage === 20) {
      review = '......Keep Learning'
    }
    else if (percentage === 40) {
      review = '......Try High'
    }
    else if (percentage === 60) {
      review = '......Good Going'
    }
    else if (percentage === 80) {
      review = '......Highly Potential'
    } else {
      review = `.....You Rock!!!`
    }
    setResult(percentage + "% " + review)
  }

  useEffect(() => {
    handleResult()
  }, [score])


  return (<>
    <ProgressBar
      quesNumber={quesNumber}
      totalQuestion={totalQuestion}
    />
    <div className="App">
      <h1>BE SMART - Test Yourself !</h1>
      <h2>Current Score - {score}/{totalQuestion}</h2>
      {quesNumber === totalQuestion ?
        <div className="score">
          <h2 className='result'>Final Result - {result}</h2>
        </div> :
        <Question
          score={score}
          setScore={setScore}
          setResult={setResult}
          totalQuestion={totalQuestion}
          setTotalQuestion={setTotalQuestion}
          Data={Data} quesNumber={quesNumber}
          setQuesNumber={setQuesNumber}
        />
      }
      <button
        className="restart"
        onClick={() => { setQuesNumber(0); setScore(0); setResult("") }}
      >Attempt Again</button>

    </div>
  </>
  );
}

export default App;
