import { IMovie } from "../models/IMovie";

interface MovieDisplayProps {
    movies: IMovie[];
  }
  
  export default function MovieDisplay(props: MovieDisplayProps) {
    const imdbUrl = "https://www.imdb.com/title/";

    const displayedMovies = props.movies.map((movie) => (
        <div key={movie.imdbID} className="flex flex-col items-center gap-6 
        border border-black bg-white p-10 w-full h-full">
          <h2 className="text-2xl lg:text-3xl font-bold">{movie.Title}</h2>
          <a href={imdbUrl + movie.imdbID} title="View details on IMDB">
            <img src={movie.Poster} alt={movie.Title} className="rounded-xl" />
          </a>
          <p className="font-bold">{movie.Year}</p>
          <a href={imdbUrl + movie.imdbID}
            className="underline hover:text-yellow-400">IMDB</a>
        </div>
      ));

    return (
      <div className="grid items-center lg:grid-cols-2">
        {displayedMovies}
      </div>
    );
  }