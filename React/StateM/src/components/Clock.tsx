import React, { useEffect, useState } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString()); // Fix: Call toLocaleTimeString()
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, []);

    return (
      <>
        <h1>{time}</h1>
        <input placeholder="Type here..." />
      </>
    );
}
