import React, { useState } from 'react';
import './Classes.css';

const classData = {
  Yoga: {
    title: 'Why Choose Yoga?',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quibusdam dolores odio officiis officia assumenda aut tempore doloribus eaque! Distinctio nam necessitatibus dolorum odit aliquid sit dolores? Molestiae, velit laborum.',
    schedule: [
      'Saturday-Sunday: 8:00am - 10:00am',
      'Monday-Tuesday: 10:00am - 12:00pm',
      'Wednesday-Friday: 3:00pm - 6:00pm',
    ],
    image: '/images/yoga.jpg',
  },
  Group: {
    title: 'Why Choose Group?',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quibusdam dolores odio officiis officia assumenda aut tempore doloribus eaque! Distinctio nam necessitatibus dolorum odit aliquid sit dolores? Molestiae, velit laborum.',
    schedule: [
      'Saturday-Sunday: 8:00am - 10:00am',
      'Monday-Tuesday: 10:00am - 12:00pm',
      'Wednesday-Friday: 3:00pm - 6:00pm',
    ],
    image: '/images/group.webp',
  },
  Solo: {
    title: 'Why Choose Solo?',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quibusdam dolores odio officiis officia assumenda aut tempore doloribus eaque! Distinctio nam necessitatibus dolorum odit aliquid sit dolores? Molestiae, velit laborum.',
    schedule: [
      'Saturday-Sunday: 8:00am - 10:00am',
      'Monday-Tuesday: 10:00am - 12:00pm',
      'Wednesday-Friday: 3:00pm - 6:00pm',
    ],
    image: '/images/solo.jpg',
  },
  Stretching: {
    title: 'Why Choose Stretching?',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quibusdam dolores odio officiis officia assumenda aut tempore doloribus eaque! Distinctio nam necessitatibus dolorum odit aliquid sit dolores? Molestiae, velit laborum.',
    schedule: [
      'Saturday-Sunday: 8:00am - 10:00am',
      'Monday-Tuesday: 10:00am - 12:00pm',
      'Wednesday-Friday: 3:00pm - 6:00pm',
    ],
    image: '/images/stret.webp',
  },
};

function Classes() {
  const [activeTab, setActiveTab] = useState('Yoga');

  const { title, description, schedule, image } = classData[activeTab];

  return (
    <div id="classes" className="classes">
      <div className="background"></div>
      <div className="container">
        <div className="classes-title">
          <h2>OUR CLASSES</h2>
          <div className="divider"></div>
          <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
        </div>
        <div className="tab-menu">
          {Object.keys(classData).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={`class-content ${activeTab ? 'active' : ''}`}>
          <div className="class-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <h3>When it comes to {activeTab}, Your Time.</h3>
            {schedule.map((time, idx) => (
              <p key={idx}>{time}</p>
            ))}
          </div>
          <div className="class-image">
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
