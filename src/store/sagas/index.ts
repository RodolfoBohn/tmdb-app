import { all, call, put, takeLatest } from "redux-saga/effects";
import { mapper } from "../../mapper";
import { apiService } from "../../service";
import { MovieDetailsResponse, MovieListResponse } from "../../@types";
import { getSelectedMovieSuccess, getTrendingMoviesSuccess, movieActionProps, MOVIE_ACTION } from "../action";

function* getTrendingMovies() {
  const response: MovieListResponse[] = yield call(()=> apiService.getTrendingMovies())

  const formattedMovieList = mapper.movieListResponseToMovieList(response)

  yield put(getTrendingMoviesSuccess(formattedMovieList));
  
}

function* getSelectedMovie({id}:movieActionProps ) {

  const response:MovieDetailsResponse = yield call(()=> apiService.getMovieDetails(id!))

  const formattedMovie = mapper.movieDetailsResponseToDetals(response)

  yield put(getSelectedMovieSuccess(formattedMovie))
}

function* rootSaga () {
  yield all([
    takeLatest(MOVIE_ACTION.GET_SELECTED_MOVIE_SAGA, getSelectedMovie),
    takeLatest(MOVIE_ACTION.GET_TRENDING_MOVIES_SAGA, getTrendingMovies),
  ])
}

export default rootSaga