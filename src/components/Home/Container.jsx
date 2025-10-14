import { React, useState } from "react";
import Spotify from "../About/Spotify";

const Cont = () => {
  const [isSpotifyModalOpen, setIsSpotifyModalOpen] = useState(false);

  const openSpotifyModal = () => {
    setIsSpotifyModalOpen(!isSpotifyModalOpen);
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="left">
            <h3>Hello World,</h3>
            <h1>
              I'm{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  textShadow: "black 4px 4px 2px",
                  fontSize: "40px",
                }}
              >
                ADITYA GAUR
              </span>
            </h1>

            <p className="text-cont">
              Final Year B.Tech | Software Engineer skilled in C++, MERN,
              Angular, Java Spring Boot, Next.js Passionate about <br /> Problem
              Solving, Scalable Backend Development, and applying Agentic AI &
              RAG for building intelligent, data-driven systems.
            </p>
          </div>

          <div className="right">
            <div className="frame">
              <img src="images/adgaur.jpg" alt="" id="img" />
              {/* <button
                className="spotify-button"
                onClick={openSpotifyModal}
                title="Listen to my Spotify playlist"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.5c-.2.32-.63.42-.95.22-2.5-1.53-5.65-1.88-8.36-1.03-.37.09-.76-.15-.85-.52-.09-.37.15-.76.52-.85 3.03-.95 6.54-.55 9.37 1.2.33.2.43.63.22.95zm1.1-2.9c-.25.4-.78.53-1.18.28-2.87-1.76-7.25-2.27-10.65-1.24-.46.14-.95-.12-1.09-.58-.14-.46.12-.95.58-1.09 3.9-1.18 8.7-.6 11.99 1.44.4.25.53.78.28 1.18zm.1-3.05C15.27 8.98 9.57 8.8 6.12 9.7c-.54.16-1.11-.14-1.27-.68-.16-.54.14-1.11.68-1.27 4.01-1.2 10.25-.98 14.18 1.4.49.3.66.95.35 1.44-.3.49-.95.66-1.44.35z"
                    fill="#1DB954"
                  />
                </svg>
              </button> */}
            </div>
          </div>
          <div />
        </div>
      </div>

     
      {/* {isSpotifyModalOpen && (
        <div className="spotify-modal-overlay">
          <div className="spotify-modal">
            <div className="spotify-modal-content">
              <Spotify />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Cont;
