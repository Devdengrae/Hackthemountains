import React from 'react';
import './schedule.css';

const Schedule = () => {
  const schedule = [
    { time: '09:00 AM', event: 'Opening Ceremony', description: 'Welcome and introduction to the hackathon.' },
    { time: '10:00 AM', event: 'Team Formation', description: 'Opportunity for participants to form teams.' },
    { time: '11:00 AM', event: 'Hacking Begins', description: 'Start of the hacking period.' },
    { time: '01:00 PM', event: 'Lunch Break', description: 'Time for lunch and networking.' },
    { time: '02:00 PM', event: 'Workshop', description: 'Optional workshop session for participants.' },
    { time: '06:00 PM', event: 'Dinner Break', description: 'Dinner break for participants.' },
    { time: '08:00 PM', event: 'Hacking Ends', description: 'End of the hacking period.' },
    { time: '09:00 PM', event: 'Closing Ceremony', description: 'Closing remarks and prize distribution.' },
  ];

  return (
    <section className="section schedule">
      <h2>Schedule</h2>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>
            <strong>{item.time}</strong>
            <div>
              <p>{item.event}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Schedule;
  