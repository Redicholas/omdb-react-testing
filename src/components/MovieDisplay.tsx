import { IMovie } from "../models/IMovie";

interface MovieDisplayProps {
    movies: IMovie[];
  }
  
  export default function MovieDisplay(props: MovieDisplayProps) {

    const displayedMovies = props.movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      ));

    return (
      <div>
        {displayedMovies}
      </div>
    );
  }