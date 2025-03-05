'use client';

import { useState, useEffect } from 'react';

interface TimeDisplayProps {
  timezone: string;
}

export default function TimeDisplay({ timezone }: TimeDisplayProps) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: timezone
      };
      
      const currentTime = new Intl.DateTimeFormat('en-GB', options).format(new Date());
      setTime(currentTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return <div>{time} (UK)</div>;
}