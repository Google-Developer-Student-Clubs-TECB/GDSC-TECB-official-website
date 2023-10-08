import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/BlogPage/Blog";
import Contact from "./pages/ContactPage/Contact";
import Events from "./pages/EventsPage/Events";
import Projects from "./pages/ProjectsPage/Projects";
import Team from "./pages/TeamPage/Team";
import './App.css';


function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
           <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
