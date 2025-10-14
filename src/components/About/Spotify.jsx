import React from "react";

function Spotify() {
  return (
    <div className="spotify-container">
      <iframe
        data-testid="embed-iframe"
        title="Spotify Playlist"
        style={{
          borderRadius: "12px",
          width: "100%",
          height: "152px",
        }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4PP3DA4J0N8?utm_source=generator&theme=0"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Spotify;
