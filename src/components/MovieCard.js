import React from "react";

function App() {
  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };
}

function SocialMedia({ socialLinks: { github, linkedin } }) {
  return (
    <div>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

function MovieCard({
  title,
  genres,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}
  



export default MovieCard;
