import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Industries from "./Pages/Industries";
import Consultants from "./Pages/Consultants";
import Services from "./Pages/Services";
import AgoraMeeting from "./Pages/AgoraMeeting";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="industries" element={<Industries />} />
            <Route path="consultants" element={<Consultants />} />
            <Route path="services" element={<Services />} />
            <Route path="meeting" element={<AgoraMeeting />} />
         </Routes>
      </>
   );
}

export default App;
