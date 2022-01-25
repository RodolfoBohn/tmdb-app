import axios from 'axios'
import { MovieDetailsResponse, MovieListResponse } from '../@types'


class Service {

  async getMovieDetails(id: string) {
    const response = await this.getAxiosInstance().get(`/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`)
    return response.data as MovieDetailsResponse
  }

  async getTrendingMovies() {
    const response = await this.getAxiosInstance().get(`/trending/movie/day?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`)
    return response.data.results as MovieListResponse[]
  }
  

  private getAxiosInstance() {
    return axios.create({baseURL:'https://api.themoviedb.org/3/'})
  }

}

export const apiService = new Service()

