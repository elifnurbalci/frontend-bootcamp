import './questions.css';
import questions from '/public/questions.js';
import { useState, useEffect } from 'react';

function Questions({ setIsCompleted, setIsActive, setScore, setWrong, setDetailedResult }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const questionInterval = setInterval(() => {
      if (selectedOption === null) {
        setDetailedResult((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            userAnswer: "Empty",
            correctAnswer: questions[currentQuestionIndex]?.answer,
            result: 'Empty',
          }
        ]);
      }

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setShowOptions(false);
        setSelectedOption(null);
      } else {
        setIsCompleted(true);
        setIsActive(false);
        clearInterval(questionInterval);
      }
    }, 10000);

    return () => clearInterval(questionInterval);
  }, [currentQuestionIndex, questions.length, setIsCompleted, setIsActive, selectedOption]);

  useEffect(() => {
    const optionTimeout = setTimeout(() => {
      setShowOptions(true);
    }, 4000);

    return () => clearTimeout(optionTimeout);
  }, [currentQuestionIndex]);

  const currentAnswer = questions[currentQuestionIndex]?.answer;

  const handleOptionChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      if (selectedOption === currentAnswer) {
        setScore((prevScore) => prevScore + 1);
        setDetailedResult((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            userAnswer: selectedOption,
            correctAnswer: currentAnswer,
            result: 'True'
          }
        ]);
      } else {
        setWrong((prev) => prev + 1);
        setDetailedResult((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            userAnswer: selectedOption,
            correctAnswer: currentAnswer,
            result: 'False'
          }
        ]);
      }
    } else {
      setDetailedResult((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          userAnswer: "Empty",
          correctAnswer: currentAnswer,
          result: 'Empty'
        }
      ]);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowOptions(false);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
      setIsActive(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="questions">
      <div className="question-block">
        <h2>{currentQuestionIndex + 1}. Question</h2>
        <p>{currentQuestion?.question}</p>
        <img src={currentQuestion?.media} alt="media" style={{ width: '200px' }} />

        {showOptions ? (
          <ul>
            {currentQuestion?.options.map((option, optionIndex) => (
              <li key={optionIndex} className="option-item">
                <label>
                  <input
                    type="radio"
                    name="question"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  <span className="option-label"></span> {option}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <p>......</p>
        )}
        {showOptions && (
          <button className='next-option' onClick={handleNextClick} disabled={!selectedOption}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Questions;
