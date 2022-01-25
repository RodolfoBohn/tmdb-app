import { MovieDetailsProps, MoviesListProps } from "../../@types"

export interface movieActionProps {
  type: MOVIE_ACTION, 
  payload?: any
  id?: string
}

export enum MOVIE_ACTION {
  GET_TRENDING_MOVIES_SAGA = 'GET_TRENDING_MOVIES_SAGA', 
  GET_TRENDING_MOVIES_SUCCESS = 'GET_TRENDING_MOVIES_SUCCESS',
  GET_SELECTED_MOVIE_SAGA = 'GET_SELECTED_MOVIE_SAGA',
  GET_SELECTED_MOVIE_SUCCESS = 'GET_SELECTED_MOVIE_SUCCESS',
}


export function getTrendingMoviesSaga(): movieActionProps {
  return{
    type: MOVIE_ACTION.GET_TRENDING_MOVIES_SAGA,
  }
}

export function getSelectedMovieSaga(id: string): movieActionProps {
  return{
    type: MOVIE_ACTION.GET_SELECTED_MOVIE_SAGA,
    id,
  }
}

export function getTrendingMoviesSuccess(payload: MoviesListProps[]) : movieActionProps {
  return {
    type: MOVIE_ACTION.GET_TRENDING_MOVIES_SUCCESS, 
    payload
  }
}

export function getSelectedMovieSuccess(payload: MovieDetailsProps) : movieActionProps {
  return {
    type: MOVIE_ACTION.GET_SELECTED_MOVIE_SUCCESS, 
    payload
  }
}