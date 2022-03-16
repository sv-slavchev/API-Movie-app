import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home-page/Home";
import SearchPage from "./components/Search-page/SearchPage";
import MovieDetails from "./components/MovieDetails-page/MovieDetails";

const Main = (movie) => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/movie/:Title" element={<MovieDetails />} />
    </Routes>
  </main>
);

export default Main;
