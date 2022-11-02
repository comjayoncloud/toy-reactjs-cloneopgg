import "./App.css";
import Header from "./Component/Header";
import Ad from "./Component/Ad";
import MainPage from "./Component/MainPage";
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import SearchResult from "./Component/SearchResult";
function App() {
  return (
    <Routes>
      <Route path="/jw.gg" element={<Home />} />
      <Route path="/jw.gg/searchResult" element={<SearchResult />} />
    </Routes>
  );
}

export default App;
