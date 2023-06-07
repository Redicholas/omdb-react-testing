import { ChangeEvent, useState } from "react";
import { IMovie } from "./models/IMovie";
import { getMovies } from "./services/getMovies";
import SearchInput from "./components/SearchInput";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  const [query, setQuery] = useState("");
  const [foundMovies, setFoundMovies] = useState<IMovie[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  async function search() {
    const movies: IMovie[] = await getMovies(query);
    setFoundMovies(movies);
  }

  return (
    <main>
      <SearchInput onChange={handleChange} onSearch={search} />
      <MovieDisplay movies={foundMovies} />
    </main>
  );
}