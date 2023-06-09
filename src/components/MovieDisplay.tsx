import { IMovie } from "../models/IMovie";

interface MovieDisplayProps {
    movies: IMovie[];
  }
  
  export default function MovieDisplay(props: MovieDisplayProps) {

    const displayedMovies = props.movies.map((movie) => (
        <div key={movie.imdbID} className="flex flex-col items-center gap-6 border 
            p-10 w-full h-full">
          <h2 className="text-2xl lg:text-4xl font-bold">{movie.Title}</h2>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      ));

    return (
      <div className="grid items-center lg:grid-cols-2">
        {displayedMovies}
      </div>
    );
  }