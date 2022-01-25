
import { MovieDetailsProps, MovieDetailsResponse, MovieListResponse, MoviesListProps } from '../@types'

class Mapper {

  movieDetailsResponseToDetals(data: MovieDetailsResponse): MovieDetailsProps {
    return {
      backdrop_path: data.backdrop_path, 
      genres: data.genres,
      id: data.id, 
      overview: data.overview, 
      release_date: data.release_date,
      title: data.title,
    }
  }

  movieListResponseToMovieList(data: MovieListResponse[]): MoviesListProps[] {
    return data.map(movie => {
      return {
        title: movie.title,
        poster_path: movie.poster_path,
        id: movie.id,
      }
    })
  }
  

}

export const mapper = new Mapper()

