import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countDownDate = new Date('2024-06-20T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="header">
      <h1>Countdown to HackTheMountain</h1>
      <p>December 31, 2024</p>
      <div className="countdown">
        <span>{countdown.days}</span> days&nbsp;
        <span>{countdown.hours}</span> hours&nbsp;
        <span>{countdown.minutes}</span> minutes&nbsp;
        <span>{countdown.seconds}</span> seconds
      </div>
    </div>
  );
};

export default Header;
