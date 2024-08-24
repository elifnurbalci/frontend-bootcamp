import './questions.css'
import questions from '/public/questions.js'
import { useState, useEffect } from 'react';

function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const questionInterval = setInterval(() => {
      setCurrentQuestionIndex((prevIndex) =>
        prevIndex === questions.length - 1 ? 0 : prevIndex + 1
      );
      setShowOptions(false); 
    }, 30000);

    return () => clearInterval(questionInterval);
  }, []);

  useEffect(() => {
    const optionTimeout = setTimeout(() => {
      setShowOptions(true);
    }, 4000);

    return () => clearTimeout(optionTimeout);
  }, [currentQuestionIndex]);

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
              <li key={optionIndex}>{option}</li>
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
