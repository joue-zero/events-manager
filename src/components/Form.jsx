import { useState } from "react";
import "./form.css";

export default function Form({ setEvents }) {
    const [event, setEvent] = useState({
        name: "",
        by: "",
        on: ""
    });

    let tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    let tomorrowDate = tomorrow.toISOString().split('T')[0];

    const handleNameChange = (e) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            name: e.target.value
        }));
    };

    const handleOrganizerChange = (e) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            by: e.target.value
        }));
    };

    const handleDateChange = (e) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            on: e.target.value
        }));
    };

    const addEvent = () => {
        setEvents((prevEvents) => [event, ...prevEvents]);
    };

    return (
        <div className="container form">
            <h3>Add Event</h3>
            <input type="text" placeholder="Enter Event Name" onChange={handleNameChange} />
            <input type="text" placeholder="Enter Event Organizer" onChange={handleOrganizerChange} />
            <input type="date" min={tomorrowDate} onChange={handleDateChange} />
            <button onClick={addEvent}>Add event</button>
        </div>
    );
}