import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About/>} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </Router>

    
    </>
  );
}

export default App;
