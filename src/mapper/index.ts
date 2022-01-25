import {
  CastProps,
  CastResponse,
  MovieDetailsProps,
  MovieDetailsResponse,
  MovieListResponse,
  MoviesListProps,
} from "../@types";

interface MovieDetailsToResponseProps {
  movie: MovieDetailsResponse;
  cast: CastResponse[];
}
class Mapper {
  movieDetailsResponseToDetals({
    movie,
    cast,
  }: MovieDetailsToResponseProps): MovieDetailsProps {
    return {
      backdrop_path: movie.backdrop_path,
      genres: movie.genres,
      id: movie.id,
      overview: movie.overview,
      release_date: movie.release_date,
      title: movie.title,
      cast: this.castResponseToDetails(cast),
    };
  }

  movieListResponseToMovieList(data: MovieListResponse[]): MoviesListProps[] {
    return data.map((movie) => {
      return {
        title: movie.title,
        poster_path: movie.poster_path,
        id: movie.id,
      };
    });
  }

  private castResponseToDetails(cast: CastResponse[]): CastProps[] {
    return cast.map((c) => {
      return {
        id: c.id,
        name: c.name,
        profile_path: c.profile_path,
        character: c.character,
      };
    });
  }
}

export const mapper = new Mapper();
