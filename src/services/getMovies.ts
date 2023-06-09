import { IMovie } from "../models/IMovie";
import axios from "axios";

export async function getMovies(query: string): Promise<IMovie[]> {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=a4264975&s=${query}`);
    const movies = await response.data.Search;
    return movies;
  }