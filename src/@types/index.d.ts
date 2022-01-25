import * as Redux from "redux";
import { Task } from "redux-saga";

declare module "redux" {
  export interface Store {
    sagaTask: Task;
  }
}

export interface MoviesListProps {
  title: string;
  poster_path: string;
  id: number;
}

export interface MovieDetailGenre {
  id: number;
  name: string;
}

export interface MovieDetailsProps {
  backdrop_path: string;
  genres: MovieDetailGenre[];
  id: number;
  overview: string;
  release_date?: Date;
  title: string;
  cast: CastProps[]
}

export interface MovieState {
  selectedMovie: MovieDetailsProps;
  trendingMovies: MoviesListProps[];
}

export interface CastProps {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface StoreState {
  movie: MovieState;
}

interface MovieDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object | null;
  budget: integer;
  genres: MovieDetailGenre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: object[];
  production_countries: object[];
  release_date: Date;
  revenue: 401972153;
  runtime: 157;
  spoken_languages: object[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieListResponse {
  adult: boolean;
  backdrop_path: string;
  id: number;
  genre_ids: number[];
  title: string;
  original_language: string;
  original_title: string;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  overview: string;
  release_date: Date;
  popularity: number;
  media_type: string;
}

export interface CastResponse {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}