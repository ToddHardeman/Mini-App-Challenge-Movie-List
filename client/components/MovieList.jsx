import '../styles/MovieList.css';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function MovieList() {

  return (
    < >
    <div className='movie-list'>
          <h1>This is the movie list screen.</h1>
          <ul>
            {movies.map((movie, index) => (
              <li key={index} className='movie-item'>
                {movie.title}
              </li>
            ))}
          </ul>
    </div>
    </>
  )
}

export default MovieList;
