import { all, call, put, takeLatest } from "redux-saga/effects";
import { mapper } from "../../mapper";
import { apiService } from "../../service";
import {
  CastResponse,
  MovieDetailsResponse,
  MovieListResponse,
  TvDetailsResponse,
  TvListResponse,
} from "../../@types";
import {
  getSelectedMovieSuccess,
  getSelectedTvSuccess,
  getTrendingMoviesSuccess,
  getTrendingTvSuccess,
  movieActionProps,
  MOVIE_ACTION,
  tvActionProps,
  TV_ACTION,
} from "../action";

function* getTrendingMovies() {
  const responsePerDay: MovieListResponse[] = yield call(() =>
    apiService.getTrendingMoviesPerDay()
  );
  const responsePerWeek: MovieListResponse[] = yield call(() =>
    apiService.getTrendingMoviesPerWeek()
  );
  const formattedMovieList = mapper.allMoviesResponseToProps({
    trendingMoviesPerDay: responsePerDay,
    trendingMoviesPerWeek: responsePerWeek,
  });

  yield put(getTrendingMoviesSuccess(formattedMovieList));
}

function* getTrendingTv() {
  const responsePerDay: TvListResponse[] = yield call(() =>
    apiService.getTrendingTvPerDay()
  );
  const responsePerWeek: TvListResponse[] = yield call(() =>
    apiService.getTrendingTvPerWeek()
  );
  const formattedTvList = mapper.allTvResponseToProps({
    trendingTvPerDay: responsePerDay,
    trendingTvPerWeek: responsePerWeek,
  });

  yield put(getTrendingTvSuccess(formattedTvList));
}

function* getSelectedMovie({ id }: movieActionProps) {
  const movieResponse: MovieDetailsResponse = yield call(() =>
    apiService.getMovieDetails(id!)
  );
  const castResponse: CastResponse[] = yield call(() =>
    apiService.getMovieCast(id!)
  );

  const formattedMovie = mapper.movieDetailsResponseToDetals({
    movie: movieResponse,
    cast: castResponse,
  });

  yield put(getSelectedMovieSuccess(formattedMovie));
}

function* getSelectedTv({id}: tvActionProps) {
  
  const response: TvDetailsResponse = yield call(() => apiService.getTvDetails(id!)) 
  const castResponse: CastResponse[] = yield call(() => apiService.getTvCast(id!))

  const tvDetailsFormatted = mapper.tvResponseDetailsToProps({tv:response, cast: castResponse})

  yield put(getSelectedTvSuccess(tvDetailsFormatted))

}

function* rootSaga() {
  yield all([
    takeLatest(MOVIE_ACTION.GET_SELECTED_MOVIE_SAGA, getSelectedMovie),
    takeLatest(MOVIE_ACTION.GET_TRENDING_MOVIES_SAGA, getTrendingMovies),
    takeLatest(TV_ACTION.GET_SELECTED_TV_SAGA, getSelectedTv),
    takeLatest(TV_ACTION.GET_TRENDING_TV_SAGA, getTrendingTv),
  ]);
}

export default rootSaga;
