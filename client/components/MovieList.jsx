import '../styles/MovieList.css';
import { useEffect, useState } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', cover: '' });

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log('Error fetching movies:', error));
  }, []);

  return (
    <div className="movie-list">
      <h1 className="header">Toddflix</h1>

      <div className="category">
        <h2 className="category-title">New on Toddflix</h2>
        <div className="movie-row">
          {movies.map((movie, index) => (
            <div key={index} className="movie-item">
              <img src={movie.cover} alt={movie.title} className="movie-cover" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="category">
        <h2 className="category-title">Popular Movies</h2>
        <div className="movie-row">
          {movies.map((movie, index) => (
            <div key={index} className="movie-item">
              <img src={movie.cover} alt={movie.title} className="movie-cover" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
