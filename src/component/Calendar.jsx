import React, { useState, useEffect } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDay, setActiveDay] = useState(21);
  
  const changeInfo = (i) => {
    setActiveDay(i);
  };

  const handlePrevNext = (value) => {
    setActiveDay(parseInt(value));
  };

  useEffect(() => {
    if (currentDate.getMonth() === 1) {
      setActiveDay(currentDate.getDate());
    }
  }, [currentDate]);

  const days = [];
  for (let i = 1; i <= 28; i++) {
    days.push(
      <div
        key={i}
        className={`calendar-day ${i === activeDay ? "active" : ""}`}
        onClick={() => changeInfo(i)}
      >
        {i}
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-year">February 2022</div>
        <div className="calendar-content">
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>Th</span>
          <span>F</span>
          <span>S</span>
          <span>S</span>
          {days}
        </div>
      </div>
      <div className="date">
        <h1>{activeDay}</h1>
        <h3>February</h3>
        
        <button
          value={activeDay - 1}
          onClick={(e) => handlePrevNext(e.target.value)}
          disabled={activeDay <= 1}
          className="Previous"
        >
          Previous
        </button>
        <button
          value={activeDay + 1}
          onClick={(e) => handlePrevNext(e.target.value)}
          disabled={activeDay >= 28}
          className="Previous"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Calendar;
