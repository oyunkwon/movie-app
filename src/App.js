import { useState, useEffect, response } from "react";
import ReactDOM from "react-dom/client";
import Movie from "./components/Movie.js";
import Home from "./routes/Home";
import Detail from "./routes/Detail.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
