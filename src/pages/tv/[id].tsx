import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { StoreState } from "../../@types";
import { CastList } from "../../components/cast-list";
import { DetailsWrapper } from "../../components/details-wrapper";
import { FeaturedImage } from "../../components/featured-image";
import { Genres } from "../../components/genres";
import { Header } from "../../components/header";
import { Overview } from "../../components/overview";
import { PageWrapper } from "../../components/page-wrapper";
import { getSelectedTvSaga } from "../../store/action";
import { storeWrapper } from "../../store/store";

const Tv: NextPage = () => {
  const [backgroundHeader, setBackgroundHeader] = useState(false);
  const tv = useSelector((state: StoreState) => state.tv.selectedTv);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 100) {
        setBackgroundHeader(true);
      } else {
        setBackgroundHeader(false);
      }
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <Header hasBackgroundColor={backgroundHeader} />
      <FeaturedImage
        posterImage={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
        title={tv.name}
      />
      <PageWrapper isPrincipal={false}>
        <DetailsWrapper>
          <Overview overview={tv.overview} />
          <Genres genres={tv.genres} />
        </DetailsWrapper>
        <CastList title="Elenco" items={tv.cast} />
      </PageWrapper>
    </>
  );
};

export const getStaticProps = storeWrapper.getStaticProps(
  async ({ store, params }) => {
    const id = params!.id as string;

    store.dispatch(getSelectedTvSaga(id));
    store.dispatch(END);

    await store.sagaTask.toPromise();

    return {
      revalidate: 60 * 60,
    }
  }
);

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export default Tv;
