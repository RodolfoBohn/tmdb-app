import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { getTrendingMoviesSaga } from "../store/action";
import { storeWrapper } from "../store/store";
import { StoreState } from "../@types";
import { MediaList } from "../components/media-list";
import { PageWrapper } from "../components/page-wrapper";
import { PrincipalIntro } from "../components/principal-intro";
import { Header } from "../components/header";

const Home: NextPage = () => {
  const moviesPerDay = useSelector(
    (state: StoreState) => state.movie.trendingMoviesPerDay
  );
  const moviesPerWeek = useSelector(
    (state: StoreState) => state.movie.trendingMoviesPerWeek
  );
  return (
    <>
      <Header hasBackgroundColor />
      <PageWrapper isPrincipal>
        <PrincipalIntro />
        <MediaList title="Filmes em alta hoje" items={moviesPerDay} />
        <MediaList title="Filmes em alta na semana" items={moviesPerWeek} />
      </PageWrapper>
    </>
  );
};

export const getServerSideProps = storeWrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(getTrendingMoviesSaga());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default Home;
