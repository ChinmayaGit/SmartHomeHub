// App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Rooms from "./Rooms";
import Switch from "./Switch";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Rooms/Switch" element={<Switch />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
