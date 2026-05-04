import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState({});

    const updateTime = () => {
        const utcDate = new Date();
        setTime({
            benin: utcDate.toLocaleString('en-US', { timeZone: 'Africa/Porto-Novo' }),
            utc: utcDate.toISOString().replace('T', ' ').substring(0, 19),
            us: utcDate.toLocaleString('en-US', { timeZone: 'America/New_York' }),
            europe: utcDate.toLocaleString('en-US', { timeZone: 'Europe/London' }),
        });
    };

    useEffect(() => {
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>Digital Clock</h2>
            <p>Benin: {time.benin}</p>
            <p>UTC: {time.utc}</p>
            <p>US (New York): {time.us}</p>
            <p>Europe (London): {time.europe}</p>
        </div>
    );
};

export default DigitalClock;