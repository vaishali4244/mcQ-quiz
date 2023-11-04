
import './ProgressBar.css';

const ProgressBar =({totalQuestion, quesNumber})=>{

    //percentage of marks produced
    const percentage = ((quesNumber )* 100) / totalQuestion;

    return(
        <div className="progress-container">
            <div className="progress" style ={{ width:`${percentage+'%'}` }}>
            </div>
        </div>
    )
}

export default ProgressBar;