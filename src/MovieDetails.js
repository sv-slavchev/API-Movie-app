import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRating from "./StarRating";

const MovieDetails = () => {
  return (
    <>
      <div>
        <body class="detail">
          <div id="site-container">
            <main id="main">
              <section id="content">
                <div class="inner-container">
                  <div class="movie-image">
                    <img src="https://image.tmdb.org/t/p/original/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" alt="Captain Marvel" />
                    <div class="blue" id="buttonposter">
                      <p class="d-flex justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                        <span>Play</span>
                        <span></span>
                      </p>
                    </div>
                  </div>

                  <div class="movie-info">
                    <span class="rating">
                      <b>6.9</b>
                    </span>
                    <h1 class="entry-title">Captain Marvel</h1>
                    <em class="tagline">Higher. Further. Faster.</em>
                    <div class="movie-data">
                      <div class="details">
                        <i class="hd">HD</i>
                        <span id='Rated'>PG-13</span>
                        <span><a href="#" rel="tag">2019</a></span>
                        |
                        <span><a href="#">Action</a></span>
                        |
                        <span>123 min</span>
                      </div>
                    </div>
                    <p class="movie-description">
                      <span class="trama">The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.&hellip;</span>
                      <div class="persons"></div>
                    </p>
                  </div>

                  <div class="movie-actions">
                    <ul class="extra">
                      <li id="share">
                        <a class="a2a_dd d-flex justify-content-between" href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                          <span>Share</span>
                          <span></span>
                        </a>
                      </li>
                      <li id="trailer">
                        <a href="http://www.youtube.com/watch?v=Y_JGZTlUbZg" class="d-flex justify-content-between" rel="modal" target="_blank" data-modal-type="iframe">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                          </svg>
                          <span>Trailer</span>
                          <span></span>
                        </a>
                      </li>
                      <li id="download-button">
                        <a href="https://www.mirrored.to/files/KR4WZQ5D/" class="d-flex justify-content-between" rel="nofollow" target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                          </svg>
                          <span>Download</span>
                          <span></span>
                        </a>
                      </li>
                      <li id="streaming-hd">
                        <a class="blue d-flex justify-content-between" id="videoplayer1" title="360p" href="https://streamable.com/e/qjzbkd" title="360p" rel="modal" data-modal-movie="movie1" data-modal-type="iframe">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                          </svg>
                          <span>Streaming <em>HD</em></span>
                          <span></span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li id="play-button">
                        {/* <div class="play purple">Watch now in <em>4k</em></div> */}
                        <div class="play purple">Advertise <em>Here</em></div>
                      </li>
                      <li id="quality-button">
                        <div class="switch">
                          <input id="quality-switch" type="checkbox" value="" />
                          <label for="quality-switch" class="hd">360p</label>
                          <label for="quality-switch" class="switch-toggle"></label>
                          <label for="quality-switch" class="fullhd">1080p</label>
                        </div>
                        <audio id="audio" src="assets/images/click.mp3" autostart="false"></audio>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <StarRating />
            </main>
          </div>
        </body>
      </div>
    </>
  );
};

export default MovieDetails;