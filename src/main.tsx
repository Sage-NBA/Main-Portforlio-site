import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {Navbar} from "./component";
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import {Social} from "./component";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
    <Social />
  </StrictMode>,
);
