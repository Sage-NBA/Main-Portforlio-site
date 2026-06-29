import {Home} from "./component";
import {Routes, Route} from "react-router-dom";
import About from "./app/About";
import Services from "./app/Services";
import Contact from "./app/Contact"

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
