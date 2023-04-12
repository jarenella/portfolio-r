import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './reset.css';

import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import Header from './components/Header';
import Bumper from './components/Bumper';

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Header />
          <Bumper />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectName" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            {/* todo: set up about path */}
            <Route path="about" element={"filler"} />
            {/* todo: set up 404 path */}
            <Route path="*" element={"filler"} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
