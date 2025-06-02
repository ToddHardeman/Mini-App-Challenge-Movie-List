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

  const handleAddMovie = async () => {
    if (newMovie.title && newMovie.cover) {
      try {
        const response = await fetch('http://localhost:8080/movies', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...newMovie, watched: false }),
        });

        if (response.ok) {
          const addedMovie = await response.json();
          setMovies([...movies, addedMovie]); 
          setNewMovie({ title: '', cover: '' });
        } else {
          console.log('Error adding movie. response not ok');
        }
      } catch (error) {
        console.log('Error adding movie in the catch:', error);
      }
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/movies/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMovies(movies.filter((movie) => movie.id !== id));
      } else {
        console.log('Error deleting movie, response not ok');
      }
    } catch (error) {
      console.log('Error deleting movie in the catch:', error);
    }
  };

  return (
    <div className="movie-list">
      <h1 className="header">Toddflix</h1>


      <div className="subheader">
        <div className="add-movie">
          <input type="text" className="add-movie-input" placeholder="Movie Title" value={newMovie.title} onChange={(addTitle) => setNewMovie({ ...newMovie, title: addTitle.target.value })} />
          <input type="text" className="add-movie-input" placeholder="Cover URL" value={newMovie.cover} onChange={(addCover) => setNewMovie({ ...newMovie, cover: addCover.target.value })}/>
          <button className="add-movie-button" onClick={handleAddMovie}>Add Movie</button>
        </div>
      </div>


      <div className="category">
        <h2 className="category-title">New on Toddflix</h2>
        <div className="movie-row"> {movies.map((movie, index) => (
            <div key={index} className="movie-item">
              <button className='delete-button' onClick={() => handleDeleteMovie(index)}>X</button>
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
              <button className='delete-button' onClick={() => handleDeleteMovie(index)}>X</button>
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