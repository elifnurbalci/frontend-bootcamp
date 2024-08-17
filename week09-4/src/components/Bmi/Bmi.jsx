import React, { useState } from 'react';

function Bmi() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [arrowPosition, setArrowPosition] = useState(0);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    let bmi = 0;
    let position = 0;
    let left = 0;

    if (!heightInMeters || !weightInKg) {
      setArrowPosition(0);
      return;
    }

    bmi = weightInKg / (heightInMeters * heightInMeters);

    if (bmi < 13.5) {
      position = 0;
      left = 2;
    } else if (bmi >= 13.5 && bmi < 18.5) {
      position = 0;
      left = bmi - 13;
    } else if (bmi >= 18.5 && bmi < 25) {
      position = 1;
      left = bmi - 18;
    } else if (bmi >= 25 && bmi < 30) {
      position = 2;
      left = bmi - 24;
    } else if (bmi >= 30 && bmi < 35) {
      position = 3;
      left = bmi - 29;
    } else if (bmi >= 40 && bmi < 45) {
      position = 4;
      left = bmi - 39;
    } else {
      position = 5;
      left = -2;
    }

    const newPosition = position * 20 + left;
    setArrowPosition(newPosition);
  };

  return (
    <div>
      <div className="bmi">
        <div className="bmi-container">
          <div className="bmi-info">
            <h2>BMI Calculator</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <div className="bmi-inputs">
              <input
                type="number"
                id="height"
                placeholder="Your Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onInput={calculateBMI}
                autoComplete="off"
              />
              <h6>cm</h6>
              <input
                type="number"
                id="weight"
                placeholder="Your Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onInput={calculateBMI}
                autoComplete="off"
              />
              <h6>kg</h6>
            </div>
          </div>
          <div className="bmi-display">
            <h3>Your BMI</h3>
            <img src="./public/images/bmi-title.jpg" alt="BMI Categories" id="bmi-title" />
            <img src="./public/images/bmi.jpg" alt="BMI Categories" id="bmi-chart" />
            <div id="arrow-up" className="arrow-up" style={{ left: `${arrowPosition}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
