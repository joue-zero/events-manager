import "./App.css"
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Content from "./components/Content.jsx";
import {useState} from "react";

function App() {
    const [events, setEvents] = useState([]);
  return (
    <>
     <Header />
     <Form setEvents={setEvents}/>
     <Content events={events} setEvents={setEvents}/>
    </>
  )
}
export default App
