import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { TvState } from "../../@types";
import { TV_ACTION } from "../action";

const initialState: TvState = {
  selectedTv: {},
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
    default:
      return state;
  }
}
