import '../styles/MovieList.css';
import { useEffect, useState } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log('Error fetching movies:', error));
  }, []);

  return (
    < >
    <div className='movie-list'>
          <h1>Here are your movies</h1>
          <ul>
            {movies.map((listOfMovies, index) => (
              <li key={index} className='movie-item'>
                <h3>{listOfMovies.title}</h3>
                <img src={listOfMovies.cover} alt={listOfMovies.title} className='movie-cover' />
              </li>
            ))}
          </ul>
    </div>
    </>
  )
}

export default MovieList;
