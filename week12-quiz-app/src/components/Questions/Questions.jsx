import './questions.css'
import questions from '/public/questions.js'
import { useState, useEffect } from 'react';

function Questions({setIsCompleted, setIsActive, setScore, setWrong}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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
    } else {
        setWrong(prev => prev +1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsCompleted(true);
      setIsActive(false);
    }
  }, [currentQuestionIndex, questions.length, setIsCompleted, setIsActive]);

  const currentQuestion = questions[currentQuestionIndex];

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
      </div>
    </div>
  );
}

export default Questions;
