import axios from "axios";
import { type Movie } from "../types/movies";


const BASE_URL = "https://api.themoviedb.org/3";

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface FetchMoviesProps {
  query: string;
  page?: number;
  language?: string;
}

export async function fetchMovies({
  query,
  page = 1,
  language = "en-US",
}: FetchMoviesProps): Promise<MovieResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<MovieResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        page,
        language,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
