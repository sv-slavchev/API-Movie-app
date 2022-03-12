import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Search from "./Search";
import MovieDetails from './MovieDetails';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/movies/movie-details" element={<MovieDetails/>} />
    </Routes>
  </main>
);

export default Main;