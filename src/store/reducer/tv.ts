import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { TvDetailsProps, TvState } from "../../@types";
import { TV_ACTION } from "../action";

const initialSelectedTv: TvDetailsProps = {
  backdrop_path: "",
  cast: [],
  genres: [],
  id: 0,
  overview: "",
  name: "",
};

const initialState: TvState = {
  selectedTv: initialSelectedTv,
  trendingTvPerDay: [],
  trendingTvPerWeek: [],
};

export function tvReducer(state = initialState, action: AnyAction): TvState {
  switch (action.type) {
    case HYDRATE:
      return action.payload.tv;
    case TV_ACTION.GET_TRENDING_TV_SUCCESS:
      return {
        ...state,
        trendingTvPerDay: [...action.payload.trendingTvPerDay],
        trendingTvPerWeek: [...action.payload.trendingTvPerWeek],
      };
    case TV_ACTION.GET_SELECTED_TV_SUCCESS:
      return {
        ...state,
        selectedTv: action.payload,
      };
    default:
      return state;
  }
}
