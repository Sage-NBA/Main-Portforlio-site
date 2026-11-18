import { Routes, Route } from "react-router-dom";
import { Home } from "./component";
import About from "./app/About";
import Services from "./app/Services";
import Contact from "./app/Contact";
import ProjectsPage from "./app/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
