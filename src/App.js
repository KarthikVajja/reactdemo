import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/contact"> Contact </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
