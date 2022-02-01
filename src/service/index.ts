import axios from "axios";
import {
  CastResponse,
  MovieDetailsResponse,
  MovieListResponse,
  TvListResponse,
} from "../@types";

class Service {
  async getMovieDetails(id: string) {
    const response = await this.getAxiosInstance().get(
      `/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=pt-br`
    );
    return response.data as MovieDetailsResponse;
  }

  async getTrendingMoviesPerDay() {
    const response = await this.getAxiosInstance().get(
      `/trending/movie/day?api_key=${process.env.TMDB_API_KEY}&language=pt-br`
    );
    return response.data.results as MovieListResponse[];
  }

  async getTrendingMoviesPerWeek() {
    const response = await this.getAxiosInstance().get(
      `/trending/movie/week?api_key=${process.env.TMDB_API_KEY}&language=pt-br`
    );
    return response.data.results as MovieListResponse[];
  }

  async getTrendingTvPerDay() {
    const response = await this.getAxiosInstance().get(
      `/trending/tv/day?api_key=${process.env.TMDB_API_KEY}&language=pt-br`
    );
    return response.data.results as TvListResponse[];
  }

  async getTrendingTvPerWeek() {
    const response = await this.getAxiosInstance().get(
      `/trending/tv/week?api_key=${process.env.TMDB_API_KEY}&language=pt-br`
    );
    return response.data.results as TvListResponse[];
  }

  async getMovieCast(id: string) {
    const response = await this.getAxiosInstance().get(
      `/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=pt-br`
    );
    return response.data.cast as CastResponse[];
  }

  private getAxiosInstance() {
    return axios.create({ baseURL: "https://api.themoviedb.org/3/" });
  }
}

export const apiService = new Service();
