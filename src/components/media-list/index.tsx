import Link from "next/link";
import { MoviesListProps } from "../../@types";
import { MediaListItem } from "./components";
import { useState } from "react";
import { WrapperList } from "../wrapper-list";

interface Props {
  title: string;
  items: MoviesListProps[];
}

export const MediaList = (props: Props) => {
  const { title, items } = props;

  const [scrollX, setScrollX] = useState(0);
  const [showLeftNavigator, setShowLeftNavigator] = useState(false);
  const [showRightNavigator, setShowRightNavigator] = useState(true);
  //calcula o tamanho total da ul
  const totalWidth = items.length * 215;

  function handleLeft() {
    //valor de 430 para rodar de dois em dois itens
    const x = scrollX + 430;

    if (x >= 0) {
      setScrollX(0);
      setShowLeftNavigator(false);
      return;
    }
    setScrollX(x);
    !showRightNavigator && setShowRightNavigator(true);
  }

  function handleRight() {
    const totalWidth = items.length * 215;
    const x = scrollX - 430;
    if (window.innerWidth - totalWidth > x) {
      setScrollX(window.innerWidth - totalWidth - 60);
      setShowRightNavigator(false);
      return;
    }

    !showLeftNavigator && setShowLeftNavigator(true);
    setScrollX(x);
  }

  const mediaItems = (
    <>
      {items.map((item) => {
        return (
          <MediaListItem key={item.id}>
            <Link href={`/movie/${item.id}`}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                />
                <span>
                  <p>Ver mais</p>
                </span>
                <p>{item.title}</p>
              </div>
            </Link>
          </MediaListItem>
        );
      })}
    </>
  );

  return (
    <WrapperList itemsCount={items.length} totalWidth={totalWidth} title={title}>
      {mediaItems}
    </WrapperList>
  )
};
