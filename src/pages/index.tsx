import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { List } from "../components/media-list";
import { getTrendingMoviesSaga } from "../store/action";
import { storeWrapper } from "../store/store";
import { StoreState } from "../@types";
import { ListWithTitle } from "../components/depoisMudo";
import { PageWrapper } from "../components/page-wrapper";

const Home: NextPage = () => {
  const movies = useSelector((state: StoreState) => state.movie.trendingMovies);
  return (
    <PageWrapper>
      <ListWithTitle title="Filmes em alta hoje" items={movies} />
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
