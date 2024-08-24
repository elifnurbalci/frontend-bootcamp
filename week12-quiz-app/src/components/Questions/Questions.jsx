import './questions.css'
import questions from '/public/questions.js'
import { useState, useEffect } from 'react';

function Questions({setIsCompleted}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResultButton, setShowResultButton] = useState(false);

  useEffect(() => {
    const questionInterval = setInterval(() => {
      setCurrentQuestionIndex((prevIndex) =>
        prevIndex === questions.length - 1 ? 0 : prevIndex + 1
      );
      setShowOptions(false);
      setSelectedOption(null);
    }, 3000);

    return () => clearInterval(questionInterval);
  }, []);

  useEffect(() => {
    const optionTimeout = setTimeout(() => {
      setShowOptions(true);
    }, 400);

    return () => clearTimeout(optionTimeout);
  }, [currentQuestionIndex]);

  const currentAnswer = questions[currentQuestionIndex].answer;

  const handleOptionChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    
    if (selected === currentAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  useEffect(() => {
    if (selectedOption !== null && selectedOption === currentAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    setSelectedOption(null);
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestionIndex === (questions.length-1)) {
    setIsCompleted(true);
  }

  useEffect(() => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowResultButton(true);
    }
  }, [currentQuestionIndex]);

  return (
    <div className="questions">
      <div className="question-block">
        <h2>{currentQuestionIndex + 1}. Question</h2>
        <p>{currentQuestion.question}</p>
        <img src={currentQuestion.media} alt="media" style={{ width: '200px' }} />
        
        {showOptions ? (
          <ul>
            {currentQuestion.options.map((option, optionIndex) => (
              <li key={optionIndex} className='option-item'>                
              <label>
              <input
                type="radio"
                name="question"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <span className="option-label"></span> {option}
            </label></li>
            ))}
          </ul>
        ) : (
          <p>......</p>
        )}
        {showResultButton && (
        <button onClick={() => setIsCompleted(true)}>
          Show Result
        </button>
      )}
      </div>
    </div>
  );
}

export default Questions;
