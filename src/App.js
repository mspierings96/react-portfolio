import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("about");
  return (
    <div>
      <Header page={page} setPage={setPage} />
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
      {page === "resume" && <Resume />}
      {page === "portfolio" && <Portfolio />}
      <Footer />
    </div>
  );
}

export default App;
