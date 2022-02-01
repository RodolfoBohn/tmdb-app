import {
  AllTrendingMoviesProps,
  AllTrendingMoviesResponse,
  AllTrendingTvProps,
  AllTrendingTvResponse,
  CastProps,
  CastResponse,
  MovieDetailsProps,
  MovieDetailsResponse,
  MovieListResponse,
  MoviesListProps,
  TvListProps,
  TvListResponse,
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

  allMoviesResponseToProps(
    data: AllTrendingMoviesResponse
  ): AllTrendingMoviesProps {
    return {
      trendingMoviesPerDay: this.movieListResponseToMovieList(data.trendingMoviesPerDay),
      trendingMoviesPerWeek: this.movieListResponseToMovieList(data.trendingMoviesPerWeek),
    }
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

  allTvResponseToProps(data: AllTrendingTvResponse): AllTrendingTvProps {
    return {
      trendingTvPerDay: this.tvResponseToProps(data.trendingTvPerDay),
      trendingTvPerWeek: this.tvResponseToProps(data.trendingTvPerWeek)
    }
  }

  private tvResponseToProps(data: TvListResponse[]): TvListProps[] {
    return data.map(tv => {
      return {
        id: tv.id,
        poster_path: tv.poster_path,
        title: tv.name
      }
    })
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
