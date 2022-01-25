import { all, call, put, takeLatest } from "redux-saga/effects";
import { mapper } from "../../mapper";
import { apiService } from "../../service";
import { CastResponse, MovieDetailsResponse, MovieListResponse } from "../../@types";
import { getSelectedMovieSuccess, getTrendingMoviesSuccess, movieActionProps, MOVIE_ACTION } from "../action";

function* getTrendingMovies() {
  const response: MovieListResponse[] = yield call(()=> apiService.getTrendingMovies())

  const formattedMovieList = mapper.movieListResponseToMovieList(response)

  yield put(getTrendingMoviesSuccess(formattedMovieList));
  
}

function* getSelectedMovie({id}:movieActionProps ) {

  const movieResponse:MovieDetailsResponse = yield call(()=> apiService.getMovieDetails(id!))
  const castResponse: CastResponse[] = yield call(() => apiService.getMovieCast(id!))

  const formattedMovie = mapper.movieDetailsResponseToDetals({movie:movieResponse, cast: castResponse})

  yield put(getSelectedMovieSuccess(formattedMovie))
}

function* rootSaga () {
  yield all([
    takeLatest(MOVIE_ACTION.GET_SELECTED_MOVIE_SAGA, getSelectedMovie),
    takeLatest(MOVIE_ACTION.GET_TRENDING_MOVIES_SAGA, getTrendingMovies),
  ])
}

export default rootSaga