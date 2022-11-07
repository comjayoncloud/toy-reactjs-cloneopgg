import "./App.css";
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Page/Home";
import SearchResult from "./Page/SearchResult";
function App() {
  return (
    <Routes>
      <Route path="/jw.gg" element={<Home />} />
      <Route path="/jw.gg/searchResult" element={<SearchResult />} />
    </Routes>
  );
}

export default App;
