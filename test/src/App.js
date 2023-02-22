
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} > </Route>
        <Route exact path="/contact" element={<Contact />} > </Route>
      </Routes>
     
    </Router>
  );
}

export default App;
