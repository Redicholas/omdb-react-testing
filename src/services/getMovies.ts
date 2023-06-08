import axios from "axios";
import { IMovie } from "../models/IMovie";

export async function getMovies(query: string): Promise<IMovie[]> {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=a4264975&s=${query}`);
    const data = await response.data.Search;
    return data;
  }