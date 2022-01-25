import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { getTrendingMoviesSaga } from "../store/action";
import { storeWrapper } from "../store/store";
import { StoreState } from "../@types";
import { MediaList } from "../components/media-list";
import { PageWrapper } from "../components/page-wrapper";

const Home: NextPage = () => {
  const movies = useSelector((state: StoreState) => state.movie.trendingMovies);
  return (
    <PageWrapper>
      <MediaList title="Filmes em alta hoje" items={movies} />
    </PageWrapper>
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
