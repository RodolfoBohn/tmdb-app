import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { END } from "redux-saga";
import { getTrendingMoviesSaga, getTrendingTvSaga } from "../store/action";
import { storeWrapper } from "../store/store";
import { StoreState } from "../@types";
import { MediaList } from "../components/media-list";
import { PageWrapper } from "../components/page-wrapper";
import { PrincipalIntro } from "../components/principal-intro";
import { Header } from "../components/header";
import {useEffect} from 'react'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const moviesPerDay = useSelector(
    (state: StoreState) => state.movie.trendingMoviesPerDay
  );
  const moviesPerWeek = useSelector(
    (state: StoreState) => state.movie.trendingMoviesPerWeek
  );
  const tvPerDay = useSelector(
    (state: StoreState) => state.tv.trendingTvPerDay
  );
  const tvPerWeek = useSelector(
    (state: StoreState) => state.tv.trendingTvPerWeek
  );

  useEffect(() => {
    dispatch(getTrendingMoviesSaga())
    dispatch(getTrendingTvSaga());
  },[dispatch])

  return (
    <>
      <Header hasBackgroundColor />
      <PageWrapper isPrincipal>
        <PrincipalIntro />
        <MediaList type="movie" title="Filmes em alta hoje" items={moviesPerDay} />
        <MediaList type="movie" title="Filmes em alta na semana" items={moviesPerWeek} />
        <MediaList type="tv" title="Séries em alta hoje" items={tvPerDay} />
        <MediaList type="tv" title="Séries em alta na semana" items={tvPerWeek} />
      </PageWrapper>
    </>
  );
};

// export const getServerSideProps = storeWrapper.getServerSideProps(
//   async ({ store }) => {
//     store.dispatch(getTrendingMoviesSaga());
//     store.dispatch(getTrendingTvSaga());
//     store.dispatch(END);
//     await store.sagaTask.toPromise();
//   }
// );

export default Home;
