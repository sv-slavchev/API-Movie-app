import React from "react";

const HeroSection = () => (
  <div class="hero-section d-sm-flex align-items-center justify-content-between w-100">
    <div class="container col-md-4 mx-auto mb-4 mb-sm-0 headline">
      <h1 class="display-4 my-4 font-weight-bold">My movie <span>Library</span></h1>

      <p class="text-secondary text-uppercase">Subheadline</p>

      <a href="#" class="btn px-5 py-3 text-white mt-3 mt-sm-0">Search</a>
    </div>

    <div class="col-md-8 h-100 clipped"></div>
  </div>
);

export default HeroSection;