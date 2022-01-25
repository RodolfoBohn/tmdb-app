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

const Movie: NextPage = () => {
  const movie = useSelector((state: StoreState) => state.movie.selectedMovie);

  return (
    <>
      <FeaturedImage
        posterImage={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        title={movie.title}
      ></FeaturedImage>
      <PageWrapper>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Overview overview={movie.overview} />
          <Genres genres={movie.genres} />
        </div>
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
