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
};

const initialState: MovieState = {
  selectedMovie: initialSelectedMovie,
  trendingMovies: initialTrendingMovies,
};
function movieReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case HYDRATE:
      return action.payload.movie;
    case MOVIE_ACTION.GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        trendingMovies: [...action.payload],
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
