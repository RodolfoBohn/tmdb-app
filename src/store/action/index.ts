import { AllTrendingMoviesProps, AllTrendingTvProps, MovieDetailsProps, TvDetailsProps } from "../../@types";

export interface movieActionProps {
  type: MOVIE_ACTION;
  payload?: any;
  id?: string;
}

export interface tvActionProps {
  type: TV_ACTION;
  payload?: any;
  id?: string;
}

export enum TV_ACTION {
  GET_TRENDING_TV_SAGA = "GET_TRENDING_TV_SAGA",
  GET_TRENDING_TV_SUCCESS = "GET_TRENDING_TV_SUCCESS",
  GET_SELECTED_TV_SAGA = "GET_SELECTED_TV_SAGA",
  GET_SELECTED_TV_SUCCESS = "GET_SELECTED_TV_SUCCESS",
}

export enum MOVIE_ACTION {
  GET_TRENDING_MOVIES_SAGA = "GET_TRENDING_MOVIES_SAGA",
  GET_TRENDING_MOVIES_SUCCESS = "GET_TRENDING_MOVIES_SUCCESS",
  GET_SELECTED_MOVIE_SAGA = "GET_SELECTED_MOVIE_SAGA",
  GET_SELECTED_MOVIE_SUCCESS = "GET_SELECTED_MOVIE_SUCCESS",
}


export function getTrendingTvSaga(): tvActionProps {
  return {
    type: TV_ACTION.GET_TRENDING_TV_SAGA,
  };
}

export function getTrendingTvSuccess(payload: AllTrendingTvProps): tvActionProps {
  return {
    type: TV_ACTION.GET_TRENDING_TV_SUCCESS,
    payload,
  };
}

export function getSelectedTvSaga(id: string): tvActionProps {
  return {
    type: TV_ACTION.GET_SELECTED_TV_SAGA, 
    id
  }
}

export function getSelectedTvSuccess(payload: TvDetailsProps): tvActionProps {
  return {
    type: TV_ACTION.GET_SELECTED_TV_SUCCESS, 
    payload
  }
}

export function getTrendingMoviesSaga(): movieActionProps {
  return {
    type: MOVIE_ACTION.GET_TRENDING_MOVIES_SAGA,
  };
}

export function getSelectedMovieSaga(id: string): movieActionProps {
  return {
    type: MOVIE_ACTION.GET_SELECTED_MOVIE_SAGA,
    id,
  };
}

export function getTrendingMoviesSuccess(
  payload: AllTrendingMoviesProps
): movieActionProps {
  return {
    type: MOVIE_ACTION.GET_TRENDING_MOVIES_SUCCESS,
    payload,
  };
}

export function getSelectedMovieSuccess(
  payload: MovieDetailsProps
): movieActionProps {
  return {
    type: MOVIE_ACTION.GET_SELECTED_MOVIE_SUCCESS,
    payload,
  };
}
