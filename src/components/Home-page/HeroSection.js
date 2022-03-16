import React from "react";
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div class="hero-section d-sm-flex align-items-center justify-content-between w-100">
    <div class="col-md-4 mx-auto mb-4 mb-sm-0 headline">
      <h1 class="display-4 mb-5 font-weight-bold">My movie <span>Library</span></h1>

      <Link to="search">Search</Link>
    </div>

    <div class="clipped col-md-8 h-100"></div>
  </div>
);

export default HeroSection;