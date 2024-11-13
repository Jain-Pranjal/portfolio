import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Kolkata'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="text-right p-4">
      <div className="text-lg font-bold">
        {formatTime(time)}
      </div>
      <div className="text-sm font-bold">
        {formatDate(time)}
      </div>
    </div>
  );
};

export default Clock;