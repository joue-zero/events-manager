import React, { useState, useEffect } from 'react';

export default function Event({ name, by, on, setEvents }) {
    const [timeLeft, setTimeLeft] = useState('d h m s');

    useEffect(() => {
        const eventDate = new Date(on);
        const timer = setInterval(() => {
            const currentDate = new Date();
            const timeRemaining = eventDate - currentDate;

            if (timeRemaining <= 0) {
                clearInterval(timer);
                setTimeLeft('Event has ended');
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [on]);
    function handleDelete() {
        setEvents((prevEvents) => prevEvents.filter((event) => !(event.name === name && event.by === by && event.on === on)));
    }

    return (
        <div className="event">
            <h3>{name}</h3>
            <div className="info">
                <span>By</span>
                <span>{by}</span>
            </div>
            <div className="info">
                <span>On</span>
                <span>{on}</span>
            </div>
            <div className="info">
                <span>Time Left</span>
                <span>{timeLeft}</span>
            </div>
            <div className="info">
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}