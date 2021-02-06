import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Download from "./Components/Download/Download";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Scroll from "./Components/Scroll/Scroll";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <About />
      <Features />
      <Download />
      <Contact />
      <Footer />
      <Scroll />
    </Router>
  );
}

export default App;
