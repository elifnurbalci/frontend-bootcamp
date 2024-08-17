import React, { useState } from 'react';

function Classes() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Yoga', 'Group', 'Solo', 'Stretching'];
  const classContents = [
    {
      title: 'Why Choose Yoga?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorem placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm',
      ],
      image: './public/images/yoga.jpg',
    },
    {
      title: 'Why Choose Group?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorem placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm',
      ],
      image: './public/images/group.webp',
    },
    {
      title: 'Why Choose Solo?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorem placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm',
      ],
      image: './public/images/solo.jpg',
    },
    {
      title: 'Why Choose Stretching?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorem placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm',
      ],
      image: './public/images/stret.webp',
    },
  ];

  return (
    <div>
      <div id="classes" className="classes">
        <div className="background"></div>
        <div className="container">
          <div className="classes-title">
            <h2>OUR CLASSES</h2>
            <div className="divider"> </div>
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
          </div>
          <div className="tab-menu">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="class-content">
            <div className="class-info">
              <h3>{classContents[activeTab].title}</h3>
              <p>{classContents[activeTab].description}</p>
              <h3>When comes {tabs[activeTab]} Your Time.</h3>
              {classContents[activeTab].schedule.map((time, idx) => (
                <p key={idx}>{time}</p>
              ))}
            </div>
            <div className="class-image">
              <img src={classContents[activeTab].image} alt={tabs[activeTab]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
