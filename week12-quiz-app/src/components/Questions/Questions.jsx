import './questions.css'
import questions from '/public/questions.js'
import { useState, useEffect } from 'react';

function Questions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentQuestionIndex((prevIndex) =>
          prevIndex === questions.length - 1 ? 0 : prevIndex + 1
        );
      }, 30000); // Her 30 saniyede bir soru değişir
  
      return () => clearInterval(interval);
    }, []);
  
    const currentQuestion = questions[currentQuestionIndex];
  
    return (
      <div className="questions">
        <div className="question-block">
          <p>{currentQuestionIndex + 1}. {currentQuestion.question}</p>
          <img src={currentQuestion.media} alt="media" style={{ width: '200px' }} />
          <ul>
            {currentQuestion.options.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Questions;