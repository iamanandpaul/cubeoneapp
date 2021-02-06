import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Download from "./Components/Download/Download";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <About />
      <Features />
      <Download />
      <Contact />
    </Router>
  );
}

export default App;
