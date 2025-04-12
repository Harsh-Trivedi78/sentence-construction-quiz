// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SentenceConstruction from "./components/SentenceConstruction";
import Quiz from "./pages/Quiz"; // ✅ Correctly load parent component
import Result from "./components/Result"; // optional

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SentenceConstruction />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
