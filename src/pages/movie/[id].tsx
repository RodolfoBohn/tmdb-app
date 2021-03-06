import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { getSelectedMovieSaga } from "../../store/action";
import { storeWrapper } from "../../store/store";
import { StoreState } from "../../@types";
import { FeaturedImage } from "../../components/featured-image";
import { PageWrapper } from "../../components/page-wrapper";
import { Overview } from "../../components/overview";
import { Genres } from "../../components/genres";
import { CastList } from "../../components/cast-list";
import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { DetailsWrapper } from "../../components/details-wrapper";

const Movie: NextPage = () => {
  const movie = useSelector((state: StoreState) => state.movie.selectedMovie);
  const [backgroundHeader, setBackgroundHeader] = useState(false)

  useEffect(() => {
    const scroll = () => {
      if(window.scrollY > 100) {
        setBackgroundHeader(true)
      } else {
        setBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <>
    <Header hasBackgroundColor={backgroundHeader} />
      <FeaturedImage
        posterImage={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        title={movie.title}
      ></FeaturedImage>
      <PageWrapper isPrincipal={false}>
        <DetailsWrapper>
          <Overview overview={movie.overview} />
          <Genres genres={movie.genres} />
        </DetailsWrapper>
          <CastList title="Elenco" items={movie.cast} /> 
      </PageWrapper>
    </>
  );
};

export const getServerSideProps = storeWrapper.getServerSideProps(
  async ({ store, params }) => {
    const id = params!.id as string;

    store.dispatch(getSelectedMovieSaga(id));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default Movie;
