import Event from "./Event.jsx";
import "./content.css";
export default function Content({events, setEvents}) {
    return (
            events.length ? (<div className="container">
                <div className="content">
                    {events.map((event, index) => {
                        return <Event key={index} {...event} setEvents={setEvents}/>

                    })}
                </div>
            </div>) : ""
    );
}