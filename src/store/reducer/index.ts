import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { MOVIE_ACTION } from "../action";
import { MovieDetailsProps, MoviesListProps, MovieState } from "../../@types";

const initialTrendingMovies: MoviesListProps[] = [];
const initialSelectedMovie: MovieDetailsProps = {
  backdrop_path: "",
  genres: [],
  id: 0,
  overview: "",
  title: "",
  cast: []
};

const initialState: MovieState = {
  selectedMovie: initialSelectedMovie,
  trendingMoviesPerDay: initialTrendingMovies,
  trendingMoviesPerWeek: initialTrendingMovies,
};
function movieReducer(state = initialState, action: AnyAction):MovieState {
  switch (action.type) {
    case HYDRATE:
      return action.payload.movie;
    case MOVIE_ACTION.GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        trendingMoviesPerDay: [...action.payload.trendingMoviesPerDay],
        trendingMoviesPerWeek: [...action.payload.trendingMoviesPerWeek]
      };
    case MOVIE_ACTION.GET_SELECTED_MOVIE_SUCCESS:
      return {
        ...state,
        selectedMovie: { ...action.payload },
      };
    default:
      return state;
  }
}

export default combineReducers({
  movie: movieReducer,
});
